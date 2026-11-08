import React from 'react';

const About = () => {
  return (
    <div id="about" className="about">
      <img
        className="about__img"
        src={process.env.PUBLIC_URL + '/assets/studio.jpg'}
        alt="The Studio"
      />

      <div className="about__content">
        <h2>The Studio</h2>
        <p>
         North Room Records is a Philadelphia recording studio offering professional audio recording, production, mixing, and mastering services
         for independent artists. Located in Philadelphia, Pennsylvania, the studio is exquiped for recording sessions, music production, audio post-production,
         and mixing services for projects of all sizes. North Room Records also serves as a creative space for local musicians to rehearse, collaborate, connect,
         with affordability and accessibility at the forefornt.
          // Rob and Packie first met in the dorms of Temple University, where they
          // both studied music. Rob has a passion for the technical side of music
          // and production, while Packie specializes in the creative direction of
          // songwriting and composition. Whether you are a full band recording an
          // LP or a singer-songwriter looking to expand your sound, the boys at
          // North Room ensure every project, big or small, sounds its best.
        </p>
      </div>
    </div>
  );
};

export default About;
