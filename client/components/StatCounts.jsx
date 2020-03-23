import React from 'react';
import styled from 'styled-components';

const StatCounts = (props) => (
  <td className='stat-column'>
    <h3 class="stat-title">
      {props.statTitle}
    </h3>
    <div class='stat-num'>
      {props.statNum}
    </div>

  </td>
);

export default StatCounts;