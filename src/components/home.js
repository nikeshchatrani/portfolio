import React, { useRef } from 'react';
import '../styles/app.scss';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import { Link as RouterLink } from 'react-router-dom';
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Resume from '../files/resume.pdf';
import logo from '../img/logo.png';
import resumeBtn from '../img/resume button.png';
import AboutMe from "./aboutMe";
import Portfolio from './portfolio';
import ContactUs from './contactUs';


function Home() {
  const font =  "'Open Sans', sans-serif";
const theme = createMuiTheme({
  typography: {
    fontFamily: font,
  }
});
  const useStyles = makeStyles( theme => ({
    link: {
      fontWeight: 'bold',
      fontSize: '40px',
      color: '#000000',
      height: '51px',
      '&:hover': {
        textDecoration: 'none'
      },
      '&:focus': {
        outline: 0
      },
    },
    logo: {
      width: '99px',
      height: '51px',
      [theme.breakpoints.down('md')]: {
        height: 25,
        width: 50,
      }
    },
    wrapper: {
      paddingTop: 34,
      paddingLeft: 70,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      [theme.breakpoints.down('md')]: {
        paddingLeft: 50
      }
    }
  }));

  const classes = useStyles();
  const aboutMe = useRef(null);
  const portfolio = useRef(null);
  const contactUs = useRef(null);

  return (
    <ThemeProvider theme={theme}>
      <div className="app">
        <React.Fragment>
          <CssBaseline />
          <Container maxWidth={false} disableGutters={true}>
            <Typography
              classes={{root: classes.wrapper}}
              style={{ backgroundColor: '#fff'}}
              component="div">
              <Link
                href="/"
                variant={'h4'}
                classes={{
                  root: classes.link
                }}>
                <img className={classes.logo} src={logo} alt="DC"/>
              </Link>
              <div className='resume-wrapper'>
                <ul>
                  <li><RouterLink to="/more-about-me">About me</RouterLink></li>
                  <li onClick={
                    () =>  window.scrollTo({
                      top: portfolio.current.offsetTop,
                      left: portfolio.current.offsetLeft,
                      behavior: 'smooth'
                    })
                  }>My Work</li>
                  <li onClick={
                    () =>  window.scrollTo({
                      top: contactUs.current.offsetTop,
                      left: contactUs.current.offsetLeft,
                      behavior: 'smooth'
                    })
                  }>
                  Contact
                  </li>
                  <li><a href={Resume} download="dhanashree_chatrani_resume"><img src={resumeBtn} alt="Download resume" /></a></li>
                </ul>
              </div>
            </Typography>
            <AboutMe ele={aboutMe}
                    portfolio={portfolio}/>
            <div className="clip-path-wrapper" />
            <Portfolio ele={portfolio}/>
            <div className="clip-path-wrapper-bottom" />
            <ContactUs ele={contactUs}/>
          </Container>
        </React.Fragment>
      </div>
    </ThemeProvider>
  );
}

export default Home;
