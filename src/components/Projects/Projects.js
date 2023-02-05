import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import { Card } from '../Card';
import './Projects.css';

export function Projects() {
  const state = useSelector(state => {
    return state;
  });

  const [chipFilter, setChipFilter] = useState('');
  
  let filteredData = chipFilter === '' ? state.data : state.data.filter((project) => {
    return project?.Theme === chipFilter;
  })

  const filterByTheme = (theme) => {
    setChipFilter(theme === chipFilter ? '' : theme);
  };
  
  return (
    <div>
      {state.themes.map((theme) => (
        <div 
          key={theme} 
          className={`chip${theme === chipFilter ? ' active' : ''}`}
          onClick={() => filterByTheme(theme)}
        >
          {theme}
        </div>
      ))}
      <div className="card-wrapper">
        {filteredData.map((project) => (
          <Card
            key={project?.ProjectsID}
            data={project}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
