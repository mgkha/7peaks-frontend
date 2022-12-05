export type Article = {
  id: string;
  webTitle: string;
  body: string;
  headline: string;
  trailText: string;
  thumbnail: string;
  fields: any;
};

export type Category = {
  categoryName: string;
  results: Article[];
};
