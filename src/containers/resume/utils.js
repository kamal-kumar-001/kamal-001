import { MdLocationOn } from 'react-icons/md'
import { BsTelephoneFill } from 'react-icons/bs'
// , BsInstagram
import { GrMail } from 'react-icons/gr'
import { FaCalendarAlt, FaUser } from 'react-icons/fa'


export const personalData = [

    {
        icon: <FaUser size={15} />,
        value: 'Kamal Kumar',
        class: 'a'
    },
    {
        icon: <FaCalendarAlt size={15} />,
        value: '01.09.2002',
        class: 'b'
    },
    {
        icon: <MdLocationOn size={15} />,
        value: 'Haryana, India',
        class: 'value'
    },
    {
        icon: <BsTelephoneFill size={15} />,
        // value: '+919254551582',
        value: <a href={'tel:+919254551582'} target={"_blank"}  rel="noopener noreferrer">+919254551582</a>,
        class: 'value'
    },
    {
        icon: <GrMail size={15} />,
        value: <a href={'mailto:kkhatiwal1@gmail.com'} target={"_blank"}  rel="noopener noreferrer">kkhatiwal1@gmail.com</a>,
        // value: 'kkhatiwal1@gmail.com',
        class: 'value'
    },
    // {
    //     icon: <BsInstagram size={15} />,
    //     value: '@_kamal__001_'
    // },

]

export const servicesData = [
    {
        services: "Website Development"
    },
    {
        services: "Problem Solving"
    },
    {
        services: "Auto CAD"
    },
    {
        services: "Figma"
    },
]

export const programingSkills = [

    // {
    //     skillName: 'C/C++',
    //     percentage: '90'
    // },
    // {
    //     skillName: 'Python',
    //     percentage: '80'
    // },
    {
        skillName: 'Data Structure',
        percentage: '80'
    },
    {
        skillName: 'Algorithms',
        percentage: '80'
    },
    {
        skillName: 'Html',
        percentage: '90'
    },
    {
        skillName: 'Css',
        percentage: '90'
    },
    {
        skillName: 'Javascript',
        percentage: '80'
    },

    {
        skillName: 'Django',
        percentage: '80'
    },
    {
        skillName: 'Tailwindcss',
        percentage: '90'
    },
    {
        skillName: 'Node.Js',
        percentage: '70'
    },

]

export const languageSkills = [
    {
        skillName: 'C',
        percentage: '90'
    },
    {
        skillName: 'C++',
        percentage: '90'
    },
    {
        skillName: 'Python',
        percentage: '70'
    },

]
export const eduTimeline = [
    {
        timeline: '2020-2024',
        eduname: 'NIT KKR',
        edu: 'B.TECH',
        class: "a"
    },
    {
        timeline: '2019-2020',
        eduname: 'SKY LARK ',
        edu: '12th CBSE',
        class: "b"
    },
    {
        timeline: '2017-2018',
        eduname: 'TAGORE',
        edu: '10th HBSE',
        class: "c"
    },

]
// export const workTimeline = [
//     {
//         timeline: '2020-Running',
//         workname: 'Pilayer ',
//         work: ' Pilayer',
//         class: "a"
//     },
//     {
//         timeline: '2019-2020',
//         workname: 'Avo ',
//         work: 'Manager',
//         class: "b"
//     },
//     {
//         timeline: '2017-2018',
//         workname: 'FC ',
//         work: 'Player',
//         class: "c"
//     },

// ]