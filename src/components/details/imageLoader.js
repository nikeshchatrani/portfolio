import React, { useContext } from 'react';
import images from '../images';
import Img from 'react-cool-img';
import { ProjectContext } from '../portfolio';

const ImageLoader = () => {
  const project = useContext(ProjectContext);
  return (
    <div className="details-image">
      {
        images[project].map((el, i) => {
          return <Img
            lazy={false}
            key={i}
            src={require(`./../../img/projects${el.src}`)}
            alt={el.title}/>
        })
      }
    </div>
  );
};

export default ImageLoader;
