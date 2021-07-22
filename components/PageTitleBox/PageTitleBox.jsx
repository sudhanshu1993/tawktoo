import Link from 'next/link'
import React from 'react'
export default function PageTitleBox()
{
    return(
            <div id="content" className="site-content">
            <div className="page-header dtable text-center" style={{backgroundImage: 'url(images/bg-page-header.jpg)'}}>
                <div className="dcell">
                    <div className="container">
                        <h1 className="page-title">About Company</h1>
                        <ul id="breadcrumbs" className="breadcrumbs">
                            <li>
                                <Link href="/">
                                <a >Home</a>
                                </Link>
                                </li>
                            <li className="active">About Company</li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )
}