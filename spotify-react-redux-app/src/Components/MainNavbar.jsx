import { Link } from "react-router-dom";

const MainNavbar = () => {
    return (
        <div className="row">
            <div className="col-9 col-lg-11 mainLinks d-none d-md-flex">
                <Link to={'*'}>TRENDING</Link>
                <Link to={'*'}>PODCAST</Link>
                <Link to={'*'}>MOODS AND GENRES</Link>
                <Link to={'*'}>NEW RELEASES</Link>
                <Link to={'*'}>DISCOVER</Link>
            </div>
        </div>
    )
}

export default MainNavbar;