import styled from "@emotion/styled";

export const BookCardWrapper = styled.li`
  width: 320px;
  min-height: 400px;
  transform: scale(1);
  transition: transform 100ms ease-in-out;

  &:hover {
    cursor: pointer;
    transform: scale(0.99);
  }

  .paper {
    height: 100%;
    display: flex;
    gap: 20px;
    padding: 8px 20px;
    flex-direction: column;
    background-color: rgba(0, 0, 0, 0.15);
  }

  .img-wrapper {
    display: flex;
    justify-content: center;
    height: 200px;
    align-items: flex-start;

    img {
      max-width: 128px;
      max-height: 100%;
      box-shadow: 7px 4px 12px;
    }
  }

  .info {
    display: flex;
    flex-direction: column;
    text-align: left;

    .categories {
      text-decoration: underline;
      font-size: 14px;
      color: gray;
      height: 21px;
    }

    .author-item {
      p {
        font-size: 12px;
        color: gray;
      }
    }
  }
`;
