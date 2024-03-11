import React from 'react';
import '../styles/viewDetails.scss';
import DSS from '../img/projects/dss/DSS-2x.jpeg';
import WUDS from '../img/projects/design-system/Design Sysem-2x.jpeg';
import NavApp from '../img/projects/maximus-pro/Maximus Pro-2x.jpeg';
import Timesheet from '../img/projects/timesheet/Miscellaneous-2x.jpeg';
import EKYC from '../img/projects/ekyc/KYC-2x.jpeg';
import { useParams } from 'react-router-dom';

const imageInfoObj = {
  dss: {
    image: DSS,
    altText: 'dss'
  },
  wuds: {
    image: WUDS,
    altText: 'wuds'
  },
  navApp: {
    image: NavApp,
    altText: 'navApp'
  },
  timesheet: {
    image: Timesheet,
    altText: 'timesheet'
  },
  ekyc: {
    image: EKYC,
    altText: 'ekyc'
  }
}


const ViewDetails = () => {
  const { id } = useParams();
  const getInfoObj = imageInfoObj[id];

  return (
      <div className='view-details-wrapper'>
        <img src={getInfoObj.image} alt={getInfoObj.altText} />
      </div>
  );
};

export default ViewDetails;
