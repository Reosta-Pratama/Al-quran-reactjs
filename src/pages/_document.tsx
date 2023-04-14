import {Html, Head, Main, NextScript} from 'next/document'

export default function Document() {
    return (<Html lang="en">
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin=''></link>
        <link
            href="https://fonts.googleapis.com/css2?family=Berkshire+Swash&display=swap"
            rel="stylesheet"></link>
        <link
            href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;600;700;800&display=swap"
            rel="stylesheet"></link>
            <Head/>
            <body>
                <Main/>
                <NextScript/>
            </body>
        </Html>
        )
}