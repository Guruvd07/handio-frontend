import api from "../api/axios";

export const fetchProviders = async (filters: {
  category: string;
  city: string;
  area: string;
}) => {

  const res = await api.get("/providers", {
    params: filters,
  });

  return res.data;
};

export const fetchProviderById = async (id: string) => {

  if (!id || id === "dashboard") {
    throw new Error("Invalid provider id");
  }

  const res = await api.get(`/providers/${id}`);

  return res.data;
};