import React from 'react'
export default function Forquote()
{
    return(
        <div>

<div id="content" className="site-content">
            <div className="page-header dtable text-center" style={{backgroundImage: 'url(images/bg-page-header.jpg)'}}>
                <div className="dcell">
                    <div className="container">
                        <h1 className="page-title">Free a Quote</h1>
                        <ul id="breadcrumbs" className="breadcrumbs">
                            <li><a href="#">Home</a></li>
                            <li className="active">Free a Quote</li>
                        </ul>
                    </div>
                </div>
            </div>

            <section className="p-t100 p-b40">
                <div className="container">
                    <div className="row">
                        <div className="col-md-offset-2 col-md-8 col-xs-12">
                            <div className="ot-heading text-center">
                                <h6><span>Get a Free Quote</span></h6>
                                <h2 className="main-heading">Talk With Our Digital Strategists</h2>
                                <p>Please fill out the form below to receive a free quote for our search marketing services. Select what services you are interested in below and we’ll contact you as soon as possible.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="m-b100">
                <div className="container">
                    <div className="wpcf7">
                        <form action="http://templates.thememodern.com/onum/freeaquote.php" method="POST" className="wpcf7-form">
                            <div className="faq-form row">
                                <p className="col-md-6 col-xs-12">
                                    <input type="url" name="website" className="wpcf7-form-control wpcf7-text" placeholder="Website URL *"/>
                                </p>
                                <p className="col-md-6 col-xs-12">
                                    <input type="text" name="company" className="wpcf7-form-control wpcf7-text" placeholder="Company Name" required=""/>
                                </p>
                                <p className="col-md-6 col-xs-12">
                                    <input type="text" name="fname" className="wpcf7-form-control wpcf7-text" placeholder="First Name *" required=""/>
                                </p>
                                <p className="col-md-6 col-xs-12">
                                    <input type="text" name="lname" className="wpcf7-form-control wpcf7-text" placeholder="Last Name *" required=""/>
                                </p>
                                <p className="col-md-6 col-xs-12">
                                    <input type="tel" name="phone" className="wpcf7-form-control wpcf7-text wpcf7-tel" placeholder="Phone Number *" required=""/>
                                </p>
                                <p className="col-md-6 col-xs-12">
                                    <input type="email" name="email" className="wpcf7-form-control wpcf7-text wpcf7-email" placeholder="Your Email *" required=""/>
                                </p>
                                <p className="col-md-12 col-xs-12 multi-checkbox">
                                    <label>Reason To Contact</label><br/>
                                    <span className="wpcf7-form-control-wrap your-option">
                                        <span className="wpcf7-form-control wpcf7-checkbox">
                                            <span className="wpcf7-list-item first">
                                                <label>
                                                    <input type="checkbox" name="name[]" value="SEO Optimization"/>
                                                    <span className="wpcf7-list-item-label">SEO Optimization</span>
                                                </label>
                                            </span>
                                            <span className="wpcf7-list-item">
                                                <label>
                                                    <input type="checkbox" name="name[]" value="Web Development"/>
                                                    <span className="wpcf7-list-item-label">Web Development</span>
                                                </label>
                                            </span>
                                            <span className="wpcf7-list-item">
                                                <label>
                                                    <input type="checkbox" name="name[]" value="PPC Advertising"/>
                                                    <span className="wpcf7-list-item-label">PPC Advertising</span>
                                                </label>
                                            </span>
                                            <span className="wpcf7-list-item">
                                                <label>
                                                    <input type="checkbox" name="name[]" value="Content Marketing"/>
                                                    <span className="wpcf7-list-item-label">Content Marketing</span>
                                                </label>
                                            </span>
                                            <span className="wpcf7-list-item">
                                                <label>
                                                    <input type="checkbox" name="name[]" value="Social Marketing"/>
                                                    <span className="wpcf7-list-item-label">Social Marketing</span>
                                                </label>
                                            </span>
                                            <span className="wpcf7-list-item last">
                                                <label>
                                                    <input type="checkbox" name="name[]" value="App Development"/>
                                                    <span className="wpcf7-list-item-label">App Development</span>
                                                </label>
                                            </span>
                                        </span>
                                    </span>
                                </p>
                                <p className="col-md-12 col-xs-12">
                                    <textarea  type="text" name="message" className="wpcf7-form-control wpcf7-textarea" placeholder="Your Message"></textarea>
                                </p>
                                <p className="text-center">
                                    <button className="octf-btn octf-btn-icon octf-btn-primary">Send Message<i className="flaticon-right-arrow-1"></i></button>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>

        </div>
    )
}