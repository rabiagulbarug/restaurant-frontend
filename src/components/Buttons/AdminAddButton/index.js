import Link from "next/link";

export const AdminAddButton = () => {
    return(
        <span>
            <Link href={{pathname : '/admin/addAdmin'}} >
                <a className="addButtons btn">Admin Ekle</a>
            </Link>
        </span>
    );
}