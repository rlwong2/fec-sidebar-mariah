import React from 'react';

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