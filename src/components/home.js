import React, { useEffect, useRef } from 'react';
import '../styles/app.scss';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import AboutMe from "./aboutMe";
import Portfolio from './portfolio';
import ContactUs from './contactUs';
import Navigation from './navigation';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';


function Home() {
  const location  = useLocation();
  const aboutMe = useRef(null);
  const portfolio = useRef(null);
  const contactUs = useRef(null);

  useEffect(() => {
    const { pathname } = location;
    let route;
    switch(pathname) {
      case "/my-work":
        route = portfolio;
        break;
      case "/contact-us":
        route = contactUs;
        break;
      default:
        route = null;
    }
    if(route && route.current) {
      window.scrollTo({
        top: route.current.offsetTop,
        left: route.current.offsetLeft,
        behavior: 'smooth'
      });
    }
  }, [location]);

  return (
    <div className="app">
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth={false} disableGutters={true}>
          <Navigation />
          <AboutMe ele={aboutMe}
                  portfolio={portfolio}/>
          <div className="clip-path-wrapper" />
          <Portfolio ele={portfolio}/>
          <div className="clip-path-wrapper-bottom" />
          <ContactUs ele={contactUs}/>
        </Container>
      </React.Fragment>
    </div>
  );
}

export default Home;
