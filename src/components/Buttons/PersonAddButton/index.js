import Link from "next/link";

export const PersonAddButton = () =>{
    return(
        <span>
            <Link href={{pathname : '/employee/addEmployee'}} >
                <a className="btn addButtons">Personel Ekle</a>
            </Link>
        </span>
    );
}