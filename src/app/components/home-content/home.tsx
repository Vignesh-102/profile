import './home.scss'

export default function HomeContent(){
    return(
        <div className='home-content-container'>
            <div className='menu-container'>
                <ul>
                    <li className='active'>Home</li>
                    <li>Experience</li>
                    <li>Skills</li>
                    <li>Education</li>
                </ul>
            </div>
            <div className='objective'>
            <q>As a MEAN/MERN Stack Developer, I will be responsible for designing, implementing, and maintaining full-stack applications. and will collaborate with cross-functional teams to deliver high-quality software solutions.</q>
            </div>
        </div>
    )
}