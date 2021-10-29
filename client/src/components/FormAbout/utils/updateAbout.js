import axios from "axios";
import { LOCALHOST_URL } from "../../../redux/constants/index";

export const updateAbout = (id) => {
  return async () => {
    try {
      await axios.get(`${LOCALHOST_URL}/about/update/${id}`);
    } catch (err) {
      console.log(err);
    }
  };
};
