import { Link } from "react-router-dom";

const NoRouteMatch = () => {
    return (
        <div className="page_not_found">
            <h1>404 Page Not Found</h1>
            
            <Link to="/">Back to main</Link>
        </div>
    )
}

export default NoRouteMatch;