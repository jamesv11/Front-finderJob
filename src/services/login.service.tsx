import { apiRestGet, apiRestPost } from "./api";

export default {
	createCompany: async (user: any) => {
		try {
			const path = `http://localhost:8080/company`;
			const response = await apiRestPost(path, user);
			return response.data;
		} catch (error) {
			throw error;
		}
  },
  createCandidate: async (user: any) => {
    try {
      const path = "http://localhost:8080/postulant";
      const response = await apiRestPost(path, user);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  login: async (user: any) => {
    try {
      const path = "http://localhost:8080/user/findUserByEmailAndPassword";
      const response = await apiRestPost(path, user);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
};
