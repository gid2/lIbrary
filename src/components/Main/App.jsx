import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Firstpage from '../Body/FirstPage';
import Mainpage from '../Body/Mainpage';
import Newbook from '../Body/Newbook';
import Navbar from '../Navbar';
import Auth from '../registr/Auth';
import Registration from '../registr/Registration';

export default function App({ userId }) {
  return (
    <>
      <Navbar userId={userId} />
      {' '}
      <Routes>
        <Route path="/auth/" element={<Auth />} />
        <Route path="/auth/reg" element={<Registration />} />
        <Route path="/firstpage" element={<Firstpage />} />
        <Route path="/mainpage" element={<Mainpage />} />
        <Route path="/newbook" element={<Newbook />} />
      </Routes>
    </>
  );
}
