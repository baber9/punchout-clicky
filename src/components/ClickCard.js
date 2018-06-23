import React from 'react';

const ClickCard = props => (

    
                <div 
                    className='card click-item'
                    onClick={() => props.handleClick(props.id, props.name, props.quote)}
                >
                    <img src={props.image} alt="fighter" />
                </div>
            
    
);

export default ClickCard;