
export const PersonItem = ({name, surname, mail, phone, address, salary}) => {
return(
    <div className="col-12">
                <table className="table text-nowrap">
                    <tbody>
                        <tr>
                            <td className="col-2">{name}</td>
                            <td className="col-2">{surname}</td>
                            <td className="col-2">{mail}</td>
                            <td className="col-2">{phone}</td>
                            {address && <td  className="col-2">{address}</td>}
                            {salary && <td  className="col-2">{salary}</td>}
                        </tr>
                    </tbody>
                </table>
    </div>
);
}