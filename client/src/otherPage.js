import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
    return (
        <div>
            Other page here!
            <Link to='/'> Go back home </Link>
        </div>
    );
};