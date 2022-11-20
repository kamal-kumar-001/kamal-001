import React from "react";
import './styles.scss';

const PageHeaderContent = (props) => {
    const { headerText, lastText } = props;
    return (
        <div className="wrapper">
            <h2>{headerText}<span className='lastText'> {lastText}</span></h2>
            {/* <span>{icon}</span> */}
        </div>
    )
};

export default PageHeaderContent;