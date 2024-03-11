import React from 'react';
import '../styles/about-me.scss';
import aboutMe from '../img/aboutMe.png';
import Typography from "@material-ui/core/Typography";
import { makeStyles } from '@material-ui/core/styles';
import Img from 'react-cool-img';

function AboutMe({ele, portfolio}) {

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
        height: '80vh',
      },
      /* '&::after': {
        position:'absolute',
        content: "' '",
        display:'block',
        left:0,
        bottom:'-50px',
        width:'100%',
        borderStyle: 'solid',
        borderWidth: '0 500vw 50px 0',
        borderColor: 'transparent rgba(0,0,0,0.4) transparent transparent',
    }, */
    },
  }));

  const classes = useStyles();

    return (
        <Typography ref={ele} component="div"  classes={{root: classes.wrapper}} >
          <div className="content-wrapper">
            <div className="about-me-wrapper">
                <h1 style={{color: "#2293a3", fontSize: '48px', lineHeight: '60px', fontWeight: '600'}}>
                  Design is how it works.
                </h1>
                <p className="about-description">
                Hello! I am <b>Dhanashree Chatrani, User Experience Designer</b>. Creating enhanced user experience that prioritize human needs while driving increased conversion rates for businesses.</p>
                {/* <p className="more-about-work">
                    I want to continue simplifying lives of people by <br/>designing the enriching, reliable
                    and easy to use products.
                </p> */}
                <div
                    className="scrollOption"
                onClick={() => {
                  window.scrollTo({
                    top: portfolio.current.offsetTop,
                    left: portfolio.current.offsetLeft,
                    behavior: 'smooth'
                  })
                }}> Check my work
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
