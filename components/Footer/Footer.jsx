import Link from 'next/link';
import tawkTo from "tawkto-react";
import React from 'react';
import  {useState,useEffect} from 'react';
const tawkToPropertyId = '60e1fb7dd6e7610a49a990ec'

// Direct Chat Link
// https://tawk.to/chat/tawkToPropertyId/tawkToKey

const tawkToKey = '7e18a7973832eaf6ebff32c034aec75ab5cb1a9d'


componentDidMount(){
    tawkTo(tawkToPropertyId, tawkToKey)
}
export default function Footer()

{
    
    return(
        
        <div>
            
            <footer id="site-footer" className="site-footer bg-gradient footer-top-bottom">
        <div className="footer-shape-top">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                <path className="footer-shape-fill" d="M500,97C126.7,96.3,0.8,19.8,0,0v100l1000,0V1C1000,19.4,873.3,97.8,500,97z"></path>
            </svg>
        </div>
        <div className="container">

            <div className="footer-logo text-center">
                <img src="images/loo.png" className="attachment-large size-large" alt=""/>
            </div>

            <div className="flex-col">
                <div className="ft-col-contact text-center">
                    <div className="contact-info box-style2 text-light">
                        <div className="box-icon"><i className="flaticon-world"></i></div>
                        <p>C- 2139  Rajajipuram, Near Meena Bakery Chauraha, Lucknow ,UP -226017 IND</p>
                        <h6>Our Address</h6>                                            
                    </div>
                </div>
                <div className="ft-col-contact text-center border-left border-right">
                    <div className="contact-info box-style2 text-light">
                        <div className="box-icon"><i className="flaticon-note"></i></div>
                        <p>
                            <Link href="/mailto:info@gnariumiqnovative.com">
                            <a >
                                info@gnariumiqnovative.com
                            </a>
                            </Link>
                        </p>
                        <h6>Our Mailbox</h6>                                            
                    </div>
                </div>
                <div className="ft-col-contact text-center">
                    <div className="contact-info box-style2 text-light">
                        <div className="box-icon"><i className="flaticon-viber"></i></div>
                        <p><Link href="tel:+91 9170787453">
                            <a >+919170787453</a></Link></p>
                        <h6>Our Phone</h6>                                          
                    </div>
                </div>
            </div>

            <div className="footer-menu">
                <ul id="menu-footer-menu" className="menu">
                    <li><Link href="/">
                        <a  aria-current="page">Home</a></Link></li>
                    <li><Link href="/"><a >About</a></Link></li>
                    <li><Link href="/"><a >Portfolio</a></Link></li>
                    <li><Link href="/"><a >FAQs</a></Link></li>
                    <li><Link href="/"><a >Contacts</a></Link></li>
                </ul>
            </div>

            <p className="copyright text-center">Gnarium Iqnovative | All Rights Reserved | 2020 </p>
            
            <div className="footer-social text-center">
                <Link href="https://twitter.com/GIqnovative">
                <a className="footer-social-icon twitter"  target="_blank"><i className="fab fa-twitter"></i></a></Link>
                <Link href="https://www.facebook.com/gnariumiqnovative/">
                <a className="footer-social-icon facebook" target="_blank"><i className="fab fa-facebook-f"></i></a></Link>
                <Link href="https://www.linkedin.com/company/gnarium-iqnovative/">
                <a className="footer-social-icon linkedin"  target="_blank"><i className="fab fa-linkedin-in"></i></a></Link>
                <Link href="https://www.instagram.com/gnariumiqnovative/">
                <a className="footer-social-icon instagram"  target="_blank"><i className="fab fa-instagram"></i></a></Link>
            </div>
        </div>
    </footer>
    <Link href="https://wa.me/+919170787453">
            <a href="https://wa.me/+919170787453" target="_blank" id="back" className="show1" >
                <i className="fab fa-whatsapp whatsapp-icon"></i>
            </a>
        </Link>
        </div>
        
    )
}
