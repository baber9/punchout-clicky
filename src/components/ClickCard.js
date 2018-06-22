import React from 'react';

const ClickCard = props => (

    <div className="container">
        <div className="row">
            <div className="col">
                <div 
                    className='card click-item'
                    value={props.id}
                    onClick={() => props.handleClick(props.id)}
                >
                    <img src={props.src} alt="fighter" />
                </div>
            </div>
        </div>
    </div>
    
);

export default ClickCard;