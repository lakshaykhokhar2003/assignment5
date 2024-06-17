import {Html, Head, Main, NextScript} from "next/document";

export default function Document() {
    return (
        <Html lang="en">
            <link href="https://api.fontshare.com/v2/css?f[]=clash-display@200,300,400,500,600,700,1&display=swap"
                  rel="stylesheet"/>
            <Head/>
            <body>
            <Main/>
            <NextScript/>
            </body>
        </Html>
    );
}
