import axios from "axios";

const getArticles = async ({ id }: any) => {
  try {
    const { data } = await axios.get(`/${id}`, {
      params: {
        "show-fields": "all",
        "show-elements": "all",
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

export default getArticles;
