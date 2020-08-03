import React, { useContext } from 'react';
import images from '../images';
import { ProjectContext } from '../portfolio';

const ImageLoader = () => {
  const project = useContext(ProjectContext);
  return (
    <div className="details-image">
      {
        images[project].map((el, i) => {
          return <img
            key={i}
            src={require(`./../../img/projects${el.src}`)}
            alt={el.title}/>
        })
      }
    </div>
  );
};

export default ImageLoader;
