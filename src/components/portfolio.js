import React, { useState } from 'react';
import '../styles/portfolio.scss';
import ClientActivation from '../img/projects/clientActivation/1.png';
import PaymentIntegration from '../img/projects/Payment Integration App/1.png';
import FieldTrial from '../img/projects/fieldTrial/1.jpg';
import UPM from '../img/projects/UPM-CONTXT/1.jpg';
import Vendor from '../img/projects/Vendor and contract management/1.jpg';
import navigationApp from '../img/projects/navigationApp/1.png';
import ViewDetails from './viewDetails';

export const ProjectContext = React.createContext('');

const Portfolio = ({ele}) => {

  const [open, setOpen] = useState(false);
  const [project, setProject] = useState('');

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <React.Fragment>
      <div ref={ele} className="portfolio-container" style={{ backgroundColor: '#ddf3f5', height: 'auto' }}>
        <div className="project-wrapper">
          <div className="project-image-wrapper">
            <img alt={'upm'} src={UPM}/>
          </div>
          <h3 className="project-title">User Preference Management</h3>
          <div
            className="project-details"
            onClick={(e) => {
              e.preventDefault();
              setProject('upm');
              handleOpen();
            }}>
            View Details<span className="view-details-arrow">&#8594;</span></div>
        </div>
        <div className="project-wrapper">
          <div className="project-image-wrapper">
            <img alt={'payment-integrity'} src={PaymentIntegration}/>
          </div>
          <h3 className="project-title">Payment Integrity Application</h3>
          <div
            className="project-details"
            onClick={(e) => {
              e.preventDefault();
              setProject('payment');
              handleOpen();
            }}>
            View Details<span className="view-details-arrow">&#8594;</span></div>
        </div>
        <div className="project-wrapper">
            <div className="project-image-wrapper">
              <img alt={'field-trial'} src={FieldTrial}/>
            </div>
          <h3 className="project-title">Field Trial Management</h3>
          <div
            className="project-details"
            onClick={(e) => {
              e.preventDefault();
              setProject('fieldTrial');
              handleOpen();
            }}>
            View Details<span className="view-details-arrow">&#8594;</span></div>
        </div>
        <div className="project-wrapper">
          <div className="project-image-wrapper">
            <img alt={'client activation'} src={ClientActivation}/>
          </div>
          <h3 className="project-title">Client Activation Server</h3>
          <div
            className="project-details"
            onClick={(e) => {
              e.preventDefault();
              setProject('clientActivation');
              handleOpen();
            }}>
            View Details<span className="view-details-arrow">&#8594;</span></div>
        </div>
        <div className="project-wrapper">
          <div className="project-image-wrapper">
            <img alt={'vendor'} src={Vendor}/>
          </div>
          <h3 className="project-title">Vendor and Contract Management</h3>
          <div className="project-details"
              onClick={(e) => {
                e.preventDefault();
                setProject('vendor');
                handleOpen();
              }}>View Details<span className="view-details-arrow">&#8594;</span></div>
        </div>
        <div className="project-wrapper">
          <div className="project-image-wrapper">
            <img alt={'navigation-app'} src={navigationApp}/>
          </div>
          <h3 className="project-title">Navigation App</h3>
            <div className="project-details"
                 onClick={(e) => {
                   e.preventDefault();
                   setProject('navigationApp');
                   handleOpen();
                 }}>View Details<span className="view-details-arrow">&#8594;</span></div>
        </div>
    </div>
      <ProjectContext.Provider value={project}>
        <ViewDetails
          show={open}
          setModal={handleClose}/>
      </ProjectContext.Provider>
    </React.Fragment>
  );
};

export default Portfolio;
