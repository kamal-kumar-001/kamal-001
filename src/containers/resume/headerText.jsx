import React from 'react'
import './headerText.scss'
const HeaderText = (props) => {
    const { firstText, lastText } = props;
    return (
        <div className="wrapper">
            <h2>{firstText}<span className='lastText'> {lastText}</span></h2>
        </div>
    )
}

export default HeaderText;