import React from 'react';
import '../styles/about-me.scss';
import aboutMe from '../img/aboutMe.png';
import Typography from "@material-ui/core/Typography";
import { makeStyles } from '@material-ui/core/styles';

function AboutMe({ele, portfolio}) {

  const useStyles = makeStyles(theme => ({
    wrapper: {
      backgroundColor: '#faf0af',
      paddingTop: '80px',
      height: '90vh',
      display: 'flex',
      [theme.breakpoints.down('md')]: {
        paddingLeft: 0,
        paddingTop: 40,
        height: '80vh',
      }
    }
  }));

  const classes = useStyles();

    return (
        <Typography ref={ele} component="div"  classes={{root: classes.wrapper}} >
            <div className="about-me-wrapper">
                <h1 className="intro-text">
                    Hi, I'm <span className="u-bg-">Dhanashree</span>
                </h1>
                <p className="about-description">
                    Curating better and engaging experiences for people.<br/>
                    I like them to connect, feel and interact with product satisfyingly</p>
                <p className="more-about-work">
                    I want to continue simplifying lives of people by <br/>designing the enriching, reliable
                    and easy to use products.
                </p>
                <div
                    className="scrollOption"
                onClick={() => {
                  window.scrollTo({
                    top: portfolio.current.offsetTop,
                    left: portfolio.current.offsetLeft,
                    behavior: 'smooth'
                  })
                }}> Check out my work
                </div>
            </div>
            <div className="intro-image-wrapper">
                <img src={aboutMe} alt={'about-me'} />
            </div>
        </Typography>
    );
}

export default AboutMe;
