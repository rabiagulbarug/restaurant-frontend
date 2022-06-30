
const Header = ({onSidebarToggle}) => {
    return (
            <div>
                <nav className="main-header navbar navbar-expand navbar-white navbar-light" style={{backgroundColor: '#EBF5FB', height:60}}>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" data-widget="pushmenu" href="javascript:void(0)" role="button"
                               onClick={() => onSidebarToggle()}>
                                <i className="fas fa-bars"/>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
    );
}

export default Header;
