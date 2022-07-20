import clsx from "clsx";
import Link from "next/link";

export const TableItem = ({name, location}) => {
    return (
        <div className="small-box">
            <div className="inner">
                <span>{location}</span>
            </div>
            <a className="small-box-footer">
                <span className="mr-2">{name}</span>
                <i className="fas fa-arrow-circle-right"></i>
            </a>
        </div>
    )
}