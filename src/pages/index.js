import {useRouter} from "next/router";
import Layout from "../components/layout";
import {useEffect} from "react";
import {useAuth} from "../hooks/use-auth";

export default function Home() {
    const {user} = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!user) {
            router.push('/login');
        }
    }, [user]);

    return (
        <Layout/>
    );
}