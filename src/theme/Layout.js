import React from 'react';
import OriginalLayout from '@theme-original/Layout';
import Head from '@docusaurus/Head';

export default function Layout(props) {
    return (
        <>
            <Head>
                <meta
                    http-equiv={"Content-Security-Policy"}
                    content={
                        `default-src 'self';
                         style-src 'self' 'unsafe-inline' https://fonts.googleapis.com/ https://use.typekit.net/ https://p.typekit.net/;
                         img-src 'self' https://avatars.githubusercontent.com/ https://www.google-analytics.com/ https://github.com/ blob: data:;
                         font-src 'self' data: https://fonts.gstatic.com/ https://use.typekit.net/;
                         frame-src 'self' https://*.hotjar.com/ https://www.youtube.com;
                         script-src 'self' 'unsafe-inline' https://cdn.segment.com/ https://www.googletagmanager.com/ https://www.google-analytics.com/ https://*.hotjar.com/ https://www.youtube.com/;
                         connect-src 'self' https://www.google-analytics.com/ https://o1000337.ingest.sentry.io/ https://cdn.segment.com/ https://api.segment.io/ https://stats.g.doubleclick.net/ https://*.hotjar.com/ wss://*.hotjar.com`
                    }
                />
            </Head>
            <OriginalLayout {...props} />
        </>
    );
}