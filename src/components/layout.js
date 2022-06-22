import Header from "./header";
import Sidebar from "./sidebar";
import Footer from "./footer";
import {useState} from "react";

const Layout = ({children}) => {
    const [sidebar, setSidebar] = useState(true);

    return (
        <>
            <div className={`wrapper sidebar-mini ${!sidebar ? 'sidebar-collapse' : ''}`}>
                <Header onSidebarToggle={() => setSidebar(prev => !prev)}/>
                <Sidebar/>
                <div className="content-wrapper py-2 px-2">

                </div>
                <Footer/>
            </div>
        </>
    );
}

export default Layout;