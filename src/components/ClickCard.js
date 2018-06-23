import React from 'react';

const ClickCard = props => (

    // pass props back to clickhandler
    <div 
        className='card click-item'
        onClick={() => props.handleClick(props.id, props.name, props.quote)}
    >
        {/* display prop image */}
        <img src={props.image} alt="fighter" />
    </div>
            
    
);

export default ClickCard;