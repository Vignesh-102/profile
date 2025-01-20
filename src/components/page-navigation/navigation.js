
import { NavLink } from 'react-router-dom'
import navigationSCSS from './navigation.module.css'


export default function Navigation() {

    function navLinkStyles({ isActive }) {
        if (isActive) {
            return ({
                backgroundColor: 'grey',
                color: '#f3f3f3',
                boxShadow: '0 0 6px #ff0000'
            }
            )
        }
    }
    return (
        <div className={navigationSCSS.menuContainer}>
            <NavLink to='/' style={navLinkStyles}>Home</NavLink>
            <NavLink to='/experience' style={navLinkStyles}>Experience</NavLink>
            <NavLink to='skills' style={navLinkStyles}>Skills</NavLink>
            <NavLink to='education' style={navLinkStyles}>Education</NavLink>
        </div>
    )
}