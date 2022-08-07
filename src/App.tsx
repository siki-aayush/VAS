import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from './components/login';

import { getUserLoginFromLocalStorage } from './utils/localstorage.util';
import { Home } from './components/homepage';
import { useDispatch } from 'react-redux';
import { setIsUserLoggedIn } from './reducers/authSlice';
import AuthRoute from './hoc/AuthRoute';
import AppointmentForm from './components/Appointment/AppointmentForm';
import ScheduleForm from './pages/userAppointmentSchedule/ScheduleForm';
import ListSchedules from './pages/userAppointmentList/ListSchedules';
import PatientCreate from './pages/patientCreate/PatientCreate';
import Register from './pages/register/Register';
import PatientList from './pages/patientList/PatientList';
import VaccineCreate from './pages/vaccines/VaccineCreate';
import VaccineList from './pages/vaccines/VaccineList';

function App() {
  const dispatch = useDispatch();
  const userLogin = getUserLoginFromLocalStorage();

  React.useEffect(() => {
    if (userLogin) {
      dispatch(setIsUserLoggedIn(true));
    }
  }, [dispatch, userLogin]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/user/appointment" element={<AppointmentForm />} />
          <Route path="/user/appointment/list" element={<ListSchedules />} />
          <Route path="/user/appointment/schedule" element={<ScheduleForm />} />

          <Route path="/patient" element={<PatientList />} />
          <Route path="/patient/add" element={<PatientCreate />} />

          <Route path="/vaccines" element={<VaccineList />} />
          <Route path="/vaccines/add" element={<VaccineCreate />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<h1>Page not found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
