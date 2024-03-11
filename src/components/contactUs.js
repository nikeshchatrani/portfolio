import React from 'react';
import Typography from "@material-ui/core/Typography";
import '../styles/contactUs.scss';
import { makeStyles } from '@material-ui/core/styles';

function ContactUs({ ele }) {

  const useStyles = makeStyles(() => ({
    wrapper: {
      backgroundColor: '#fff',
      display: 'flex',
      flexDirection: 'column',
      padding: '50px 70px',
    }
  }));

  const classes = useStyles();

  return (
    <Typography ref={ele} component="div" classes={{root: classes.wrapper}} >
      <div className="content">
        <div className="contact-us-intro"><i>Lets join forces for collaborative design excellence.</i></div>
        <div className="links-wrapper">
          <div className="content-left">
            <div className="email-text">
              You can email me on
            </div>
            <div className="email">
              <a href="mailto:dhanashree.gaikwad17@gmail.com">
                dhanashree.gaikwad17@gmail.com
              </a>
            </div>
          </div>
          <div className="content-right">
            <div className="connect-text">
              I'll be happy to connect
            </div>
            <ul>
              <li><a href="https://www.linkedin.com/in/dhanashree-chatrani-76443753/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              {/* <li><a href="https://twitter.com/artberrys" target="_blank" rel="noopener noreferrer">Twitter</a></li>
              <li><a href="https://www.behance.net/Dhanashree" target="_blank" rel="noopener noreferrer">Behance</a></li> */}
            </ul>
          </div>
        </div>
      </div>
    </Typography>
  );
}

export default ContactUs;
