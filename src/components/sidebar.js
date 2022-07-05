import Link from "next/link";
import {useRouter} from "next/router";

const Sidebar = () => {
    const router = useRouter();
    return (
        <aside className="main-sidebar elevation-4" style={{backgroundColor: '#34495E', color: '#ffffff'}}>
            <div className="sidebar sidebar-active">
                <nav className="mt-2">
                    <ul className="nav nav-pills nav-sidebar flex-column" role="menu">
                        <li className="nav-item">
                            <Link href="/menu">
                                <a className={`nav-link ${router.route === '/menu' && 'active'}`}>
                                    <i></i>
                                    <p>Menu</p>
                                </a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/employee">
                                <a className={`nav-link ${router.route === '/employee' && 'active'}`}>
                                    <i></i>
                                    <p>Personel</p>
                                </a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/admin">
                                <a className={`nav-link ${router.route === '/admin' && 'active'}`}>
                                    <i></i>
                                    <p>Admins</p>
                                </a>
                            </Link>
                        </li>
                        <li>

                        </li>
                        <li>

                        </li>
                    </ul>
                </nav>
            </div>
        </aside>
    );
}

export default Sidebar;