import React from "react";
import styled from "styled-components";

const FilterWrapper = styled.div`
    width: 282px;
`;

const ListWrapper = styled.ul`
    list-style: none;
`;

const MainMenu = styled.li``;

const Item = styled.li``;

const SubMenu = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 20px;
`;

const CustomCheckbox = styled.input`
    width: 18px;
    height: 18px;
    &:checked {
        background: #fb5c00;
    }
`;

const menuList = {
    none: [
        { name: "주스", value: "juice" },
        { name: "탄산", value: "soft_drink" },
        { name: "기능성 음료", value: "energe_drink" },
        { name: "차/커피", value: "tea_coffe" },
        { name: "유제품", value: "milk" },
        { name: "기타", value: "none_etc" },
    ],
    alco: [
        { name: "소주", value: "soju" },
        { name: "맥주", value: "beer" },
        { name: "양주", value: "whisky" },
        { name: "탁주", value: "takju" },
        { name: "과일주", value: "fruit" },
        { name: "기타", value: "alco_etc" },
    ],
};

const FilterItem = () => {
    return (
        <FilterWrapper>
            <ListWrapper>
                <MainMenu>
                    <h3>논알콜</h3>
                    {menuList.none.map((drink) => (
                        <Item>
                            <SubMenu>
                                {drink.name}
                                <CustomCheckbox type="checkbox" value={drink.value} />
                            </SubMenu>
                        </Item>
                    ))}
                </MainMenu>
                <MainMenu>
                    <h3>알콜</h3>
                    {menuList.alco.map((drink) => (
                        <Item>
                            <SubMenu>
                                {drink.name}
                                <CustomCheckbox type="checkbox" value={drink.value} />
                            </SubMenu>
                        </Item>
                    ))}
                </MainMenu>
            </ListWrapper>
        </FilterWrapper>
    );
};

export default FilterItem;
