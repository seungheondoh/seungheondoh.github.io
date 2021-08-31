import React from 'react';

const Header = () => {
    console.log("DEBUG")
    console.log(process.env.PUBLIC_URL)
    console.log(window.location.href)
    return (
        <header id="header" className="site-header">
            <div className="wrapper d-flex justify-content-between">
                <div className="align-self-center">
                    <p>  </p> 
                </div>

                <nav className="menu-third">
                    <ul className="clearfix list-unstyled">
                        <li className={ "menu-item" + ( window.location.href === process.env.PUBLIC_URL + '/' ? " current-menu-item" : "" ) }>
                            <a 
                                title="Home"
                                className="btn btn-link transform-scale-h border-0 p-0"
                                href="#/">Curriculum Vitae</a>
                        </li>
                        <li className={ "menu-item" + ( window.location.href === process.env.PUBLIC_URL + '#/blog' ? " current-menu-item" : "" ) }>
                            <a 
                                title="blog" 
                                className="btn btn-link transform-scale-h border-0 p-0"
                                href="#/blog">Blog</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
