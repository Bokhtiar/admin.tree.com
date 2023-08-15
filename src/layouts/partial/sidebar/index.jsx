import { Link } from "react-router-dom"


export const Sidebar = () => {
    return <>
        <ul className="list-group shadow">
            <Link to="/dashboard" className="sidebar-menu" style={{ textDecoration:'none' }}>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                    Dashboaard
                    <span className="material-symbols-outlined">
                        navigate_next
                    </span>
                </li>
            </Link>
            <Link to="/category" className="sidebar-menu" style={{ textDecoration: 'none' }}>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                    Category
                    <span className="material-symbols-outlined">
                        navigate_next
                    </span>
                </li>
            </Link>

            <a href="" className="sidebar-menu" style={{ textDecoration: 'none' }}>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                    Product
                    <span className="material-symbols-outlined">
                        navigate_next
                    </span>
                </li>
            </a>

            <a href="" className="sidebar-menu" style={{ textDecoration: 'none' }}>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                    Order
                    <span className="material-symbols-outlined">
                        navigate_next
                    </span>
                </li>
            </a>

            <a href="" className="sidebar-menu" style={{ textDecoration: 'none' }}>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                    logout
                    <span className="material-symbols-outlined">
                        navigate_next
                    </span>
                </li>
            </a>
        </ul>
    </>
}