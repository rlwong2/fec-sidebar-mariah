import React from 'react';

const About = ({about}) => (

  <div id="collapsed">
    <div id="wrapper" style={{maxHeight: '85px'}}>
      <div id="truncated-description">
        {console.log(typeof about)}
        {about.substring(2, about.length - 3).split('\"').join('\n')}

      </div>
    </div>
  </div>

);

export default About;