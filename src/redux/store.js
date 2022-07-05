import { configureStore } from '@reduxjs/toolkit';
import reservationsReducer from '../components/reservations/reservationsSlice';
import housesReducer from '../components/reservations/houseSlice';
import usersReducer from '../components/reservations/usersSlice';

const store = configureStore({
  reducer: {
    reservations: reservationsReducer,
    houses: housesReducer,
    users: usersReducer,
  },
});

export default store;
