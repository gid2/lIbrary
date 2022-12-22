import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Book from '../Body/Book';
import Firstpage from '../Body/FirstPage';
import Mainpage from '../Body/Mainpage';
import Newbook from '../Body/Newbook';
import Navbar from '../Navbar';
import Auth from '../registr/Auth';
import Registration from '../registr/Registration';

export default function App({ userId, oneBook }) {
  return (
    <>
      <Navbar userId={userId} />
      {' '}
      {userId ? (
        <Routes>
          <Route path="/mainpage" element={<Mainpage />} />
          <Route path="/newbook" element={<Newbook />} />
<<<<<<< HEAD
          <Route path="/book" element={<Book oneBook={oneBook} />} />
=======
          <Route path="/book" element={<Book />} />
          
          
>>>>>>> origin
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
