type ArticleFields = {
  trailText: string;
  main: string;
  body: string;
  thumbnail: string;
};

export type Article = {
  id: string;
  webTitle: string;
  body: string;
  headline: string;
  trailText: string;
  thumbnail: string;
  webPublicationDate: string;
  fields: ArticleFields;
};

export type Category = {
  categoryName: string;
  results: Article[];
};
