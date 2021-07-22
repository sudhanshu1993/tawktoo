import React from 'react'
import emailjs from 'emailjs-com';
export default function ContactUs() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_hy9133o', 'template_jjpf8o4', e.target, 'user_YZibifdWgZIlO0dN2WmO7')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }  
    return(
        <div>
                   <div id="content" className="site-content">
            <div className="page-header dtable text-center" style={{backgroundImage: 'url(images/bg-page-header.jpg)'}}>
                <div className="dcell">
                    <div className="container">
                        <h1 className="page-title">Contacts</h1>
                        <ul id="breadcrumbs" className="breadcrumbs">
                            <li><a href="#">Home</a></li>
                            <li className="active">Contacts</li>
                        </ul>
                    </div>
                </div>
            </div>

            <section className="p-t110 z-index-1 section-contact">
                <div className="container">
                    <div className="row flex-row">
                        <div className="col-md-6 col-xs-12 sm-m-b60">
                            <div className="our-contact text-light">
                                <div className="ot-heading text-light">
                                    <h6><span>contact details</span></h6>
                                    <h2 className="main-heading">Our Contacts </h2>
                                </div>
                                <p className="m-b45">Give us a call or drop by anytime, we endeavour to answer all enquiries within 24 hours on business days. We will be happy to answer your questions.</p>
                                <div className="contact-info text-light m-b30">
                                    <i className="flaticon-world"></i>
                                    <div className="info-text">
                                        <h6>Our Address:</h6>
                                        <p>C-4406 , New C Block, RJPM1 , Lucknow, UP-226017 IND</p>
                                    </div>
                                </div>
                                <div className="contact-info text-light m-b30">
                                    <i className="flaticon-note"></i>
                                    <div className="info-text">
                                        <h6>Our mailbox:</h6>
                                        <p><a href="mailto:info@gnariumiqnovative.com">info@gnariumiqnovative.com</a></p>
                                    </div>
                                </div>
                                <div className="contact-info text-light">
                                    <i className="flaticon-viber"></i>
                                    <div className="info-text">
                                        <h6>Our phones:</h6>
                                        <p><a href="tel:+91-9170787453">+91-9170787453</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-xs-12 align-self-center">
                            <div className="form-contact">
                                <div className="ot-heading">
                                        <h6><span>GET IN TOUCH</span></h6>
                                    <h2 className="main-heading">Ready to Get Started?</h2>
                                </div>
                                <form className="contact-form" onSubmit={sendEmail} >
                                    <div className="col-md-12 col-sm-6">
                                    <p>
                                        <span className="wpcf7-form-control-wrap your-email">
                                            <input type="text" name="user_name" id="email" className="wpcf7-form-control wpcf7-text wpcf7-email" placeholder="Your Name *" required=""/>
                                        </span>
                                    </p>
                                    <p>
                                        <span className="wpcf7-form-control-wrap your-message">
                                            <input type="email" name="user_email" id="message" className="wpcf7-form-control wpcf7-textarea" placeholder="Email" required=""/>
                                        </span>
                                    </p>
                                    </div>
                                    <div className="col-md-12 col-sm-6">
                                    <p>
                                        <span className="wpcf7-form-control-wrap your-name">
                                            <input type="text" name="contact_number" id="name" className="wpcf7-form-control wpcf7-text" placeholder="Your Phone Number *" required=""/>
                                        </span>
                                    </p>
                                    </div>
                                    <br/><br/><br/>
                                    <div className="container-fluid">
                                    <p>
                                        <span className="wpcf7-form-control-wrap your-name">
                                            <textarea name="message"  className="wpcf7-form-control wpcf7-text" placeholder="Your Message *" required=""/>
                                        </span>
                                    </p>
                                    
                                    </div>
                                    <div className="col-md-12 col-sm-6">
                                    <p>
                                        <button type="submit" className="octf-btn octf-btn-primary octf-btn-icon">Send Message <i className="flaticon-right-arrow-1"></i></button>
                                    </p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d86077.66255184308!2d-122.40402224079803!3d47.60810999586645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54906ab3f905c4b1%3A0x96bf575ff75ab1aa!2s411%20University%20St%2C%20Seattle%2C%20WA%2098101%2C%20Hoa%20K%E1%BB%B3!5e0!3m2!1svi!2s!4v1584084043716!5m2!1svi!2s" width="100%" height="500" frameborder="0" style={{border:'0'}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                </div>
            </section>
        </div>

        </div>
    )
}