import React from 'react' 
import Link from 'next/link'
export default function Header()
{
    return(
        <div>
            <header id="site-header" className="site-header header-style-1 header-overlay header-fullwidth sticky-header">
            <div className="octf-main-header">
                <div className="octf-area-wrap">
                    <div className="container-fluid octf-mainbar-container">
                        <div className="octf-mainbar">
                            <div className="octf-mainbar-row octf-row">
                                <div className="octf-col">
                                    <div id="site-logo" className="site-logo">
                                        <Link href="/">
                                        <a>
                                            <img className="logo-static" src="images/loo.png" alt="Onum"/>
                                            <img className="logo-scroll" src="images/loo.png" alt="Onum"/>
                                        </a>
                                        </Link>
                                    </div>
                                </div>
                                
                                <div className="octf-col">
                                    <nav id="site-navigation" className="main-navigation">          
                                        <ul id="primary-menu" className="menu">
                                            <li className=" current-menu-item current-menu-ancestor">
                                                <Link href="/">
                                                <a>Home</a>
                                                </Link>
                                                
                                            </li>
                                            <li className="">
                                                <Link href="/about">
                                                    <a >
                                                        About Us
                                                    </a>
                                                </Link>
                                                
                                            </li>
                                            <li className="menu-item-has-children">
                                                <Link href="/services">
                                                    <a>
                                                        Services
                                                    </a>
                                                </Link>
                                                <ul className="sub-menu">
                                                    <li>
                                                        <Link href="/Software">
                                                            <a>
                                                                Software Development
                                                            </a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/App">
                                                            <a>
                                                                App Development
                                                            </a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/">
                                                            <a>
                                                                Web Development
                                                            </a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/Bulk">
                                                        <a>
                                                            Bulk SMS
                                                        </a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="Graphic">
                                                        <a>
                                                            Graphic Designing
                                                        </a>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            
                                            
                                            <li className="menu-item-has-children">
                                                <Link href="/contact">
                                                <a>
                                                    Contacts
                                                </a>
                                                </Link>
                                                <ul className="sub-menu">
                                                    <li>
                                                        <Link href="/forquote">
                                                        <a>Free a Quote</a>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>                               
                                    </nav>
                                </div>

                                <div className="octf-col text-right">
                                    <div className="octf-btn-cta">                                                                      
                                        <div className="octf-header-module">
                                            <div className="btn-cta-group btn-cta-header">
                                                <Link href="/contact">
                                                <a className="octf-btn octf-btn-third" >Contact Us</a>
                                                </Link>
                                            </div>
                                        </div>
                                        
                                    </div>                              
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="header_mobile">
                <div className="container">
                    <div className="mlogo_wrapper clearfix">

                        <div className="mobile_logo">
                            <Link href="/">
                            <a ><img src="images/loo.png" alt="Onum"/></a>
                            </Link>
                        </div>
                        <div id="mmenu_toggle">
                            <button></button>
                        </div>

                    </div>

                    <div className="mmenu_wrapper">
                        <div className="mobile_nav">
                            <ul id="menu-main-menu" className="mobile_mainmenu">
                                <li className="">
                                    <Link href="/">
                                    <a>Home</a>
                                    </Link>
                                </li>
                                <li className="menu-item-has-children">
                                    <Link href="/about">
                                    <a>About Us</a>
                                    </Link>
                                    
                                </li>
                                <li className="menu-item-has-children">
                                    <Link href="/services">
                                    <a>Services</a>
                                    </Link>
                                    <ul className="sub-menu">
                                        <li>
                                            <Link href="/Software">
                                            <a>
                                                Software Development
                                            </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/App">
                                            <a>
                                                App Development
                                            </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/Web">
                                            <a>
                                                Web Development
                                            </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/Bulk">
                                            <a>Bulk SMS</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/Graphic">
                                            <a>Graphic Designing</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="menu-item-has-children">
                                    <Link href="/contact">
                                    <a>Contacts</a>
                                    </Link>
                                    <ul className="sub-menu">
                                        <Link href="/forquote">
                                        <li><a>Free a Quote</a></li>
                                        </Link>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        </div>
    )
}