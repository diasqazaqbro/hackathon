import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IRole {
  userRole: "student" | "teacher";
  isAuth: boolean;
  user?: string;
}

const initialState: IRole = {
  userRole: "student",
  isAuth: true,
  user: ''
};

export const roleSlice = createSlice({
  name: "role",
  initialState,
  reducers: {
    roleFC: (state, action: PayloadAction<any>) => {
      state.userRole = action.payload;
    },
    userFC: (state, action: PayloadAction<any>) => {
      state.user = action.payload;
    },
  },
});

export const { roleFC,userFC } = roleSlice.actions;

export default roleSlice.reducer;
