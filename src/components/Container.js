import React from 'react';
import ClickCard from './ClickCard';

export class Container extends React.Component {

    state = {
        images: [
            {name: "bald-bull", src: "./images/bald-bull.jpg"},
            {name: "doc-louis", src: "./images/doc-louis.jpg"},
            {name: "don-flamenco", src: "./images/don-flamenco.jpg"},
            {name: "glass-joe", src: "./images/glass-joe.jpg"},
            {name: "great-tiger", src: "./images/great-tiger.jpg"},
            {name: "king-hippo", src: "./images/king-hippo.jpg"},
            {name: "little-mac", src: "./images/little-mac.jpg"},
            {name: "mr-sandman", src: "./images/mr-sandman.jpg"},
            {name: "piston-honda", src: "./images/piston-honda.jpg"},
            {name: "soda-popinski", src: "./images/soda-popinski.jpg"},
            {name: "super-macho-man", src: "./images/super-macho-man.jpg"},
            {name: "von-kaiser", src:"./images/von-kaiser.jpg"}
        ]
    };

    render() {
        return(
            <div className="container">
                <div className="row">
                    <div className="col">
                    
                        {this.state.images.map( x => {
                            return (
                                <ClickCard imgName={x.name} imgSource={x.src} />
                            )
                        })}

                    </div>
                </div>
            </div>
        )
    }
}

export default Container;