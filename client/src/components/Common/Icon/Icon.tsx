import React from "react";

interface IProps {
    name?: string;
}

export const Icon: React.FC<IProps> = (props) => {
    const {name} = props;

    return (
        <span className={`fa ${name}`}></span>
    );
}



