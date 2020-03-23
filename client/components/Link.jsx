import React from 'react';
import styled from 'styled-components';

const Li = styled.li`
  margin-bottom: 5px;
  display: list-item;
  text-align: -webkit-match-parent;
`;

const A = styled.a`
  color: #999;
  text-decoration: none;
  white-space: nowrap;
  word-break: normal;
  cursor: pointer;
`;

const Link = ({link, linkName, icon}) => (
  <li>
    <A href={link} target="_blank" class="profile-social-logo">{icon + ' ' + linkName}</A>
  </li>
);

export default Link;