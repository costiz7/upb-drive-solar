import React from 'react';

const MapIcon = ({ className }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 792 792" 
      fill="currentColor"
      className={className}
    >
      <path d="M396,0C215.316,0,126,125.928,126,281.268S396,792,396,792s270-355.392,270-510.732S576.684,0,396,0z M396,378 c-79.524,0-144-64.476-144-144S316.476,90,396,90c79.524,0,144,64.476,144,144S475.524,378,396,378z"/>
    </svg>
  );
};

export default MapIcon;