import React from 'react'
export default function Software()
{
    return(
        <div>
                <div className="page-header dtable text-center" style={{backgroundImage: 'url(images/bg-page-header.jpg)'}}>
                <div className="dcell">
                    <div className="container">
                        <h1 className="page-title">Software Development</h1>
                        <ul id="breadcrumbs" className="breadcrumbs">
                            <li><a href="#">Home</a></li>
                            <li className="active">Software Development</li>
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
                                <h2 className="main-heading">Software Development</h2>
                            </div>
                            <p>The software can automate a business either it is an office management software, school management software, Customer Relationship Management software etc we have all kind of software according to your business needs and we can create one according to our clients business needs.</p>
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