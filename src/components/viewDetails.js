import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { ImageLoader } from './details';
import '../styles/viewDetails.scss';
import CloseIcon from '@material-ui/icons/Close';

function getModalStyle() {
  const top = 30;
  const left = 50;

  return {
    top: `${top}px`,
    left: `${left}px`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'fixed',
    width: '90%',
    height: '90%',
    overflow: 'auto',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    [theme.breakpoints.down('md')]: {
      width: '70%',
      left: '10px !important'
    }
  },
  closeIcon: {
    float: 'right'
  }
}));


const ViewDetails = (props) => {

  const { show, setModal } = props;

  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);

  return (
      <Modal
        open={show}
        onClose={() => setModal()}
        aria-labelledby="project-details"
        aria-describedby="project-detailed-view"
      >
        <div style={modalStyle} className={classes.paper}>
          <CloseIcon
            fontSize={'small'}
            color={'inherit'}
          classes={{root: classes.closeIcon}}
          onClick={() => setModal()}/>
          <ImageLoader />
        </div>
      </Modal>
  );
};

export default ViewDetails;
