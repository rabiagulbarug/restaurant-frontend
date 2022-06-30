import Header from "./header";
import Sidebar from "./sidebar";
import Footer from "./footer";
import {useState} from "react";
import {useRouter} from "next/router";
import {useSelector} from "react-redux";

const Layout = ({children}) => {
    const [sidebar, setSidebar] = useState(true);
    const router = useRouter();

    return (
        <>
            <div className={`wrapper sidebar-mini ${!sidebar ? 'sidebar-collapse' : ''}`}>
                <Header onSidebarToggle={() => setSidebar(prev => !prev)}/>
                <Sidebar/>
                <div className="content-wrapper py-2 px-2">
                    {router.route === '/' ? children
                        : children}
                </div>
                <Footer/>
            </div>
        </>
    );
}

export default Layout;