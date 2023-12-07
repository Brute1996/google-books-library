import styled from "@emotion/styled";

export const BookDetailsWrapper = styled.div`
  padding: 20px;
  gap: 36px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 900px) {
    flex-direction: row;
    align-items: start;
  }

  .img-wrapper {
    position: relative;

    img {
      min-width: 300px;
      max-width: 300px;
      box-shadow: 4px 4px 14px;
      border-radius: 4px;

      @media (min-width: 450px) {
        min-width: 400px;
        max-width: 400px;
      }
    }
  }

  .book-info {
    width: 100%;
  }

  .img-skeleton {
    width: 100%;
    min-height: 400px;
  }

  .back-button-wrapper {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 12px;
  }
`;
