import React, { useEffect, useState } from "react";
import { ImCog } from "react-icons/im";
import setTheme from "../../helpers/theme";
import './styles.scss';

const colorArray = [
    {
        id: 'blue',
        bgColor: ' #4169e1'
    },
    {
        id: 'green',
        bgColor: '#66B95C'
    },
    {
        id: 'yellow',
        bgColor: '#ff9800'
    },
    {
        id: 'pink',
        bgColor: '#ff5e94'
    },
    {
        id: 'orange',
        bgColor: '#fa5b0f'
    },
    {
        id: 'cream',
        bgColor: '#f39977'
    },
    {
        id: 'purple',
        bgColor: '#9200ee'
    },
    {
        id: 'sky',
        bgColor: '#00D4BD'
    },
    {
        id: 'grey',
        bgColor: '#5e9e9f'
    },
    {
        id: 'red',
        bgColor: '#EB4A4C'
    },
    {
        id: 'greygen',
        bgColor: '#666d41'
    },
    {
        id: 'blood',
        bgColor: '#E82A2A'
    },
]

const Theme = () => {
    const [theme, setCurrentTheme] = useState('green');
    const [toggle, setToggle] = useState(false);

    const handleToggleTheme = (currentId) => {
        setCurrentTheme(currentId)
        setToggle(false)
    };
    useEffect(() => {
        setTheme(theme)
    }, [theme])
    return (
        <div className={`theme-wrapper ${toggle ? "active" : ""}`}>
            <div className="theme-wrapper__toggle-icon">
                <ImCog onClick={() => setToggle(!toggle)} size={30} />
            </div>
            <div className="theme-wrapper__menu">
                <h4>
                    Choose Theme
                </h4>
                <ul>
                    {colorArray.map((item, key) => (
                        <li onClick={() => handleToggleTheme(item.id)} key={key} style={{ background: item.bgColor }} />
                    ))}
                </ul>
            </div>
        </div>
    )
};
export default Theme;