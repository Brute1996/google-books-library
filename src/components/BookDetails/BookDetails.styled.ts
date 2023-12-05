import styled from "@emotion/styled";

export const BookDetailsWrapper = styled.div`
  padding: 20px;

  display: flex;
  gap: 36px;

  .img-wrapper {
    position: relative;
    min-width: 400px;
    max-width: 400px;

    img {
      box-shadow: 4px 4px 14px;
      border-radius: 4px;
    }
  }

  .book-info {
    width: 100%;
  }

  .img-skeleton {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 100%;
  }

  .back-button-wrapper {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 12px;
  }
`;
