import RecipeCard from "../components/RecipeCard";
import styled from "styled-components";
import FilterItem from "../components/FilterItem";

const PageWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
`;

const FilterWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const ListWrapper = styled.div`
    /* display: flex; */
`;

const RecipeListWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;

const RecipeList = () => {
    return (
        <PageWrapper>
            <FilterWrapper>
                <h2>필터</h2>
                <FilterItem />
            </FilterWrapper>
            <ListWrapper>
                <h2>검색된 조합레시피(55)</h2>
                <RecipeListWrapper>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                        <RecipeCard key={num} />
                    ))}
                </RecipeListWrapper>
            </ListWrapper>
        </PageWrapper>
    );
};

export default RecipeList;
