import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

class Bananas extends Component {
    render() {
        return (
            <div className="Bananas">
                <h1>I love bananas!</h1>
                <Navbar />
                <img src="https://media.istockphoto.com/photos/girl-eating-banana-picture-id92125176?k=6&m=92125176&s=612x612&w=0&h=ev7vhhVbBpGxGwLR98fG4cHlVVYViz3-DZyJZoYWFKA=" width="250px" style={{marginTop: '100px'}}/>
                <Link to="/" style={{display: 'block'}}>Go back</Link>
            </div>
        );
    }
}

export default Bananas;
