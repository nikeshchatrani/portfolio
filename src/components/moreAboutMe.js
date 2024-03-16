import React from 'react';
import '../styles/moreAboutMe.scss';
import AboutMe from '../img/About me image.jpeg';
import Navigation from './navigation';

function MoreAboutMe({ portfolio, contactUs }) {
    return (
    <div className='more-about-me-wrapper'>
        <Navigation portfolio={portfolio} contactUs={contactUs} showAboutMe={false} />
        <div className="content-wrapper">
            <h2>A little bit  more about myself...</h2>
            <div className='paragraph-content'>
                <p>Hey, I'm Dhanashree Chatrani, based in Pune, India.</p>
                <p>In 2012, I earned my degree in Computer Science, complemented by a diploma in Web 3.0. Fascinated by the fusion of creativity and advocacy for users, I found my calling in UX Design.</p>
            </div>
            <h3>The Journey Begins</h3>
            <div className='paragraph-content'>
                <p>My journey into UX design ignited with my initial project: testing an application for users for Microsoft collaboration/communication platform. This experience sparked my exploration into user psychology and perception across diverse demographics. Over time, I honed my expertise in research methodologies, delving into user mental models to glean profound insights. Understanding user goals became my compass in structuring products from inception. Embracing the philosophy that <i>"design only gets better”</i>, I meticulously test my design approaches, from use cases to low-fidelity to high-fidelity prototypes. This iterative process enables my team to preempt major setbacks and iterate on minor ones.</p>
            </div>
            <h3>Continual Evolution</h3>
            <div className='paragraph-content'>
                <p>Our methodologies and processes are geared towards driving enhanced conversions, elevated revenue streams, and accelerated growth for every product. My UX approach is agile, adapting seamlessly to the unique demands of each project. With over 11 years of specialization in this dynamic field, I leverage my wealth of experience to streamline the solutioning process, ensuring efficient and effective outcomes.</p>
            </div>
        </div>
        <div className='image-wrapper'>
            <img src={AboutMe} alt="About me"/>
        </div>
    </div>
    )
}

export default MoreAboutMe;