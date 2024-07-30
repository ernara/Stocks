import axios from "axios";
import { CompanySearch } from "./company";

export interface SearchResponse {
  data: CompanySearch[];
}

export const searchCompanies = async (query: string) => {
  try {
    const apiKey = process.env.REACT_APP_API_KEY;
    if (!apiKey) {
      throw new Error("API key is missing. Please check your environment variables.");
    }

    const response = await axios.get<SearchResponse>(
      `https://financialmodelingprep.com/api/v3/search`, 
      {
        params: {
          query,
          limit: 10,
          exchange: 'NASDAQ',
          apikey: apiKey
        }
      }
    );

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("API key used: ", process.env.REACT_APP_API_KEY);
      console.error("Error message: ", error.message);
      if (error.response) {
        // Logging detailed error response if available
        console.error("Error response data: ", error.response.data);
        console.error("Error status: ", error.response.status);
      }
      return error.message;
    } else {
      console.error("Unexpected error: ", error);
      return "An unexpected error has occurred.";
    }
  }
};
