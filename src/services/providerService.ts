import axios from "axios";

const API = "http://localhost:5000";

export const fetchProviders = async (filters: {
  category: string;
  city: string;
  area: string;
}) => {

  const res = await axios.get(`${API}/providers`, {
    params: filters,
  });

  return res.data;
};

export const fetchProviderById = async (id: string) => {

  if (!id || id === "dashboard") {
    throw new Error("Invalid provider id");
  }

  const res = await axios.get(`${API}/providers/${id}`);

  return res.data;
};