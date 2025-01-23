import { createSlice } from "@reduxjs/toolkit";

const connectionSlice = createSlice({
  name: "connections",
  initialState: null,  // or you could initialize it as an empty object {} if needed
  reducers: {
    getConnection: (state, action) => {
      return action.payload;
    },
  },
});

export const { getConnection } = connectionSlice.actions;
export default connectionSlice.reducer;
