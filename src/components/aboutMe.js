import React from 'react';
import '../styles/about-me.scss';
import aboutMe from '../img/aboutMe.png';
import Typography from "@material-ui/core/Typography";
import { makeStyles } from '@material-ui/core/styles';
import Img from 'react-cool-img';
import { Link } from 'react-router-dom';

function AboutMe({ele}) {

  const useStyles = makeStyles(theme => ({
    wrapper: {
      backgroundColor: '#fff',
      paddingTop: '64px',
      display: 'flex',
      position: 'relative',
      overflow: 'hidden',
      [theme.breakpoints.down('md')]: {
        paddingLeft: 0,
        paddingTop: 40,
      },
      [theme.breakpoints.down('sm')]: {
        paddingLeft: 0,
        paddingTop: 0,
      },
    },
  }));

  const classes = useStyles();

    return (
        <Typography ref={ele} component="div"  classes={{root: classes.wrapper}} >
          <div className="content-wrapper">
            <div className="about-me-wrapper">
                <h1 className="about-heading" style={{color: "#2293a3", fontWeight: '600'}}>
                  Design is how it works.
                </h1>
                <p className="about-description">
                Hello! I am <b>Dhanashree Chatrani, User Experience Designer</b>. Creating enhanced user experience that prioritize human needs while driving increased conversion rates for businesses.</p>
                <div
                    className="scrollOption"><Link to="/my-work">Check my work</Link>
                </div>
            </div>
            <div className="intro-image-wrapper">
              <Img src={aboutMe} alt={'about-me'} />
            </div>
          </div>
        </Typography>
    );
}

export default AboutMe;
