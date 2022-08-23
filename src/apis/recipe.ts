import axios from "axios";

const URL = "http://43.200.106.127";

const jwtToken =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6ImIxYWExZGQ2LTc1M2YtNDEyMi05NmI3LTZmOTMxMTQ4MzA1ZCIsImV4cCI6MTY2MTI1MjE2M30.kpsClXAEjuv9V82DefoOVkxb5wJ338_HVmc9g1BHY2I";

export const getRecipeList = async (success: any, fail: any) => {
    try {
        const res = await axios.get(`${URL}/recipe/list`, {
            params: {
                offset: 0,
                limit: 20,
            },
        });
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

export const getDrinkList = async (success: any, fail: any) => {
    try {
        const res = await axios.get(`${URL}/drink/get/list/`);
        success(res);
    } catch {
        fail();
    }
};

export const registerSubMeterial = async (param: any, success: any, fail: any) => {
    console.log(param);
    try {
        const config = {
            headers: {
                Accept: "application/json",
                "Content-Type": "multipart/form-data",
                Authorization: `Bearer ${jwtToken}`,
            },
        };

        const res = await axios.post(`${URL}/recipe/meterial`, param, config);

        success(res);
    } catch {
        fail();
    }
};

export const registerRecipe = async (param: any, success: any, fail: any) => {
    try {
        const formData = new FormData();
        formData.append(
            "params",
            new Blob([JSON.stringify(param)], {
                type: "application/json",
            }),
        );

        console.log(formData);

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
