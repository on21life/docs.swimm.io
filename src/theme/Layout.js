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
                         style-src 'self' 'unsafe-inline';
                         img-src 'self' https://avatars.githubusercontent.com/ https://www.google-analytics.com/ https://github.com/ blob: data:;
                         font-src 'self' data:; script-src 'self' 'unsafe-inline' https://cdn.segment.com/ https://static.hotjar.com/ https://www.googletagmanager.com/ https://www.google-analytics.com/;
                         connect-src 'self' https://www.google-analytics.com/ https://o1000337.ingest.sentry.io/ https://cdn.segment.com/ https://api.segment.io/ https://stats.g.doubleclick.net/`
                    }
                />
            </Head>
            <OriginalLayout {...props} />
        </>
    );
}