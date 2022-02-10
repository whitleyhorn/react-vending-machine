import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

class Berries extends Component {
    render() {
        return (
            <div className="Berries">
                <h1>I love berries!</h1>
                <Navbar />
                <img src="https://i0.wp.com/creativeconnectionsforkids.com/wp-content/uploads/2012/05/strawberry2.jpg" width="400px" style={{marginTop: '100px'}}/>
                <Link to="/" style={{display: 'block'}}>Go back</Link>
            </div>
        );
    }

}

export default Berries;
