import api from "../api/axios";

/* =========================
   CREATE BOOKING
========================= */

export const createBooking = async (
  providerId: string,
  date: string,
  note: string,
  token: string
) => {
  const res = await api.post(
    "/bookings",
    { providerId, date, note },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return res.data;
};

/* =========================
   PROVIDER BOOKINGS
========================= */

export const getProviderBookings = async (token: string) => {
  const res = await api.get("/bookings/provider", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.data;
};

/* =========================
   UPDATE STATUS
========================= */

export const updateBookingStatus = async (
  id: string,
  status: string,
  token: string
) => {
  const res = await api.patch(
    `/bookings/${id}/status`,
    { status },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return res.data;
};