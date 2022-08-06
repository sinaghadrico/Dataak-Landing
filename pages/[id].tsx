import Head from "next/head";

import Header from "components/Header";
import Info from "components/Info";
import Posts from "components/Posts";
import SocialHistory from "components/SocialHistory";
import useSWR from "swr";
import useData from "services/useData";

export default function Home() {
    const { getDetails } = useData();
    const { data: dataDetails } = useSWR([`getDetails`], getDetails);

    return (
        <div className="flex min-h-screen flex-col items-center content-center  ">
            <Head>
                <title>دیتاک | {dataDetails?.title}</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>

            <div className="flex flex-col md:flex-col lg:flex-col w-full self-center  ">
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
