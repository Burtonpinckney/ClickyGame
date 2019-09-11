import React from "react";

const LuckyImage = props => {
    return <img src={props.image} alt={props.name} onClick={props.onClick} />;
};

export default LuckyImage;