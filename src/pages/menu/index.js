import Layout from "../../components/layout";
import {MenuItem} from "../../components/Menu/Item";
import {useApi} from "../../hooks/api";
import {useEffect, useState} from "react";

const Menu = (props) => {
    const [categories, setCategories] = useState(props.categories);
    const [loadCategories, {data, error, isLoading}] = useApi('/category');

    useEffect(() => data && setCategories(data), [data]);

    return (
        <Layout>
            <section className="content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <button type="button" className="btn btn-primary" onClick={() => loadCategories()}>
                                Reload
                            </button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 text-center card-title">Kategoriler</div>
                        {isLoading && (<span>Yükleniyor...</span>)}
                        {!isLoading && !error && categories && categories.map(category => (
                            <div className="col-lg-3 col-6" key={category.link}>
                                <MenuItem
                                    title={category.title}
                                    icon={category.icon}
                                    subTitle={category.subTitle}
                                    link={`/category/${category.slug}`}
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
    const res = await fetch(`${process.env.HOST}/api/category`);
    const body = await res?.json();
    const categories = body?.data;

    return {
        props: {
            categories
        }
    }
}

export default Menu;
