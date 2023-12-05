import React from "react";
import Loader from "./Loader/Loader";
import { useAppSelector } from "../../helpers/hooks/hooks";
import LoadMoreButton from "./LoadMoreButton/LoadMoreButton";
import BookCard from "./BookCard/BookCard";
import { BookListWrapper } from "./BookList.styled";
import FoundResult from "./FoundResult/FoundResult";
import { BOOKS_PER_PAGE } from "../../helpers/constants/constants";
import useSearchBooks from "../../helpers/hooks/useSearchBooks";

const BookList = () => {
  const { isBooksLoad, books, startIndex } = useAppSelector(
    (state) => state.app
  );

  useSearchBooks();

  return (
    <BookListWrapper>
      {!isBooksLoad ? (
        <Loader />
      ) : (
        <>
          {books && (
            <>
              <FoundResult totalItems={books.totalItems} />
              <ul className="cards-wrapper">
                {books?.items?.map((book) => {
                  return <BookCard key={book.id} book={book} />;
                })}
              </ul>

              {books.totalItems > BOOKS_PER_PAGE ||
              books.totalItems < startIndex ||
              !books.items ? (
                <div className="load-more-btn-wrapper">
                  <LoadMoreButton />
                </div>
              ) : null}
            </>
          )}
        </>
      )}
    </BookListWrapper>
  );
};

export default BookList;
