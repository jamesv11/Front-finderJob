import { apiRestGet, apiRestPost } from "./api";

export default {
    createOffer: async (offer: any) => {
        try {
            const path = `http://localhost:8080/offer`;
            const response = await apiRestPost(path, offer);
            return response.data;
        } catch (error) {
            throw error;
        }
    },
    getFindAllByCompanyId: async (companyId:string) => {
        try {
            const path = `http://localhost:8080/offer/findAllByCompanyId/${companyId}`;
            const response = await apiRestGet(path);
            return response.data;
        } catch (error) {
            throw error;
        }
    },
    getOffers:async () => {
        try {
          const path = "http://localhost:8080/offer";
          const result = await apiRestGet(path);
          return result.data;
        } catch (error) {
          throw error;
        }
      }
};

