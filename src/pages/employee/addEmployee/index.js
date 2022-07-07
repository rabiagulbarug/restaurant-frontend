import {PersonDataItem} from "../../../components/PersonData/Item";
import Layout from "../../../components/layout";

const AddEmployee = () => {
    return(
        <div>
            <Layout>
                <section>
                    <PersonDataItem/>
                </section>
            </Layout>
        </div>
    );
}

export default AddEmployee;

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