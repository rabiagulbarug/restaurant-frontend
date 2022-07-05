import Layout from "../../components/layout";
import {useEffect, useState} from "react";
import {useApi} from "../../hooks/api";

const Employee = (props) => {
    const [employees, setEmployees] = useState(props.employees);
    const [loadEmployee, {data, error, isLoading}] = useApi(`/employee`);

    useEffect(() => data && setEmployees(data), [data]);

    return (
        <Layout>
            <section className="content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div className="card">
                                <div className="card-header">
                                    <span className="card-title">Personel</span>
                                </div>
                                {isLoading && (<span>Yükleniyor...</span>)}
                                <div className="card-body table-responsive p-0">
                                    <table className="table text-nowrap">
                                        <thead>
                                        <tr>
                                            <th>İsim</th>
                                            <th>Soyisim</th>
                                            <th>Mail</th>
                                            <th>Telefon</th>
                                            <th>Maaş</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {!isLoading && !error && employees && employees.map(employee => (
                                            <tr key={employee.id} >
                                                <td>{employee.name}</td>
                                                <td>{employee.surname}</td>
                                                <td>{employee.mail}</td>
                                                <td>{employee.phone}</td>
                                                <td>{employee.salary}</td>
                                            </tr>
                                        ))}
                                        </tbody>
                                    </table>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}

export async function getStaticProps() {
    const res = await fetch(`${process.env.HOST}/api/employee`);
    const body = await res?.json();
    const employees = body?.data;

    return {
        props: {
            employees
        }
    }
}


export default Employee;
