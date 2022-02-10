import React, { Component } from 'react';
import Navbar from './Navbar';

class VendingMachine extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="VendingMachine">
                <h1>Vending Machine</h1>
                <Navbar />
            </div>
        );
    }
}

export default VendingMachine;
