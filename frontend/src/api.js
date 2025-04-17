import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8000",
});

export const getLaunchPlan = async (prompt) => {
  const res = await API.post("/launch", { prompt });
  return res.data;
};

