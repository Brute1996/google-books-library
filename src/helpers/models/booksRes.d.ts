export interface IBooksItem {
  id: string;
  volumeInfo: {
    title: string;
    authors: string[];
    categories: string[];
    imageLinks: {
      extraLarge: string;
      large: string;
      medium: string;
      small: string;
      smallThumbnail: string;
      thumbnail: string;
    };
    description: string;
  };
}

export interface IBooksRes {
  items: IBooksItem[];
  totalItems: number;
}
