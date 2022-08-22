import axios from "axios";

const URL = "http://43.200.106.127";

const jwtToken =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6ImIxYWExZGQ2LTc1M2YtNDEyMi05NmI3LTZmOTMxMTQ4MzA1ZCIsImV4cCI6MTY2MTE2OTA0Mn0.BVi3sBOHY3vsA4rBREzI-vmsQpberQPJY6SwFnvCi6g";

export const getRecipeList = async (success: any, fail: any) => {
    try {
        const res = await axios.get(`${URL}/recipe/list`);
        success(res);
    } catch {
        fail();
    }
};

export const getRecipeDetail = async (param: any, success: any, fail: any) => {
    try {
        const res = await axios.get(`${URL}/recipe/detail/${param.id}`);
        success(res);
    } catch {
        fail();
    }
};

export const getSubMeterial = async (param: any, success: any, fail: any) => {
    try {
        const config = {
            // param: { param },
            headers: {
                Accept: "application/json",
                "Content-Type": "multipart/form-data",
                Authorization: `Bearer ${jwtToken}`,
            },
        };

        const res = await axios.get(`${URL}/recipe/meterial`, { params: param });
        success(res);
    } catch {
        fail();
    }
};

export const registerRecipe = async (param: any, success: any, fail: any) => {
    try {
        const formData = new FormData();
        const contents = {
            desc: param.desc, // 파일 외의 내용들은 그대로 json
            content: param.content,
        };
        formData.append(
            "contents",
            new Blob([JSON.stringify(contents)], {
                type: "application/json",
            }),
        );

        const config = {
            headers: {
                Accept: "application/json",
                "Content-Type": "multipart/form-data",
                Authorization: `Bearer ${jwtToken}`,
            },
        };

        axios.post(`${URL}/recipe/detail`, formData, config);

        success();
    } catch {
        fail();
    }
};
