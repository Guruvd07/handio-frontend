import api from "../api/axios";

export const getAllProviders = async (token: string) => {
  const res = await api.get("/admin/providers", {
    headers: { Authorization: `Bearer ${token}` },
  });

  return res.data;
};

export const verifyProvider = async (
  id: string,
  token: string
) => {
  const res = await api.patch(
    `/admin/verify/${id}`,
    {},
    { headers: { Authorization: `Bearer ${token}` } }
  );

  return res.data;
};