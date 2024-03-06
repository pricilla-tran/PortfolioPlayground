import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';

export const NavigationBarData = [
    {
        title: "Home",
        icon: <HomeIcon/>,
        path: "/home",
        cName: 'nav-text'
    },
    {
        title: "Cork Board",
        icon: <NoteAltIcon/>,
        path: "/corkboard",
        cName: 'nav-text'
    },
    {
        title: "Beauty Room",
        icon: <FaIcons.FaPaintBrush/>,
        path: "/beautyroom",
        cName: 'nav-text'
    },
    {
        title: "Musical Universe",
        icon: <FaIcons.FaMusic/>,
        path: "/musicaluniverse",
        cName: 'nav-text'
    },
    // {
    //     title: "Tbd",
    //     icon: <HomeIcon/>,
    //     path: "/Tbd",
    //     cName: 'nav-text'
    // }
];