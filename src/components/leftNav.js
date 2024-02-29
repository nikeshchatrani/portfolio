import React from 'react';
import '../styles/app.scss';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import BehanceIcon from '../img/behance.png';

const scrollToRef = ref => window.scrollTo({
  top: ref.current.offsetTop,
  left: ref.current.offsetLeft,
  behavior: 'smooth'
});

function LeftNav(props) {

  const { aboutMe, portfolio, contactUs } = props;

  const executeScroll = ref => scrollToRef(ref);

    return (
        <div className="left-nav">
            <ul>
                <li className="about-me" onClick={() => executeScroll(aboutMe)}>About me</li>
                <li className="portfolio" onClick={() => executeScroll(portfolio)}>My work</li>
                <li className="contactUs" onClick={() => executeScroll(contactUs)}>Get in touch</li>
                <li className="icons initial">
                  <a href="https://www.linkedin.com/in/dhanashree-chatrani-76443753/" target="_blank" rel="noopener noreferrer">
                    <LinkedInIcon
                      fontSize={'small'}
                      color={'inherit'}/>
                  </a>
                </li>
                <li className="icons">
                  <a href="https://www.behance.net/Dhanashree" target="_blank" rel="noopener noreferrer">
                    <img
                      src={BehanceIcon}
                      alt='behance-icon'/>
                  </a>
                </li>
                <li className="icons">
                  <a href="https://twitter.com/artberrys" target="_blank" rel="noopener noreferrer">
                    <TwitterIcon fontSize={'small'}/>
                  </a>
                </li>
            </ul>
        </div>
    );
}

export default LeftNav;
