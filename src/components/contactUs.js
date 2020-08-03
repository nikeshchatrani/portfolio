import React from 'react';
import Typography from "@material-ui/core/Typography";
import '../styles/contactUs.scss';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import { makeStyles } from '@material-ui/core/styles';

function ContactUs({ ele }) {

  const useStyles = makeStyles(() => ({
    wrapper: {
      backgroundColor: '#f1c5c5',
      display: 'flex',
      alignItems: 'center',
      height: '60vh',
      flexDirection: 'column',
    }
  }));

  const classes = useStyles();

  return (
    <Typography ref={ele} component="div" classes={{root: classes.wrapper}} >
      <div className="content">
        <span className="contact-us-intro">Let's talk</span>
        <div className="links-wrapper">
          <div className="content-left">
            <div className="location">
              <div className="location-icon">
                <LocationOnIcon fontSize={'small'}/>
              </div>
              <div className="location-text">
                Pune<br/>
                Maharashtra<br/>
                India</div>
            </div>
            <div className="email">
              <AlternateEmailIcon fontSize={'small'}/>
              <a href="mailto:dhanashree.gaikwad17@gmail.com">
                dhanashree.gaikwad17@gmail.com
              </a>
            </div>
          </div>
          <div className="content-right">
            <ul>
              <li><a href="https://www.linkedin.com/in/dhanashree-gaikwad-76443753/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a href="https://twitter.com/artberrys" target="_blank" rel="noopener noreferrer">Twitter</a></li>
              <li><a href="https://www.behance.net/Dhanashree" target="_blank" rel="noopener noreferrer">Behance</a></li>
            </ul>
          </div>
        </div>
      </div>
    </Typography>
  );
}

export default ContactUs;
