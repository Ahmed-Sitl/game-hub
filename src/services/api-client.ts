import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "d418305482374ea697f46a54afb24210",
  },
});
