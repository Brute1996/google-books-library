export interface IBooksItem {
  id: string;
  volumeInfo: {
    title: string;
    authors: string[];
    categories: string[];
    imageLinks: { smallThumbnail: string; thumbnail: string };
    description: string;
  };
}

export interface IBooksRes {
  items: IBooksItem[];
  totalItems: number;
}
