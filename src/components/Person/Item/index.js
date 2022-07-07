
export const PersonItem = ({name, surname, mail, phone}) => {
return(
    <div className="col-12">
                <table className="table text-nowrap">
                    <tbody>
                        <tr>
                            <td className="col-2">{name}</td>
                            <td className="col-2">{surname}</td>
                            <td className="col-2">{mail}</td>
                            <td className="col-2">{phone}</td>
                        </tr>
                    </tbody>
                </table>
    </div>
);
}