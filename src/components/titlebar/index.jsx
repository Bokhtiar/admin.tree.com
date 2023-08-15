import { Link } from "react-router-dom"

export const TitleBar = (props) => {
    return <>
        <div className="shadow px-3 py-2">
            <div className="d-flex justify-content-between">
                <h5>{props.current_page}</h5>
                <div>
                    <Link to={props.another_link} >
                        <span className="material-symbols-outlined ">
                            {props.icon}
                        </span>    
                    </Link>
                </div>
            </div>
        </div>
    </>
}