import React from 'react';

export class ClickCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            guessed: false,
        }
        this.checkGuess = this.checkGuess.bind(this);
    }

    checkGuess(e) {
        this.state.guessed === true ? 
            e.currentTarget.remove() : 
            this.setState({ guessed: true });
    }


    render() {
        return(
            <div 
                className='card click-item'
                key={this.props.imgName}
                onClick={this.checkGuess}
            >
                <img src={this.props.imgSource} alt={this.props.imgName} />
            </div>
        )
    }
}

export default ClickCard;