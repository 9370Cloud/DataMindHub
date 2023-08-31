import React, { useEffect } from 'react';
import Splitting from 'splitting';
import ScrollOut from 'scroll-out';

const DynamicSection = ({ imageUrl, heading, paragraph }) => {
  useEffect(() => {
    Splitting();
    ScrollOut({
      cssProps: {
        visibleY: true,
        viewportY: true
      }
    });
  }, []);

  return (
    <section className="screen" data-scroll="in">
      <div className="image">
        <img src={imageUrl} alt={heading} />
      </div>
      <div className="content">
        <h3 className="char-split">{heading}</h3>
        <p>{paragraph}</p>
      </div>
    </section>
  );
}

export default DynamicSection;
