import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api/offers",
});

export const getOffers = () =>
  API.get("/");

export const createOffer = (data) =>
  API.post("/", data);

export const updateOffer = (id, data) =>
  API.put(`/${id}`, data);

export const deleteOffer = (id) =>
  API.delete(`/${id}`);