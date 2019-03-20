import React from 'react';

const Card = props => {
  const { dia } = props;
  const [year, month, day] = dia.date.split('-');
  const cDay = new Date(year, parseInt(month) - 1, day);

  return (
    <div className="card">
      <h5>{ ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'][cDay.getDay()] }</h5>
      <h6>{ `${day}/${parseInt(month) -1}/${year}` }</h6>
      <img src={dia.day.condition.icon} alt="Clima diario" className="imagebottom" />
      <div className="minmax">
        <p>
          <span className="tempmax" />
          { parseInt(dia.day.maxtemp_c) }
        </p>
        <p>
          <span className="tempmin" />
          { parseInt(dia.day.mintemp_c) }
        </p>
      </div>
    </div>
  );
};

export default Card;