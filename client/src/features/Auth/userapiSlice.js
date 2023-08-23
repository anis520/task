import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const addSector = createAsyncThunk("user/addSector", async (data) => {
  try {
    const response = await axios.post(
      `http://localhost:9000/api/v1/user/`,
      data
    );
    return response;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});

export const getSector = createAsyncThunk("user/getSector", async () => {
  try {
    const response = await axios.get(
      `http://localhost:9000/api/v1/user/`,

      {
        withCredentials: true,
      }
    );
    return response;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});

export const deleteSector = createAsyncThunk(
  "user/deleteSector",
  async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:9000/api/v1/user/${id}`,

        { withCredentials: true }
      );
      return response;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);
