import noMatchSCSS from './no-match.module.scss'
import { Link } from "react-router-dom";

export default function NoMatch(){
    return(
        <div className={noMatchSCSS.noMatchContainer}>
            <div>
                The page is not available. Please Navigate to Home page.
            </div>
            <Link to='/'>Home page</Link>
        </div>
    )
}