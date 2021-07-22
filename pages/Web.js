import React from 'react'
export default function Web()
{
    return(
        <div>
            <div className="page-header dtable text-center" style={{backgroundImage: 'url(images/bg-page-header.jpg)'}}>
                <div className="dcell">
                    <div className="container">
                        <h1 className="page-title">Web Development</h1>
                        <ul id="breadcrumbs" className="breadcrumbs">
                            <li><a href="#">Home</a></li>
                            <li className="active">Web Development</li>
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
                                <h2 className="main-heading">Web Development</h2>
                            </div>
                            <p>All kind of website can be developed by our highly qualified and trained developers as per client’s need, on whatever platform you need your website either it is WordPress, PHP, .NET. , Java etc.</p>
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