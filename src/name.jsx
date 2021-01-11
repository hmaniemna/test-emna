import { findAllByAltText } from '@testing-library/react';
import React, { Component } from 'react';
class Name extends Component {
    state = { }
    render() { 
        return (
        <div className="App">
                <div className="b1">
                <button type="button" class="btn btn-success btn-lg">present</button>
                <button type="button" class="btn btn-warning btn-lg">Excusé</button>
                <button type="button" class="btn btn-danger btn-lg">Abscent</button>

                </div>
            </div>
        
          );
    }
}
 
export default Name;