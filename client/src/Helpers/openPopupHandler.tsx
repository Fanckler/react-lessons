import React from 'react';

interface IProps {
    children: any
}

export const OpenLoginPopup:React.FC<IProps> = (props) => {
    const {children} = props;

    const click = (event:any) => {
        console.log(2);
    };

    return (
        <div onClick={click}>
           {children}
        </div>
    );
}


