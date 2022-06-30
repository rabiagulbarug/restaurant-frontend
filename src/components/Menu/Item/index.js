import Link from "next/link";
import clsx from "clsx";

export const MenuItem = ({title, subTitle, icon, link}) => {
    return (
        <div className="small-box bg-info">
            <div className="inner">
                <h4>{title}</h4>
                {subTitle && <p>{subTitle}</p>}
            </div>
            <div className="icon">
                <i className={clsx('ion', icon)}></i>
            </div>
            <Link href={link}>
                <a className="small-box-footer">
                    <span className="mr-2">Detaylar</span>
                    <i className="fas fa-arrow-circle-right"></i>
                </a>
            </Link>
        </div>
    );
}