import React from 'react'
export default function Graphic()
{
    return(
        <div>
            <div className="page-header dtable text-center" style={{backgroundImage: 'url(images/bg-page-header.jpg)'}}>
                <div className="dcell">
                    <div className="container">
                        <h1 className="page-title">Graphic Designing</h1>
                        <ul id="breadcrumbs" className="breadcrumbs">
                            <li><a href="#">Home</a></li>
                            <li className="active">Graphic Designing</li>
                        </ul>
                    </div>
                </div>
            </div>
            <section className="p-t140 p-b100">
                <div className="container">
                    <div className="flex-row">
                        <div className="app-development-left-1 align-self-center">
                            <div className="ot-heading left-align">
                                {/*<h6><span>We get results</span></h6>*/}
                                <h2 className="main-heading">Graphic Designing</h2>
                            </div>
                            <p>A  unique and beautiful poster can generate more leads for your business and it has a great impact on social media too. We provide graphic designing services which include Script Writing /Scripting, Storyboarding /Video Graphics/Sound fx, Logo Designing, High-end animation with multiple shots and character etc.</p>
                        </div>

                        <div className="app-development-right-1 align-self-center">
                            <img src="images/image2-home4.png" alt=""/>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}