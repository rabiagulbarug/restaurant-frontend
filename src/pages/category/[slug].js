import Layout from "../../components/layout";
import {useEffect, useState} from "react";
import {useApi} from "../../hooks/api";
import {useRouter} from "next/router";

const Category = (props) => {
    const router = useRouter();
    const {slug} = router.query;
    const [category, setCategory] = useState(props.category);
    const [products, setProducts] = useState(props.products ?? []);
    const [loadCategory, {data, error, isLoading}] = useApi(`/category/${slug}`);
    const [loadProducts, {
        data: productsData,
        error: productsError,
        isLoading: isProductsLoading
    }] = useApi(`/product/category/${category.id}`);

    useEffect(() => data && setCategory(data), [data]);

    return (
        <Layout>
            <section className="content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div className="card">
                                <div className="card-header">
                                    <span className="card-title">{category.title}</span>
                                </div>
                                <div className="card-body table-responsive p-0">
                                    <table className="table text-nowrap">
                                        <thead>
                                        <tr>
                                            <th>~</th>
                                            <th>İsim</th>
                                            <th>Fiyat</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {products.map(product => (
                                            <tr key={product.id}>
                                                <td>{product.id}</td>
                                                <td>{product.name}</td>
                                                <td>{product.price}</td>
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

        const productsRes = await fetch(`${process.env.HOST}/api/product/category/${category?.id}`);
        const productsBody = await productsRes?.json();
        const products = productsBody?.data;

        return {
            props: {
                category,
                products,
            }
        }
    } catch (_) {
        return {notFound: true};
    }
}

export default Category;