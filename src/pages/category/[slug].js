import Layout from "../../components/layout";
import {useEffect, useState} from "react";
import {useApi} from "../../hooks/api";
import {useRouter} from "next/router";

const Category = (props) => {
    const router = useRouter();
    const {slug} = router.query;
    const [category, setCategory] = useState(props.category);
    const [loadCategory, {data, error, isLoading}] = useApi(`/category/${slug}`);

    useEffect(() => data && setCategory(data), [data]);

    return (
        <Layout>
            <section className="content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">{category.title}</div>
                    </div>
                </div>
            </section>
        </Layout>
    )
};

export async function getStaticPaths() {
    return {
        paths: [],
        fallback: 'blocking',
    }
}

export async function getStaticProps({params}) {
    try {
        const res = await fetch(`${process.env.HOST}/api/category/${params.slug}`);
        const body = await res?.json();
        const category = body?.data;

        return {
            props: {
                category
            }
        }
    } catch (_) {
        return {notFound: true};
    }
}

export default Category;