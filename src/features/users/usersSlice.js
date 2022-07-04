import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "0", name: "Nemanja Jovic" },
  { id: "1", name: "Milica Gluhovic" },
  { id: "2", name: "Jovana Jovic" },
];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer;
