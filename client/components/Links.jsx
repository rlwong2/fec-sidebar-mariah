import React from 'react';
import Link from './Link.jsx';
import styled from 'styled-components';

const Links = ({links}) => (
  <ul>
    {links.map((link) =>

      <Link
        link={link}
      />
    )}
  </ul>
);

export default Links;