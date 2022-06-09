import axios from "axios";

const fetchData = async (link) => {
  try {
    const data = await axios.get(link);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export default fetchData;
