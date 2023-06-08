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
};
