import React from 'react'
import PageTitleBox from '../components/PageTitleBox/PageTitleBox'
export default function About()
{
    return (
            <> 
            <PageTitleBox/>       
            <div id="content" className="site-content">
                <section className="p-t125 p-b160 sm-p-b60">
                <div className="container">
                    <div className="row flex-row justify-content-center">
                        <div className="col-md-6 col-sm-12-col-xs-12 align-self-center">
                            <img src="images/about-us-1.png" alt=""/>
                        </div>
                        <div className="col-md-6 col-sm-12-col-xs-12 align-self-center">
                            <div className="about-content p-l80 xs-p-l0">
                                <div className="ot-heading left-align">
                                    <h6><span>About</span></h6>
                                    <h2 className="main-heading">Gnarium Iqnovative Pvt Ltd</h2>
                                </div>
                                <p className="p-b45">Gnarium Iqnovative is an IT Company founded by Mr Abhinav Agnihotri and Mrs Pankaj Lata. Here at Gnarium Iqnovative Pvt Ltd, we have highly qualified and experienced web designers, web developers, digital marketers, graphic designers , content writers etc.  and every project we take we create it from scratch to the best level as per client need .Our team is the most important part of Gnarium Iqnovative Family and it’s there work which make us most recognizable and trustable among our customers, we believe in “Smart” and “On-Time” completions of our project.</p>
                                <div className="video-popup">
                                    <div className="btn-inner">
                                        <a className="btn-play" href="https://vimeo.com/214162786">
                                            <i className="fas fa-play"></i>
                                            <span className="circle-1"></span>
                                            <span className="circle-2"></span>
                                        </a>
                                    </div>
                                    <span>video showcase</span>     
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="p-b170 bg-light">
                <div className="container">
                    <div className="row flex-row justify-content-center">
                        <div className="col-md-6 col-xs-12 xs-m-b40">
                            <div className="ot-heading">
                                <h6><span>OUR AIM</span></h6>
                                <h2 className="main-heading">We aim to</h2>
                            </div>
                            <p className="m-b35">
                                <ul>
                                    <li>Provide best in class IT services to our clients and to help them in growing their business online in 2020 and further.</li>
                                    <li>Lower the pricing but providing higher quality IT services.</li>
                                    <li>Our Award technical support will take care of your project after completion.</li>
                                    <li>Create a benchmark in the IT industry by becoming the most trustable and innovative company.</li>
                                </ul>
                          </p>
                         </div>
                        <div className="col-md-6 col-xs-12 align-self-center">
                            <img src="images/about-us-2.png" alt=""/>
                        </div>
                    </div>
                </div>
            </section>
           
        </div>
            </>
    )
}