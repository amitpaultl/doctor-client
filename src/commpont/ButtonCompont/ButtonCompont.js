import React from 'react';

const ButtonCompont = ({children}) => {
    return (
        <button className="text-white btn btn-primary bg-gradient-to-r from-primary to-secondary">{children}</button>
    );
};

export default ButtonCompont;