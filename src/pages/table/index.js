import Layout from "../../components/layout";
import {TableItem} from "../../components/Table/Item";
import {useCallback, useEffect, useState} from "react";
import {useApi} from "../../hooks/api";

const Table = (props) => {
    const [tables, setTables] = useState(props.tables);
    const [loadTables, {data, errors, isLoading}] = useApi('/table');

    useEffect(() => {}, []);

    const handleLocationChange = (e) => {
        const location = e.target.value;
        loadTables({query: new URLSearchParams({location})});
    };


    useEffect(() => data && setTables(data), [data]);
    return (
        <Layout>
            <section className="content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <select className="form-control" onChange={handleLocationChange}>
                                <option value={''}>Any</option>
                                <option value="garden">Garden</option>
                                <option value="inside">Inside</option>
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        {!isLoading && !errors && tables && tables.map(g => (
                            <div className="col-lg-3 col-6" key={g.id}>
                                <TableItem
                                    name={g.name}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export async function getStaticProps() {
    const res = await fetch(`${process.env.HOST}/api/table`);
    const body = await res?.json();
    const tables = body?.data;

    return {
        props: {
            tables,
        }
    }
}


export default Table;
