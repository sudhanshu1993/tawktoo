import Link from 'next/link'
import React from 'react'
export default function Services()
{
    return(
        <div>
            <div className="page-header dtable text-center" style={{backgroundImage: 'url(images/bg-page-header.jpg)'}}>
                <div className="dcell">
                    <div className="container">
                        <h1 className="page-title">Services</h1>
                        <ul id="breadcrumbs" className="breadcrumbs">
                            <li><a href="#">Home</a></li>
                            <li className="active">Our Services</li>
                        </ul>
                    </div>
                </div>
            </div>

            <section className="p-b90">
                <div className="container">
                    <div className="row p-b50">
                        <div className="col-md-12 col-sm-12 col-xs-12">
                            <h3 className="title-default" style={{textAlign:"center"}}>Our Services</h3>
                        </div>
                        <div className="col-md-6 col-sm-12 col-xs-12 sm-m-b40">
                            <Link href="/App">
                            <div className="service-box s-box">
                                <div className="overlay"></div>
                                <span className="big-number">01</span>
                                <div className="number-box">01</div>
                                <div className="content-box">
                                    <h5>Application Development</h5>
                                    <p>Big brands use to have an application to operate their task which is an easy.</p>
                                </div>
                            </div>
                            </Link>
                        </div>

                        <div className="col-md-6 col-sm-12 col-xs-12">
                            <Link href="/Web">
                            <div className="service-box s-box">
                                <div className="overlay"></div>
                                <span className="big-number">02</span>
                                <div className="number-box">02</div>
                                <div className="content-box">
                                    <h5>Web Development</h5>
                                    <p>All kind of website can be developed by our highly qualified and trained developers as.</p>
                                </div>
                            </div>
                            </Link>
                        </div>
                    </div>
                    <div className="row p-b50">
                        <div className="col-md-6 col-sm-12 col-xs-12">
                            <Link href="/Software">
                            <div className="service-box s-box">
                                <div className="overlay"></div>
                                <span className="big-number">03</span>
                                <div className="number-box">03</div>
                                <div className="content-box">
                                    <h5>Software Development</h5>
                                    <p>The software can automate a business either it is an office management software, school management.</p>
                                </div>
                            </div>
                            </Link>
                        </div>
                        <div className="col-md-6 col-sm-12 col-xs-12">
                            <Link href="/App">
                            
                            <div className="service-box s-box">
                                <div className="overlay"></div>
                                <span className="big-number">04</span>
                                <div className="number-box">04</div>
                                <div className="content-box">
                                    <h5>Digtal Marketing</h5>
                                    <p>Search Engine Optimization(SEO): Google, Bing, Yahoo, Duck Duck Go Social Media Marketing(SMM): Facebook, Instagram, Twitter.</p>
                                </div>
                            </div>
                            </Link>
                        </div>
                        
                    </div>
                    <div className="row p-b50">
                    <div className="col-md-6 col-sm-12 col-xs-12">
                            <Link href="/Bulk">
                            <div className="service-box s-box">
                                <div className="overlay"></div>
                                <span className="big-number">05</span>
                                <div className="number-box">05</div>
                                <div className="content-box">
                                    <h5>Bulk SMS</h5>
                                    <p>We are the emerging bulk SMS provider with promotional SMS and transactional SMS instant delivery.</p>
                                </div>
                            </div>
                            </Link>
                        </div>
                        <div className="col-md-6 col-sm-12 col-xs-12">
                            <Link href="/Graphic">
                            <div className="service-box s-box">
                                <div className="overlay"></div>
                                <span className="big-number">06</span>
                                <div className="number-box">06</div>
                                <div className="content-box">
                                    <h5>Graphic Designing</h5>
                                    <p>A  unique and beautiful poster can generate more leads for your business and it has.</p>
                                </div>
                            </div>
                            </Link>
                        </div>
                    
                    </div>
                </div>
            </section>
        </div>
    )
}