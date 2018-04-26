import React, {createClass} from 'react';
import {Link} from 'react-router';

const Main = React.createClass({
    render() {
        return (
            <div>
                <h1>
                    <Link to="/">Bishal</Link>
                </h1>
            </div>
        )
    }
});

export default Main;