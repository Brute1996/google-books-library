import React from "react";
import Loader from "./Loader/Loader";
import { useAppSelector } from "../../helpers/hooks/hooks";
import LoadMoreButton from "./LoadMoreButton/LoadMoreButton";
import BookCard from "./BookCard/BookCard";
import { BookListWrapper } from "./BookList.styled";
import FoundResult from "./FoundResult/FoundResult";
import { BOOKS_PER_PAGE } from "../../helpers/constants/constants";
import useSearchBooks from "../../helpers/hooks/useSearchBooks";
import WelcomeText from "./WelcomeText/WelcomeText";

const BookList = () => {
  const { isBooksLoad, books, currentPage } = useAppSelector(
    (state) => state.app
  );

  useSearchBooks();

  return (
    <BookListWrapper>
      {!isBooksLoad ? (
        <Loader />
      ) : (
        <>
          {books ? (
            <>
              <FoundResult totalItems={books.totalItems} />
              <ul className="cards-wrapper">
                {books?.items?.map((book) => {
                  return <BookCard key={book.id} book={book} />;
                })}
              </ul>

              {books?.items &&
              books.totalItems > currentPage * BOOKS_PER_PAGE ? (
                <LoadMoreButton />
              ) : null}
            </>
          ) : (
            <WelcomeText />
          )}
        </>
      )}
    </BookListWrapper>
  );
};

export default BookList;
