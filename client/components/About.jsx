import React from 'react';
import styled from 'styled-components';

const About = ({about}) => (

  <div id="collapsed">
    <div id="wrapper" style={{maxHeight: '85px'}}>
      <div id="truncated-description">
        {about.join('\n')}
      </div>
    </div>
  </div>

);

export default About;