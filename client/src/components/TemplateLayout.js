import React from 'react';

const TemplateLayout = (props) => (

  <div>
    <button onClick={() => props.handleClick(props.templateID) }>{props.templateName}</button>
  </div>
);
export default TemplateLayout;
