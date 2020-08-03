import React, { useRef } from 'react';
import '../styles/app.scss';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Resume from '../files/resume.pdf';
import LeftNav from "./leftNav";
import AboutMe from "./aboutMe";
import Portfolio from './portfolio';
import ContactUs from './contactUs';


function App() {
  const useStyles = makeStyles( theme => ({
    link: {
      fontWeight: 'bold',
      fontSize: '40px',
      color: '#000000',
      fontFamily: 'Georgia Bold',
      '&:hover': {
        textDecoration: 'none'
      },
      '&:focus': {
        outline: 0
      }
    },
    wrapper: {
      paddingTop: 30,
      paddingLeft: 80,
      [theme.breakpoints.down('md')]: {
        paddingLeft: 50
      }
    }
  }));

  const classes = useStyles();
  const aboutMe = useRef(null);
  const portfolio = useRef(null);
  const contactUs = useRef(null);

  const refs = { aboutMe, portfolio, contactUs };

  return (
    <div className="app">
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth={false} disableGutters={true}>
          <Typography
            classes={{root: classes.wrapper}}
            style={{ backgroundColor: '#faf0af'}}
            component="div">
            <Link
              href="/"
              variant={'h4'}
              classes={{
                root: classes.link
              }}>
              DG
            </Link>
            <div className='resume-wrapper'>
              <a href={Resume} target="_blank" rel="noopener noreferrer">Download Resume</a>
            </div>
          </Typography>
          <div className="border" />
          <LeftNav {...refs}/>
          <AboutMe ele={aboutMe}
                   portfolio={portfolio}/>
          <Portfolio ele={portfolio}/>
          <ContactUs ele={contactUs}/>
        </Container>
      </React.Fragment>
    </div>
  );
}

export default App;
