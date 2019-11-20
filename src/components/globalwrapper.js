import React from 'react'
import { Helmet } from 'react-helmet'

export default class GlobalWrapper extends React.Component {
    render () {
        return(
            <>
                <Helmet>
                    <html lang="en" />
                    <meta charSet="utf-8" />
                    <meta name="description" content="Ryan Ouyang's Personal Website" />
                    <meta name="keywords" content="ryan, ouyang, code, blockchain, keyboards, guitar, music, hackathons" />

                    <meta property="og:title" content="Ryan Ouyang's Personal Website" />
                    <meta property="og:type" content="website" />
                    <meta property="og:url" content="http://ryanouyang.com" />
                    {/* <meta property="og:image" content="../../assets" /> */}

                    <title>Ryan Ouyang</title>
                </Helmet>
                {this.props.children}
            </>
        )
    }
}