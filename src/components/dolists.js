import React from 'react';

export default ({ lists}) => {
    return(
        <ul className="lists">
            { lists.map( (item, index) => <li key={ index}>{item}</li>)}
        </ul>
    )
}

//fa