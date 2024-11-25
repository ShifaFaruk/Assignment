import React from 'react';

const CardFormat = (props) => {
  return (
    <div>
      <h3>Name is {props.name}</h3>
      <h3>Name is {props.age}</h3>
      <h3>Name is {props.location}</h3>
    </div>
  );
}

export default CardFormat;
