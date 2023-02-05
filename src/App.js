import React, { useState, useEffect } from "react";
import localData from "./data.json";
import { Route, Routes } from "react-router-dom";
import { requestProjects } from "./store/action";
import { useSelector, useDispatch } from "react-redux";
import { Detail } from './components/Detail';
import { Header } from './components/Header';
import { Projects } from './components/Projects';
import './App.css';

function App() {
  const { data, isLoading } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestProjects(localData));
  }, []);
  
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="*" element={<Projects />} />
          <Route path="/:id" element={<Detail />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
