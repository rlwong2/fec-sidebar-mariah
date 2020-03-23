import React from 'react';
import styled from 'styled-components';

const Link = ({link}) => (
  <li>
    <a href={link} target="_blank" class="profile-social-logo">Website</a>
  </li>
);

export default Link;