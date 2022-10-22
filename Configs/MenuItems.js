
import navbarStyles from '../styles/Navbar.module.css';


const MenuList = [
    {
        id:"1",
        name:"home",
        description:"Home",
        path:"/",
        classes:``,
        subMenu:[]
    },
    {
        id:"2",
        name:"about",
        description:"About Us",
        path:"/about",
        classes:``,
        subMenu:[]
    },
    {
        id:"3",
        name:"solutions",
        description:"Solutions",
        path:"/solutions",
        classes:`${navbarStyles.hasSubMenu}`,
        subMenu:[
            {
                id:"11",
                name:"design-engineering",
                description:"Design & Engineering",
                path:"/design-engineering",
                classes:``
            },
            {
                id:"22",
                name:"expendable-packaging-solution",
                description:"Expendable Packaging Solution",
                path:"/expendable-packaging-solution",
                classes:``
            },
            {
                id:"33",
                name:"heavy-duty-packaging-solution",
                description:"Heavy Duty Packaging Solution",
                path:"/heavy-duty-packaging-solution",
                classes:``
            },
            {
                id:"44",
                name:"returnable-packaging-solution",
                description:"Returnable Packaging Solution",
                path:"/returnable-packaging-solution",
                classes:``
            },
            {
                id:"55",
                name:"onsite-packaging-solution",
                description:"Onsite Packaging Solution",
                path:"/onsite-packaging-solution",
                classes:``
            },
        ]
    },
    {
        id:"4",
        name:"sustainability",
        description:"Sustainability",
        path:"/sustainability",
        classes:` ${navbarStyles.tabletView}`,
        subMenu:[]
    },
    {
        id:"5",
        name:"technology",
        description:"Technology",
        path:"/technology",
        classes:` ${navbarStyles.tabletView}`,
        subMenu:[]
    },
    {
        id:"6",
        name:"contact",
        description:"Contact Us",
        path:"/contact",
        classes:``,
        subMenu:[]
    },
]

export default MenuList;