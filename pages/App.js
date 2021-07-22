import React from 'react'
export default function App()
{
    return(
        <div>
            <div className="page-header dtable text-center" style={{backgroundImage: 'url(images/bg-page-header.jpg)'}}>
                <div className="dcell">
                    <div className="container">
                        <h1 className="page-title">App Development</h1>
                        <ul id="breadcrumbs" className="breadcrumbs">
                            <li><a href="#">Home</a></li>
                            <li className="active">App Development</li>
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
                                <h2 className="main-heading">App Development</h2>
                            </div>
                            <p>Big brands use to have an application to operate their task which is an easy way of operating multiple tasks at one place either it is an E-commerce app, food delivery app, LMS app, Test Series App etc. We at Gnarium Iqnovative private limited can create all these kind of Android or iOS apps according to the user requirement.</p>
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