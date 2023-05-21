import React from 'react';

function Card(props) {
    return (
        <div class="basic-card basic-card-lips">
            <div class="card-content">
                <span class="card-title">{props.title}</span>
                <p class="card-text">
                    {props.description}
                </p>
                <p>
                    {props.quantity}
                </p>
            </div>

            <div class="card-link">
                <span>Read Full</span>
            </div>
        </div>
    );
}

export default Card;