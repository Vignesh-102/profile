import headerSCSS from './header.module.scss'

export default function Header(){
    return(
        <div className={headerSCSS.headerContainer}>
            <div className={headerSCSS.nameContainer}>
            <span className={headerSCSS.name}>VIGNESH P</span>
                <br></br>
                <span className={headerSCSS.designation}>Software Engineer</span>
            </div>
        </div>
    )
}