import { MdLocationOn } from 'react-icons/md'
import { BsTelephoneFill, BsInstagram } from 'react-icons/bs'
import { GrMail } from 'react-icons/gr'

export const personalData = [
    {
        icon: <MdLocationOn size={15} />,
        value: 'Haryana, India'
    },
    {
        icon: <BsTelephoneFill size={15} />,
        value: <a href={'tel:+919254551582'} target={"_blank"}  rel="noopener noreferrer">+919254551582</a>
        // value: '+919254551582'
    },
    {
        icon: <GrMail size={15} />,
        value: <a href={'mailto:kkhatiwal1@gmail.com'} target={"_blank"}  rel="noopener noreferrer">kkhatiwal1@gmail.com</a>
        // value: 'kkhatiwal1@gmail.com'
    },
    {
        icon: <BsInstagram size={15} />,
        value: <a href={'https://instagram.com/_kamal__001_?igshid=YmMyMTA2M2Y='} target={"_blank"}  rel="noopener noreferrer">@_kamal__001_</a>
        // value: '@_kamal__001_'
    },

]