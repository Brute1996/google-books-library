import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IBooksItem } from "../../helpers/models/booksRes";
import { NOT_FOUND_IMG } from "../../helpers/constants/constants";
import { BookDetailsWrapper } from "./BookDetails.styled";
import { Divider, Skeleton, Typography } from "@mui/material";
import { getBookById } from "../../helpers/api/getBookById";
import BookNotFound from "./BookNotFound/BookNotFound";
import Loader from "../BookList/Loader/Loader";
import BackButton from "./BackButton/BackButton";

const BookDetails = () => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [book, setBook] = useState<IBooksItem | null>(null);
  const { bookId } = useParams();

  const [isBookLoaded, setIsBookLoaded] = useState(true);

  useEffect(() => {
    setIsBookLoaded(false);
    (async () => {
      const fetchedBook = await getBookById(bookId!);

      if (fetchedBook) {
        setBook(fetchedBook);
      }
      try {
      } catch (error) {
      } finally {
        setIsBookLoaded(true);
      }
    })();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!isBookLoaded) {
    return <Loader />;
  }

  if (book) {
    const { authors, categories, imageLinks, title, description } =
      book.volumeInfo;

    const zoomedImg = imageLinks?.thumbnail.includes("zoom=1")
      ? imageLinks.thumbnail.replace("zoom=1", "zoom=0")
      : imageLinks?.thumbnail;

    return (
      <BookDetailsWrapper>
        <div className="img-wrapper">
          <img
            onLoad={() => setIsImageLoaded(true)}
            loading="lazy"
            width="100%"
            src={
              imageLinks.medium ||
              imageLinks.small ||
              zoomedImg ||
              NOT_FOUND_IMG
            }
            alt={title || "Title not found"}
          />
          {!isImageLoaded && (
            <Skeleton
              className="img-skeleton"
              sx={{ bgcolor: "grey.300" }}
              variant="rectangular"
            />
          )}
        </div>
        <div className="book-info">
          <BackButton />
          {categories?.length > 0 && (
            <Typography color="gray">{categories.join(", ")}</Typography>
          )}
          <Typography component="h2" variant="h4">
            {title}
          </Typography>
          <div dangerouslySetInnerHTML={{ __html: description }} />
          <Divider sx={{ width: "100%", margin: "12px 0" }} />
          {authors?.length > 0 && (
            <Typography color="gray">{authors.join(", ")}</Typography>
          )}
        </div>
      </BookDetailsWrapper>
    );
  } else {
    return <BookNotFound />;
  }
};

export default BookDetails;
