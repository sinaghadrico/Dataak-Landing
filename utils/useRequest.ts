import { useMemo } from "react";
import axios from "axios";
import { useRouter } from "next/router";
const useRequest = () => {
    const router = useRouter();

    const campaign = router?.asPath?.split(/\?/)?.[1];

    const request = useMemo(() => {
        return axios.create({
            baseURL: process.env.baseURL + (campaign ? campaign?.replace("campaign=", "") : "elecomp"),
            timeout: 10000,
            headers: {
                "content-type": "application/json",
            },
        });
    }, [campaign]);

    request.interceptors.response.use(
        (response) => {
            return response?.data ? response?.data : response;
        },
        (error) => {},
    );

    const get = (arg: string) => {
        return request.get(arg);
    };
    const deleteRequest = (arg: string) => {
        return request.delete(arg);
    };
    const post = (arg: string, body: any) => {
        return request.post(arg, body);
    };
    const patch = (arg: string, body: any) => {
        return request.patch(arg, body);
    };
    const put = (arg: string, body: any) => {
        return request.put(arg, body);
    };

    const all = axios.all;
    const spread = axios.spread;

    return { request, get, post, put, deleteRequest, patch, all, spread };
};

export default useRequest;
