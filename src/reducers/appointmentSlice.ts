import { createSlice } from '@reduxjs/toolkit';

export const appointmentSlice = createSlice({
  name: 'appointment',
  initialState: {
    data: {
      patientId: '',
      location: '',
      serviceType: '',
      confirmNo: 0,
    },
  },
  reducers: {
    setAppointment: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setAppointment } = appointmentSlice.actions;
export default appointmentSlice.reducer;
