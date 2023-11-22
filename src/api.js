import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID Qs7AyAGI0l6pDBsVYqZwwPk0CjJXz59j5vxiOCV9U50",
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};
export default searchImages;
