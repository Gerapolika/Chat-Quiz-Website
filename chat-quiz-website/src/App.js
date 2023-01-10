import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import {Header} from './components/Header';
import {Login} from './pages/login';
import {Main} from './pages/Main';

function App() {

  return (
    <>
    <Routes>

      <Route path='/'
        element={<Header />}
      >

        <Route index
          element={<Login />}
        />

        <Route path='/main'
          element={<Main />}
        />

      </ Route>

    </Routes>
    </>

  );
}

export default App;