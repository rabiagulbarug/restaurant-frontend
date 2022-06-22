import {useRouter} from "next/router";
import Layout from "../components/layout";

export default function Home() {
    const router = useRouter();
    return (
        <Layout/>
    )
}