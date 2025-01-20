import EducationSCSS from './education.module.scss'

export default function Education() {
    return (
        <>
            <div>
                <div>Ramco Institute of Technology, Rajapalayam</div>
                <div className={EducationSCSS.smallFont}>B.E. (Electronics and Communication Engineering) (2016-2020)</div>
            </div>
            <div className={EducationSCSS.schoolSection}>
                <div>Bharath Monteesori Matric Hr.Sec School</div>
                <div className={EducationSCSS.smallFont}>Schooling</div>
            </div>
        </>
    )
}