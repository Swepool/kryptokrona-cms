import * as React from 'react'
import {Helmet} from 'react-helmet'

const Seo = () => {
    return (
        <Helmet htmlAttributes>
            <html lang="en"/>
            <title>Kryptokrona</title>
            <meta name="Kryptokrona" content="Kryptokrona"/>
            <meta name="description" content="Hugin is a messaging service where messages are stored on the kryptokrona blockchain. Your
                        messages are secured with industry leading encryption so that only you and your chat partner have
                        the possibility to read them."/>
            <meta name="theme-color" content="#1d1d1d"/>
            <meta name="robots" content="index, follow"/>
            <link rel="canonical" href="http://Kryptokrona.org/" />
            <link rel="icon" src="../images/favicon.ico" type="image/x-icon"/>
            <meta property="og:image" content="https://user-images.githubusercontent.com/36674091/148423512-2c019bd6-6b32-45ce-b380-100632b00f0f.png" />
        </Helmet>
    )
}

export default Seo