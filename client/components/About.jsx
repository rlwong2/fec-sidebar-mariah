import React from 'react';
import styled from 'styled-components';

///////////////// STYLED COMPONENTS ////

const AboutDiv2 = styled.div`
  margin-bottom: 20px;
  max-height: 85px;
  overflow: hidden;
  position: relative;
  display: block;
`;

const A = styled.a`
  margin-top: 10px;
  cursor: pointer;
`;
/////////////////


const About = ({about}) => (
  <div>
    <AboutDiv2 id="collapsed">
      <div id="wrapper" style={{maxHeight: '85px'}}>
        <div id="truncated-description">
          {about.join('\n')}
        </div>
      </div>
    </AboutDiv2>

    <A className="collapse">
    Show more
    </A>
  </div>
);

export default About;