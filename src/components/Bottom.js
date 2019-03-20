import React from 'react';

import Card from './Card';

const Bottom = props => {
  return (
    <div className="bottom">
    {
      props.days.map(dia => {
        return (
          <Card dia={dia} key={dia.date} />
        )
      })
    }
    </div>
  );
};

export default Bottom;