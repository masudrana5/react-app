import React from 'react';
import './Country.css';

const Country = (props) => {
   const { name, population, area, flags } = props.country;
   const { common } = name;
   return (
      <div className='country'>
         <h1>{common}</h1>
         <p><small>Population: {population}</small></p>
         <p><small>Area: {area}</small></p>
         <img src={flags.png} alt="" />
      </div>
   );
};

export default Country;