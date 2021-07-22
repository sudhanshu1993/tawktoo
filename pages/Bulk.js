import React from 'react'
export default function Bulk()
{
    return(
        <div>
            <div className="page-header dtable text-center" style={{backgroundImage: 'url(images/bg-page-header.jpg)'}}>
                <div className="dcell">
                    <div className="container">
                        <h1 className="page-title">Bulk SMS</h1>
                        <ul id="breadcrumbs" className="breadcrumbs">
                            <li><a href="#">Home</a></li>
                            <li className="active">Bulk SMS</li>
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
                                <h2 className="main-heading">Bulk SMS</h2>
                            </div>
                            <p>We are the emerging bulk SMS provider with promotional SMS and transactional SMS instant delivery and 99% uptime guaranty hurry!!! so get up your phone and contact us now to know the SMS pricing.</p>
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