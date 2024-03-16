import React from 'react';
import '../styles/viewDetails.scss';
import DSS from '../img/projects/dss/DSS-2x.jpeg';
import WUDS from '../img/projects/design-system/Design Sysem-2x.jpeg';
import NavApp from '../img/projects/maximus-pro/Maximus Pro-2x.jpeg';
import Timesheet from '../img/projects/timesheet/Miscellaneous-2x.jpeg';
import EKYC from '../img/projects/ekyc/KYC-2x.jpeg';
import { useParams, useHistory } from 'react-router-dom';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const imageInfoObj = {
  dss: {
    image: DSS,
    altText: 'dss',
    backBtnColor: 'white'
  },
  wuds: {
    image: WUDS,
    altText: 'wuds',
    backBtnColor: 'black'
  },
  navApp: {
    image: NavApp,
    altText: 'navApp',
    backBtnColor: 'white'
  },
  timesheet: {
    image: Timesheet,
    altText: 'timesheet',
    backBtnColor: 'black'
  },
  ekyc: {
    image: EKYC,
    altText: 'ekyc',
    backBtnColor: 'black'
  }
}


const ViewDetails = () => {
  const { id } = useParams();
  const history = useHistory();
  const goBack = () => {
    history.goBack();
  };
  const { image, altText, backBtnColor } = imageInfoObj[id];

  return (
      <div className='view-details-wrapper'>
        <div className='back-button-wrapper'>
          <ArrowBackIcon fontSize='medium' htmlColor={backBtnColor} onClick={goBack} />
        </div>
        <img src={image} alt={altText} />
      </div>
  );
};

export default ViewDetails;
