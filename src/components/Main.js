import React from 'react';

const Main = () => {

    return(
        <div className="container">
            <div className="row">
                <div className="col">
                
                    {props.children}

                </div>
            </div>
        </div>
    )
}

export default Main;