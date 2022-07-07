import Layout from "../../components/layout";
import {useEffect, useState} from "react";
import {useApi} from "../../hooks/api";
import {PersonItem} from "../../components/Person/Item";
import Link from "next/link";

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
                            <div className="card removeBoxShadow">
                                <div className="card-header">
                                        <span className="card-title col-10">Personeller</span>
                                    <Link href={{pathname : '/employee/addEmployee'}} >
                                        <a className="btn">Personel Ekle</a>
                                    </Link>
                                </div>
                                {isLoading && (<span>Yükleniyor...</span>)}
                                <table className="table text-nowrap">
                                    <tbody>
                                    {!isLoading && !error && employees && employees.map(employee => (
                                        <tr key={employee.id}>
                                            <PersonItem
                                                name={employee.name}
                                                surname={employee.surname}
                                                mail={employee.mail}
                                                phone={employee.phone}
                                                salary={employee.salary}
                                            />
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
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
