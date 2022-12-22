import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Book from '../Body/Book';
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
      {userId ? (
        <Routes>
          <Route path="/mainpage" element={<Mainpage />} />
          <Route path="/newbook" element={<Newbook />} />
          <Route path="/book" element={<Book />} />
          <Route path="/book/:id" element={<Book />} />
          <Route path="/like/:id" element={<Book />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/firstpage" element={<Firstpage />} />
          <Route path="/auth/" element={<Auth />} />
          <Route path="/auth/reg" element={<Registration />} />
        </Routes>
      )}
    </>
  );
}
