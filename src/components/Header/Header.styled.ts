import styled from "@emotion/styled";

export const HeaderWrapper = styled.header`
  padding: 10px;
  background-color: #fff;
  position: sticky;
  top: 0;
  z-index: 1;

  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);

  .search-bar {
    max-width: 500px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 0 auto;
  }

  .under-search-items {
    display: flex;
    gap: 10px;
    justify-content: center;
  }
`;
