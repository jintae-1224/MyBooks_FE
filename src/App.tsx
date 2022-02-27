import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Add from './pages/Add';
import Detail from './pages/Detail';
import Edit from './pages/Edit';
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Signin from './pages/Signin';

function App() {
  return (
    // 그 외 모든 경로는 "/*"
    // error Page처리
    // 1. npm i react-error-boundary 
    // 2. <ErrorBoundary>...</ErrorBoundary>
    <ErrorBoundary FallbackComponent={ErrorPage}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin/>} />
          <Route path="/add" element={<Add/>} />
          <Route path="/book/:id" element={<Detail/>} />
          <Route path="/edit" element={<Edit/>} />
          <Route path="/*" element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
