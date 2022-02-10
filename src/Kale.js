import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

class Kale extends Component {
    render() {
        return (
            <div className="Kale">
                <h1>I love kale!</h1>
                <Navbar />
                <img src="https://i.huffpost.com/gen/924327/images/o-KALE-CHIPS-facebook.jpg" width="250px" style={{marginTop: '100px'}}/>
                <Link to="/" style={{display: 'block'}}>Go back</Link>
            </div>
        );
    }
}

export default Kale;
