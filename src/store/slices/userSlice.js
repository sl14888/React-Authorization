import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  email: null,
  password: null,
  token: null,
  id: null,
  firstName: null,
  lastName: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.token = action.payload.token;
      state.id = action.payload.id;
    },
    removeUser(state) {
      state.email = null;
      state.token = null;
      state.password = null;
      state.id = null;
    },
    setProfile(state, action) {
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
    },
  },
});

export const { setUser, removeUser, setProfile } = userSlice.actions;

export default userSlice.reducer;
