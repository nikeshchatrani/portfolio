import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/portfolio.scss';
import dss from '../img/snapshots/DSS card.png';
import wuds from '../img/snapshots/WUDS card.png';
import ekyc from '../img/snapshots/eKYC card.png';
import navApp from '../img/snapshots/Nav app card.png';
import timesheet from '../img/snapshots/Timesheet card.png';

const Portfolio = ({ ele }) => {

  return (
      <div ref={ele} className="portfolio-wrapper">
        <div className="portfolio-content">
        <h3 className="portfolio-title">My Work</h3>
        <div className="portfolio-container" style={{ backgroundColor: '#f9f9f9', height: 'auto' }}>
        <div className="project-wrapper">
            <div className="project-content">
              <div 
              className="project-image-wrapper">
                <Link to="/view-details/ekyc">
                  <img src={ekyc} alt="ekyc" />
                </Link>
              </div>
            </div> 
          </div>
          <div className="project-wrapper">
            <div className="project-content">
              <div 
              className="project-image-wrapper">
                <Link to="/view-details/wuds">
                  <img src={wuds} alt="wuds" />
                </Link>
              </div>
            </div> 
          </div>
          <div className="project-wrapper">
            <div className="project-content">
              <div 
              className="project-image-wrapper">
                <Link to="/view-details/dss">
                  <img src={dss} alt="dss" />
                </Link>
              </div>
            </div>
          </div>
          <div className="project-wrapper">
            <div className="project-content">
              <div 
              className="project-image-wrapper">
                <Link to="/view-details/navApp">
                  <img src={navApp} alt="navApp" />
                </Link>
              </div>
            </div> 
          </div>
          <div className="project-wrapper">
            <div className="project-content">
              <div 
              className="project-image-wrapper">
                <Link to="/view-details/timesheet">
                  <img src={timesheet} alt="timesheet" />
                </Link>
              </div>
            </div> 
          </div>
      </div>
      </div>
    </div>
  );
};

export default Portfolio;
