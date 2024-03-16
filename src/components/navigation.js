import React from 'react';
import Typography from '@material-ui/core/Typography';
import '../styles/navigation.scss';
import Resume from '../files/resume.pdf';
import logo from '../img/logo.png';
import resumeBtn from '../img/resume button.png';
import Link from '@material-ui/core/Link';
import { Link as RouterLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

function Navigation ({ showAboutMe = true }) {
    const useStyles = makeStyles(theme => ({
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
          [theme.breakpoints.down('sm')]: {
            height: 40,
            width: 60,
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
          },
          [theme.breakpoints.down('sm')]: {
            paddingLeft: 20
          }
        }
      }));
      const classes = useStyles();
    return <Typography
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
            {showAboutMe &&
                <li><RouterLink to="/more-about-me">About me</RouterLink></li>
                } 
            <li><RouterLink to="/my-work">My Work</RouterLink></li>
            <li><RouterLink to="/contact-us">Contact</RouterLink></li>
            <li><a href={Resume} download="dhanashree_chatrani_resume"><img src={resumeBtn} alt="Download resume" /></a></li>
        </ul>
        </div>
    </Typography>
}

export default Navigation;