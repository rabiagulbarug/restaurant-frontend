import {useEffect, useState} from "react";
import {useApi} from "../../hooks/api";
import Layout from "../../components/layout";
import {PersonItem} from "../../components/Person/Item";

const Admin = (props) => {
    const [admins, setAdmins] = useState(props.admins);
    const [loadAdmins, {data, error, isLoading}] = useApi(`/admin`);

    useEffect(() => data && setAdmins(data), [data]);
    return(
        <Layout>
            <section className="content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div className="card removeBoxShadow">
                                <div className="card-header">
                                    <span className="card-title">Admin</span>
                                    <button className="" type="submit" style={{marginLeft:800}}>Admin Ekle</button>
                                </div>
                                {isLoading && (<span>Yükleniyor...</span>)}
                                <table className="table text-nowrap">
                                    <tbody>
                                    {!isLoading && !error && admins && admins.map(admin => (
                                        <tr key={admin.id}>
                                            <PersonItem
                                                name={admin.name}
                                                surname={admin.surname}
                                                mail={admin.mail}
                                                phone={admin.phone}
                                                salary={admin.address}
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

export default Admin;

export async function getStaticProps() {
    const res = await fetch(`${process.env.HOST}/api/admin`);
    const body = await res?.json();
    const admins = body?.data;

    return {
        props: {
            admins
        }
    }
}
