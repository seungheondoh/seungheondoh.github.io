import React from 'react';

const Header = () => {
    const current = window.location.href;
    const baseline = "https://seungheondoh.github.io/";
    const splitArr = current.split(baseline);
    return (
        <header id="header" className="site-header">
            <div className="wrapper d-flex justify-content-between">
                <div className="align-self-center">
                    <p>  </p> 
                </div>

                <nav className="menu-third">
                    <ul className="clearfix list-unstyled">
                        <li className={ "menu-item" + ( splitArr[1] === '#/' ? " current-menu-item" : "" ) }>
                            <a 
                                title="Home"
                                className="btn btn-link transform-scale-h border-0 p-0"
                                href="#/">Home</a>
                        </li>
                        <li className={ "menu-item" + ( splitArr[1] === '#/blog' ? " current-menu-item" : "" ) }>
                            <a 
                                title="blog" 
                                className="btn btn-link transform-scale-h border-0 p-0"
                                href="#/blog">Blog</a>
                        </li>
                        {/* <li className={ "menu-item" + ( splitArr[1] === '#/thesis' ? " current-menu-item" : "" ) }>
                            <a 
                                title="thesis" 
                                className="btn btn-link transform-scale-h border-0 p-0"
                                href="#/thesis">Thesis</a>
                        </li> */}
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
