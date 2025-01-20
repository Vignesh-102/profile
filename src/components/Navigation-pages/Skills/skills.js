import skillsSCSS from './skills.module.scss'
export default function Skills() {
    return (
        <>
            <div className={skillsSCSS.heading}>Frontend</div>
            <ul>
                <li>Angular</li>
                <li>React</li>
            </ul>
        </>
    )
}