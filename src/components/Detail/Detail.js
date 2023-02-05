import React, { useState, useEffect } from "react";
import Chart from 'react-apexcharts';
import { Link } from "react-router-dom"
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Table } from '../Table';
import backIcon from '../../assets/back.svg'
import './Detail.css';

export function Detail(props) {
  const { id } = useParams();
  const project = useSelector(state => {
    return state.data.find((el) => el.ProjectsID === Number(id));
  });

  var options = { year: 'numeric', month: 'numeric', day: 'numeric' };
  const startDate = new Date(project?.StartDate).toLocaleDateString("en-US", options);
  let funding = [];
  let treeChartData = [];
  project?.Funding.forEach(element => {
    let fundingFormated = {
      'Source': `${element.Source}`,
      'Instrument': `${element.Instrument}`,
      'Budget': `${element.Currency} ${element.Budget.toLocaleString()}`
    }

    let chartFormated = {
      x: `${element.Source}, ${element.Instrument}`,
      y: element.Budget
    }
    
    funding.push(fundingFormated);
    treeChartData.push(chartFormated);
  });

  // We could clear this more by creating specific chart components for different chart types
  const areas = project?.ResultAreas.filter((area) => area?.Value !== '0.00%') || [];
  const pieChart = {
    series: [...areas.map(area => Number(area.Value.slice(0, -1)))],
    options: {
      chart: {
        type: 'polarArea'
      },
      labels: [...areas.map(area => area.Area)],
      fill: {
        opacity: 1
      },
      stroke: {
        width: 1,
        colors: undefined
      },
      yaxis: {
        show: false,
        labels: {
          formatter: function(val) {
            return val + '%'
          }
        }
      },
      legend: {
        show: false
      },
      plotOptions: {
        polarArea: {
          rings: {
            strokeWidth: 0
          },
          spokes: {
            strokeWidth: 0
          },
        }
      },
      theme: {
        monochrome: {
          enabled: true,
          shadeTo: 'light',
          shadeIntensity: 0.6
        }
      }
    }
  }

  const treeChart = {
    series: [
      {
        data: treeChartData
      }
    ],
    options: {
      chart: {
        type: 'treemap',
        toolbar: {
          show: false
        }
      },
      legend: {
        show: false
      }
    }
  }

  if (project) {
    return (
      <div>
        <div className="link-icon"><Link to="/"><img src={backIcon} />Back to projects</Link></div>
        <h1>{project?.ProjectName}</h1>
        <div className="totals-section">
          <div>
            <span>{project?.TotalValue.toLocaleString()}</span>
            Total value
          </div>
          <div>
            <span>{project?.LifeTimeCO2}</span>
            Life time CO2
          </div>
          <div>
            <span>{startDate}</span>
            Start date
          </div>
          <div>
            <span>{project?.DurationMonths}</span>
            Duration (months)
          </div>
        </div>

        <div className="section">
          <div className="subtitle">Result areas</div>
          <div className="areas">
            <Chart options={pieChart.options} series={pieChart.series} type="polarArea" width={window.innerWidth > 480 ? 380 : '100%'} />
            <div>
              {areas?.map((area) => (
                <div key={area.Area} className="area">
                  <div className="title">{area.Area}</div>
                  <div className="type">{area.Type}</div>
                  <div className="value">{area.Value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="section list">
          <div>
            <div className="title">Countries</div>
            {project?.Countries.map((country) => (
              <span className="comma" key={country.CountryName}>{country.CountryName} ({country.Region})</span>
            ))}
          </div>
          <div>
            <div className="title">Entities</div>
            {project?.Entities.map((entity) => (
              <span className="comma" key={entity.EntityID}>{entity.Name} (sector: {entity.Sector})</span>
            ))}
          </div>
        </div>

        <div className="section">
          <div className="subtitle">Funding</div>
          <div className="title">Financing</div>
          <div className="funding-data">
            <Table data={funding} />
            <Chart options={treeChart.options} series={treeChart.series} type="treemap" width={window.innerWidth > 480 ? 480 : '100%'} />
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div>Loading</div>
    )
  }
}

export default Detail;
