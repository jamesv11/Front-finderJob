import axios, { AxiosRequestConfig } from "axios";

export async function apiRestGet(path: string, body = {}): Promise<any> {
	try {
		const requestOptions: AxiosRequestConfig = {
			params: body,
		};

		return await axios.get(path, requestOptions);
	} catch (error:any) {
		throw { error: error?.response?.data || error };
	}
}

export async function apiRestPost(path: string, body: any): Promise<any> {
	try {

		const data = await axios.post(path, body);
		return data;
	} catch (error:any) {
		throw { error: error?.response?.data || error };
	}
}

export async function apiRestPatch(path: string, body?: any): Promise<any> {
	try {

		return await axios.patch(path, body);
	} catch (error:any) {
		throw { error: error?.response?.data || error };
	}
}

export async function apiRestDelete(path: string, body: any): Promise<any> {
	try {

		const { data } = await axios.delete(path, {
		
			data: body,
		});
		return data;
	} catch (error:any) {
		throw { error: error?.response?.data || error };
	}
}

export async function apiRestPut(path: string, body: any): Promise<any> {
	try {

		return await axios.put(path, body);
	} catch (error:any) {
		throw { error: error?.response?.data || error };
	}
}