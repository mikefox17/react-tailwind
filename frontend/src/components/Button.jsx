import React from 'react';

const Button = props => {
    return (
        <a
            className={`px-12 py-4 rounded-lg shadow-lg bg-${props.bgColor} text-${props.textColor} font-semibold text-lg hover:shadow-2xl transform transition duration-400 `}
            href={props.url}
        >
            {props.text}
        </a>
    );
};

export default Button;
