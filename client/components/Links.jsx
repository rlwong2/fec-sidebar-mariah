import React from 'react';
import Link from './Link.jsx';

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