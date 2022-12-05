import axios from "axios";

const getTopStories = async ({
  q = "jpg png jpeg",
  queryFields = "thumbnail",
  section = "news",
  page = 1,
  pageSize = 8,
  orderBy = "newest",
}: any) => {
  try {
    const { data } = await axios.get("/search", {
      params: {
        q,
        section,
        "query-fields": queryFields,
        "show-fields": "thumbnail,headline,trailText,body",
        "order-by": orderBy,
        "page-size": pageSize,
        page,
      },
      headers: {
        "api-key": "5ffa22d1-2d1a-4381-97f9-67939681ae5d",
      },
    });

    return data.response;
  } catch (error) {
    console.log(error);
  }
};

export default getTopStories;
