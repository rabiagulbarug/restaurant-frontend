import Layout from "../../components/layout";
import {TableItem} from "../../components/Table/Item";
import {useEffect, useState} from "react";
import {useApi} from "../../hooks/api";

const Table = (props) => {
    const [tables, setTables] = useState(props.tables);
    const [loadTables, {data, errors, isLoading}] = useApi('/table');

    useEffect(() => data && setTables(data), [data]);

    return (
        <Layout>
            <section className="content">
                <div className="container-fluid">
                    {!isLoading && !errors && tables && tables.map(table => (
                        <div key={table.id}>
                            <TableItem
                                name={table.name}
                                location={table.location}
                            />
                        </div>
                    ))}
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
            tables
        }
    }
}


export default Table;
