import Head from "next/head";

import Header from "components/Header";
import Info from "components/Info";
import Posts from "components/Posts";
import SocialHistory from "components/SocialHistory";

export default function Home() {
    return (
        <div className="flex min-h-screen flex-col items-center content-center  ">
            <Head>
                <title>Dataak Landing | Home</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>

            <div className="flex flex-col w-full md:flex-col lg:flex-col self-center  ">
                <Header />
                <Info />
                <Posts />
                <SocialHistory />
            </div>
        </div>
    );
}
Home.getLayout = function getLayout(page) {
    return page;
};
