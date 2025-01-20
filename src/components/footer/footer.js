import footerSCSS from './footer.module.scss'

export default function Footer(){
    return(
        <div className={footerSCSS.footerContainer}>
            <div className={footerSCSS.email}>Gmail: vignesh.sof.eng@gmail.com</div>
        </div>
    )
}