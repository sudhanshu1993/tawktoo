import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
        <section className="banner big-padding-top bg-banner-gradient particles-js" data-color="#ffffff, #00c3ff, #fe4c1c" data-id="i1">
                <div className="bg-overlay-1"></div>
                <div className="shape shape-bottom" data-negative="true">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                        <path className="shape-fill" d="M500,97C126.7,96.3,0.8,19.8,0,0v100l1000,0V1C1000,19.4,873.3,97.8,500,97z"></path>
                    </svg>
                </div>
                <div className="banner-wrap">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <h6 className="banner-title m-b0">EVERYONE WANT'S TO CREATE IT'S ONLINE PRESENCE</h6>
                                <h2 className="banner-stitle m-b55 xs-m-b40">IN THE WORLD OF <br/><span className="text-second">INFORMATION TECHNOLOGY</span></h2>
                                <div className="wpcf7">
                                    <div className="screen-reader-response"></div>
                                    <form action="#" method="POST" className="wpcf7-form">
                                        <div className="seo-score one-line-form">
                                            <span className="wpcf7-form-control-wrap your-url">
                                                <input type="url" name="url" value="" size="40" className="wpcf7-form-control wpcf7-text wpcf7-url" placeholder="Your Website URL" required=""/>
                                            </span>
                                            <span className="wpcf7-form-control-wrap your-email">
                                                <input type="email" name="email" value="" size="40" className="wpcf7-form-control wpcf7-text wpcf7-email" placeholder="Email" required=""/>
                                            </span>
                                            <button type="submit" className="octf-btn octf-btn-icon octf-btn-primary">Start Now<i className="flaticon-right-arrow-1"></i></button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="about-home bg-light">
                <div className="container">
                    <div className="about-home-img text-center">
                        <img src="images/topimg-home1.png" alt="onum"/>
                    </div>
                </div>
            </section>
            <section className="seo-about p-b30">
                <div className="shape shape-bottom" data-negative="false">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                        <path className="shape-fill" d="M1000,4.3V0H0v4.3C0.9,23.1,126.7,99.2,500,100S1000,22.7,1000,4.3z"></path>
                    </svg>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="top-up">
                            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                                <div className="icon-box s3 box-hover-gradient text-center">
                                    <div className="bg-s3"></div>
                                    <div className="bg-before" style={{backgroundImage: 'url(images/bg1-box.png) top left no-repeat #fff'}}></div>
                                    <div className="bg-after" style={{backgroundImage: 'url(images/bg2-box.png) bottom right no-repeat #fff'}}></div>
                                    <div className="icon-main">
                                        <span className="flaticon-startup"></span>
                                    </div>
                                    <div className="content-box">
                                        <h5>Pricing</h5>
                                        <p>Our pricing factors are depend on the which services you choose and we take only 25% of the total amount in advance in terms of digital marketing and website designing projects.</p>
                                    </div>
                                    <div className="action-box">
                                        <Link href="/services">
                                        <a className="octf-btn octf-btn-icon octf-btn-white">Learn More<i className="flaticon-right-arrow-1"></i></a>
                                        </Link>
                                    </div>
                                        
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 m-t50">
                                <div className="icon-box s3 box-hover-gradient text-center">
                                    <div className="bg-s3"></div>
                                    <div className="bg-before" style={{backgroundImage: 'url(images/bg1-box2.png) top left no-repeat #fff'}}></div>
                                    <div className="bg-after" style={{backgroundImage: 'url(images/bg2-box2.png) bottom right no-repeat #fff'}}></div>
                                    <div className="icon-main">
                                        <span className="flaticon-system"></span>
                                    </div>
                                    <div className="content-box">
                                        <h5>Customer Satisfaction</h5>
                                        <p>We assure you to provide 100 percent customer satisfaction.</p>
                                    </div>
                                    <div className="action-box">
                                        <Link href="/services">
                                        <a className="octf-btn octf-btn-icon octf-btn-white">Learn More<i className="flaticon-right-arrow-1"></i></a>
                                        </Link>
                                    </div>
                                        
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 xs-m-t50">
                                <div className="icon-box s3 box-hover-gradient text-center">
                                    <div className="bg-s3"></div>
                                    <div className="bg-before" style={{backgroundImage: 'url(images/bg1-box3.png) top right no-repeat #fff'}}></div>
                                    <div className="bg-after" style={{backgroundImage: 'url(images/bg2-box3.png) bottom left no-repeat #fff'}}></div>
                                    <div className="icon-main">
                                        <span className="flaticon-internet"></span>
                                    </div>
                                    <div className="content-box">
                                        <h5>Technical Support</h5>
                                        <p>Our award winning technical support team will take care of all service related queries before and after project completion ,after all it's your trust on which we never compromise. </p>
                                    </div>
                                    <div className="action-box">
                                        <Link href="/servies">
                                        <a  className="octf-btn octf-btn-icon octf-btn-white">Learn More<i className="flaticon-right-arrow-1"></i></a>
                                        </Link>
                                    </div>

                                        
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 m-t50">
                                <div className="icon-box s3 box-hover-gradient text-center">
                                    <div className="bg-s3"></div>
                                    <div className="bg-before" style={{backgroundImage: 'url(images/bg1-box2.png) top left no-repeat #fff'}}></div>
                                    <div className="bg-after"></div>
                                    <div className="icon-main">
                                        <span className="flaticon-report"></span>
                                    </div>
                                    <div className="content-box">
                                        <h5>Technical Support</h5>
                                        <p> We provide IT services related to Web Development, Digital Marketing, Software Development, iOS App Development, Android App Development, Graphics Design, Bulk SMS Provider, Surveillance System and many more.</p>
                                    </div>
                                    <div className="action-box">
                                        <Link href="/services">
                                        <a className="octf-btn octf-btn-icon octf-btn-white">Learn More<i className="flaticon-right-arrow-1"></i></a>
                                        </Link>
                                    </div>
                                        
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="p-t35 p-b90 xs-p-t60 xs-p-b60 bg-about">
                <div className="container">
                    <div className="row flex-row">
                        <div className="col-lg-6 col-md-12 col-xs-12 xs-p-b50 text-center">
                            <img src="images/seo-home1.png" className="" alt="onum"/>
                        </div>
                        <div className="col-lg-6 col-md-12 col-xs-12 p-l95 xs-p-l15 p-r0 xs-p-r15 align-self-center">
                            <div className="ot-heading left-align">
                                <h6><span>about us</span></h6>
                                <h2 className="main-heading m-b20">Grow Your Business<br/>with Our SEO Agency</h2>
                            </div>
                            <p className="font22 text-dark">Over 1+ years Gnarium Iqnovative Pvt. Ltd. helping companies reach their financial and branding goals.</p>
                            <p className="m-b0 p-b45">Here at Gnarium Iqnovative Pvt Ltd we have highly qualified and experienced Members Yes we call our office workers “Members” because they are most important part of Gnarium Iqnovqtive Family and its there work which make us most recognizable and trustable among our customers , we believe in Smart and On Time completions of our project so Our Customers stays with us forever and never go to other companies for their work.</p>
                            <div className="ot-button">
                                <Link href="/about">
                                <a  className="octf-btn octf-btn-secondary octf-btn-icon"><span>Learn More <i className="flaticon-right-arrow-1"></i></span></a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
<section className="p-b420">
                <div className="container">
                    <div className="row">
                    </div>
                </div>
            </section>
            <section className="bg-light">
                <div className="bg-overlay"></div>
                <div className="container">
                    <div className="icon-box-grid text-center m-t--295">
                        <div className="col-md-4 no-padding">
                            <div className="icon-box text">
                                <div className="icon-main">
                                     <span className="flaticon-pie-chart"></span>
                                </div>
                                <div className="content-box">
                                    <h5>Web Development</h5>
                                    <p>All kind of website can be developed by our highly qualified and trained developers as per client’s need, on whatever platform you need your website either it is WordPress, PHP, .NET. , Java etc.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 no-padding">
                            <div className="icon-box">
                                <div className="icon-main">
                                     <span className="flaticon-pie-chart-1"></span>
                                </div>
                                <div className="content-box">
                                    <h5>Software Development</h5>
                                    <p>The software can automate a business either it is an office management software, school management software, Customer Relationship Management software etc we have all kind of software according to your business needs.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 no-padding">
                            <div className="icon-box">
                                <div className="icon-main">
                                    <span className="flaticon-document"></span>
                                </div>
                                <div className="content-box">
                                    <h5>Application Development</h5>
                                    <p>Big brands use to have an application to operate their task which is an easy way of operating multiple tasks at one place either it is an E-commerce app, food delivery app, LMS app, Test Series App etc.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 no-padding">
                            <div className="icon-box">
                                <div className="icon-main">
                                    <span className="flaticon-search-1"></span>
                                </div>
                                <div className="content-box">
                                    <h5>Digital Marketing</h5>
                                    <p>Search Engine Optimization(SEO): Google, Bing, Yahoo, Duck Duck Go Social Media Marketing(SMM): Facebook, Instagram, Twitter, Pinterest, Linkedin Pay-per-click Paid Search Marketing Email Marketing SMS Marketing.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 no-padding">
                            <div className="icon-box">
                                <div className="icon-main">
                                    <span className="flaticon-coding"></span>
                                </div>
                                <div className="content-box">
                                    <h5>Bulk SMS</h5>
                                    <p>We are the emerging bulk SMS provider with promotional SMS and transactional SMS instant delivery and 99% uptime guaranty hurry!!! so get up your phone and contact us now to know the SMS pricing.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 no-padding">
                            <div className="icon-box">
                                <div className="icon-main">
                                    <span className="flaticon-cloud-computing"></span>
                                </div>
                                <div className="content-box">
                                    <h5>Graphic Designing</h5>
                                    <p>A  unique and beautiful poster can generate more leads for your business. We provide graphic designing services which include Script Writing , Storyboarding, Logo Designing, High-end animation.</p>
                                </div>
                            </div>
                        </div>
                    </div>   
                </div>
            </section>
            <section className="p-t120 p-b290 bg-pricing">
                <div className="container">
                    <div className="ot-heading text-center">
                        <h6><span>choose your plan</span></h6>
                        <h2 className="main-heading">Flexible Pricing Plans</h2>
                    </div>
                    <p className="text-center m-b40">We have experience working with large and small businesses and are ready to<br/>
                    develop a targeted strategy and plan that’s just right for you.</p>
                    <div className="row">
                        <div className="col-md-4 sm-p-b60">
                            <div className="ot-pricing-table bg-shape s1">
                                <span className="title-table">Standard</span>
                                <div className="inner-table">
                                    <img src="images/price1.png" alt="Standard"/>
                                    <h2><sup>$</sup> 69.99</h2>
                                    <p>Monthly Package</p>
                                    <div className="details">
                                        <ul>
                                            <li>Social Media Marketing</li>
                                            <li>2.100 Keywords</li>
                                            <li>One Way Link Building</li>
                                            <li>5 Free Optimization</li>
                                            <li>3 Press Releases</li>
                                        </ul>
                                    </div>
                                </div>
                                <Link href="/">
                                <a className="octf-btn octf-btn-icon octf-btn-secondary">Choose Plane <i className="flaticon-right-arrow-1"></i></a>
                                </Link>
                            </div>
                        </div>
                        <div className="col-md-4 sm-p-b60">
                            <div className="ot-pricing-table bg-shape s2">
                                <span className="title-table">Economy</span>
                                <div className="inner-table">
                                    <img src="images/price2-1.png" alt="Economy"/>
                                    <h2><sup>$</sup> 79.99</h2>
                                    <p>Monthly Package</p>
                                    <div className="details">
                                        <ul>
                                            <li>Social Media Marketing</li>
                                            <li>3.100 Keywords</li>
                                            <li>One Way Link Building</li>
                                            <li>10 Free Optimization</li>
                                            <li>5 Press Releases</li>
                                        </ul>
                                    </div>
                                </div>
                                <Link href="/">
                                <a  className="octf-btn octf-btn-icon octf-btn-third">Choose Plane <i className="flaticon-right-arrow-1"></i></a>
                                </Link>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="ot-pricing-table bg-shape s3">
                                <span className="title-table">Executive</span>
                                <div className="inner-table">
                                    <img src="images/price3-1.png" alt="Executive"/>
                                    <h2><sup>$</sup> 89.99</h2>
                                    <p>Monthly Package</p>
                                    <div className="details">
                                        <ul>
                                            <li>Social Media Marketing</li>
                                            <li>5.100 Keywords</li>
                                            <li>One Way Link Building</li>
                                            <li>15 Free Optimization</li>
                                            <li>10 Press Releases</li>
                                        </ul>
                                    </div>
                                </div>
                                <Link href="/">
                                <a  className="octf-btn octf-btn-icon octf-btn-primary">Choose Plane <i className="flaticon-right-arrow-1"></i></a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="p-b130 bg-counter">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="shadow-primary p-t100 p-b100 btn-rounder bg-cover text-center m-t--140" style={{backgroundImage: 'url(images/bg-counter.jpg)'}}>
                                <div className="bg-overlay"></div>
                                <div className="row">
                                    <div className="col-md-3 col-sm-6 sm-m-b40 xs-m-b40">
                                        <div className="ot-counter s2">
                                            <h6>ACTIVE CLIENTS</h6> 
                                            <div>
                                                <span className="num" data-to="330" data-time="2000">0</span>
                                                <span>+</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-sm-6 xs-m-b40 sm-m-b40">
                                        <div className="ot-counter s2">
                                            <h6>PROJECTS DONE</h6>  
                                            <div>
                                                <span className="num" data-to="850" data-time="2000">0</span>
                                                <span>+</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-sm-6 xs-m-b40">
                                        <div className="ot-counter s2">
                                            <h6>TEAM ADVISORS</h6>  
                                            <div>
                                                <span className="num" data-to="25" data-time="2000">0</span>
                                                <span>+</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-sm-6">
                                        <div className="ot-counter s2">
                                            <h6>GLORIOUS YEARS</h6> 
                                            <div>
                                                <span className="num" data-to="10" data-time="2000">0</span>
                                                <span>+</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-t120">
                                <div className="row flex-row align-items-end">
                                    <div className="col-lg-6 col-md-12 col-xs-12 xs-m-b40">
                                        <div className="ot-heading">
                                            <h6><span>why choose us</span></h6>
                                            <h2 className="main-heading">Work with a Dedicated<br/>SEO Company</h2>
                                        </div>
                                        <div className="ot-accordions">
                                            <div className="acc-item current">
                                                <span className="acc-toggle">Digital Marketing <i className="down flaticon-arrow-pointing-to-down"></i><i className="up flaticon-arrow-pointing-to-up"></i></span>
                                                <div className="acc-content active" style={{display: 'block'}}>
                                                From search engine optimizations till lead generations our team will help you to reach to your potential customers.                      
                                                </div>
                                            </div>
                                            <div className="acc-item">
                                                <span className="acc-toggle">Web Development <i className="down flaticon-arrow-pointing-to-down"></i><i className="up flaticon-arrow-pointing-to-up"></i></span>
                                                <div className="acc-content">
                                                    <p>Need a stunning website ? Look no further than us . Our developers will develop your website as you want it to be.</p>             
                                                </div>
                                            </div>
                                            <div className="acc-item">
                                                <span className="acc-toggle">Software Development <i className="down flaticon-arrow-pointing-to-down"></i><i className="up flaticon-arrow-pointing-to-up"></i></span>
                                                <div className="acc-content">
                                                    <p>A good software always helps in automating lots of workload , we know how to develop it for our clients as per his needs.</p>              
                                                </div>
                                            </div>
                                            <div className="acc-item">
                                                <span className="acc-toggle">Bulk SMS <i className="down flaticon-arrow-pointing-to-down"></i><i className="up flaticon-arrow-pointing-to-up"></i></span>
                                                <div className="acc-content">
                                                    <p>In present world customer trusts sms 75% more than email marketing so lets begin to promote .</p>
                                                </div>
                                            </div>
                                            <div className="acc-item">
                                                <span className="acc-toggle">Graphics Designing <i className="down flaticon-arrow-pointing-to-down"></i><i className="up flaticon-arrow-pointing-to-up"></i></span>
                                                <div className="acc-content">
                                                    <p>An eye catching logo , stunning videos animations everybody needs it to grab people's attention and our experienced animator knows how to create it.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12 col-xs-12 text-center">
                                        <img src="images/whyus-home1.png" alt="seo"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="p-b40 xs-p-b0">
                <div className="row">
                    <div className="col-md-1/5 col-sm-6 col-xs-12">
                        <div className="team-wrap sm-p-t0 p-t200">
                            <div className="team-thumb">
                                <img src="images/mem1-1.jpg" alt="Gina Bruno"/>
                            </div>
                            <div className="team-info">
                                <h4>Gina Bruno</h4>
                                <span>WEB Designer</span>
                                <div className="team-social">
                                    <a target="_blank" href="#" className="twitter"><i className="fab fab fa-twitter"></i></a>
                                    <a target="_blank" href="#" className="facebook"><i className="fab fab fa-facebook-f"></i></a>
                                    <a target="_blank" href="#" className="pinterest"><i className="fab fab fa-pinterest-p"></i></a>
                                    <span className="flaticon-add-1"></span>
                                </div>  
                            </div>
                        </div>
                    </div>
                    <div className="col-md-1/5 col-sm-6 col-xs-12">
                        <div className="team-wrap sm-p-t50 p-t150">
                            <div className="team-thumb">
                                <img src="images/mem2-1.jpg" alt="David Ferry"/>
                            </div>
                            <div className="team-info">
                                <h4>David Ferry</h4>
                                <span>CTO of Company</span>
                                <div className="team-social">
                                    <a target="_blank" href="#" className="twitter"><i className="fab fab fa-twitter"></i></a>
                                    <a target="_blank" href="#" className="facebook"><i className="fab fab fa-facebook-f"></i></a>
                                    <a target="_blank" href="#" className="pinterest"><i className="fab fab fa-pinterest-p"></i></a>
                                    <span className="flaticon-add-1"></span>
                                </div>  
                            </div>
                        </div>
                    </div>
                    <div className="col-md-1/5 col-sm-6 col-xs-12">
                        <div className="team-wrap sm-p-t0 p-t100">
                            <div className="team-thumb">
                                <img src="images/mem3-1.jpg" alt="Christina Tores"/>
                            </div>
                            <div className="team-info">
                                <h4>Christina Tores</h4>
                                <span>CEO of Company</span>
                                <div className="team-social">
                                    <a target="_blank" href="#" className="twitter"><i className="fab fab fa-twitter"></i></a>
                                    <a target="_blank" href="#" className="facebook"><i className="fab fab fa-facebook-f"></i></a>
                                    <a target="_blank" href="#" className="pinterest"><i className="fab fab fa-pinterest-p"></i></a>
                                    <span className="flaticon-add-1"></span>
                                </div>  
                            </div>
                        </div>
                    </div>
                    <div className="col-md-1/5 col-sm-6 col-xs-12">
                        <div className="team-wrap p-t50">
                            <div className="team-thumb">
                                <img src="images/mem4-1.jpg" alt="Regina Blackly"/>
                            </div>
                            <div className="team-info">
                                <h4>Regina Blackly</h4>
                                <span>WEB Developer</span>
                                <div className="team-social">
                                    <a target="_blank" href="#" className="twitter"><i className="fab fab fa-twitter"></i></a>
                                    <a target="_blank" href="#" className="facebook"><i className="fab fab fa-facebook-f"></i></a>
                                    <a target="_blank" href="#" className="pinterest"><i className="fab fab fa-pinterest-p"></i></a>
                                    <span className="flaticon-add-1"></span>
                                </div>  
                            </div>
                        </div>
                    </div>
                    <div className="col-md-1/5 col-sm-6 col-xs-12">
                        <div className="team-wrap">
                            <div className="team-thumb">
                                <img src="images/mem5-1.jpg" alt="Olivia Chee"/>
                            </div>
                            <div className="team-info">
                                <h4>Olivia Chee</h4>
                                <span>General Manager</span>
                                <div className="team-social">
                                    <a target="_blank" href="#" className="twitter"><i className="fab fab fa-twitter"></i></a>
                                    <a target="_blank" href="#" className="facebook"><i className="fab fab fa-facebook-f"></i></a>
                                    <a target="_blank" href="#" className="pinterest"><i className="fab fab fa-pinterest-p"></i></a>
                                    <span className="flaticon-add-1"></span>
                                </div>  
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="p-t80 bg-testi">
                <div className="bg-overlay-testi"></div>
                    <div className="container">
                        <div className="flex-row">
                        </div>
                    </div>
            </section>
 
            <section className="p-t330 p-b210 cta bg-cta particles-js" data-color="#fe4c1c,#00c3ff,#0160e7" data-id="i1-1">
                <div className="bg-overlay opacity-1"></div>
                <div className="shape shape-top" data-negative="false">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                        <path className="shape-fill" d="M1000,4.3V0H0v4.3C0.9,23.1,126.7,99.2,500,100S1000,22.7,1000,4.3z"></path>
                    </svg>
                </div>
                <div className="container">
                    <div className="cta-content text-center">
                        <h2 className="m-b20">The perfect choice for Enterpreneur<br/>Small</h2>
                        <p className="m-b35">or Big Companies. Choose Gnarium Iqnovative Pvt. Ltd.!</p>
                        <div className="ot-button">
                            <Link href="/contact">
                            <a  className="octf-btn octf-btn-primary octf-btn-icon"><span>Start Now<i className="flaticon-right-arrow-1"></i></span></a>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
       
    </div>
  )
}
