import { apiRestGet, apiRestPost } from "./api";


export default {
  getOffers:async () => {
    try {
      const path = "http://localhost:8080/offer";
      const result = await apiRestGet(path);
      return result.data;
    } catch (error) {
      throw error;
    }
  }
}