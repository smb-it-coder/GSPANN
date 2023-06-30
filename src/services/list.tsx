import httpClient from "./htp-client";

export default async function getList() {

  
    try {
      const res = await httpClient.get(`v1/50abfd24-2845-4dd7-bcce-9bd732e25c47`);

      const result = {
        data: res.data,
        status: res.status
      };

      return result;

    } catch (err) {
      const error = {
        data: [],
        status: 404,
      };

      return error;
    }
  
  return [];              
}
