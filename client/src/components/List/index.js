import React from 'react';

function List(props) {


    return (
        <div>
            <h3> Grocery List </h3>
            <ul className="list-group">
                {props.id}

            </ul>

        </div>
    );
}

export default List;