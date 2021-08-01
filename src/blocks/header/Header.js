import React from 'react';

const Header = () => {
    return (
        <header id="header" className="site-header">
            <div className="wrapper d-flex justify-content-between">
                <div className="align-self-center">
                    <p>  </p> 
                </div>

                <nav className="menu-third">
                    <ul className="clearfix list-unstyled">
                        <li className={ "menu-item" + ( window.location.pathname === '/' ? " current-menu-item" : "" ) }>
                            <a 
                                title="Home"
                                className="btn btn-link transform-scale-h border-0 p-0"
                                href="/">Curriculum Vitae</a>
                        </li>
                        {/* <li className={ "menu-item" + ( window.location.pathname === '/blog' ? " current-menu-item" : "" ) }>
                            <a 
                                title="blog" 
                                className="btn btn-link transform-scale-h border-0 p-0"
                                href="/blog">Blog</a>
                        </li> */}
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
