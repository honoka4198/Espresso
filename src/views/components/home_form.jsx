import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Feature from '../../views/components/gear_components/feature';
import Topic from '../../views/components/gear_components/topic.jsx';


class Home_Form extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Feature />
                    <Topic />
                </div>
            </BrowserRouter>
        );
    }
}



export default Home_Form;