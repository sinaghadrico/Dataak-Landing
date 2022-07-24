import type { Detaills } from "models/details";
import type { Grade } from "models/grade";
import type { Info } from "models/info";
import type { Post } from "models/post";
import type { Process } from "models/process";
import type { Resource } from "models/resource";
import type { Sentiment } from "models/sentiment";
import type { Subjects } from "models/subjects";
import useRequest from "utils/useRequest";

const useData = () => {
    const request = useRequest();

    const getDetails = () => {
        return new Promise((resolve: (response: Detaills) => void, reject) => {
            request
                .get(``)
                .then((response: any) => {
                    const data: Detaills = response.result.data;
                    resolve(data);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    };
    const getInfo = () => {
        return new Promise((resolve: (response: Info) => void, reject) => {
            request
                .get(`info`)
                .then((response: any) => {
                    const data: Info = response.result.data;
                    resolve(data);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    };
    const getProcess = () => {
        return new Promise((resolve: (response: Process[]) => void, reject) => {
            request
                .get(`process`)
                .then((response: any) => {
                    const data: Process[] = Object.entries(response.result.data).map(([key, value]: any) => {
                        return {
                            count: value,
                            time: key,
                        };
                    });

                    resolve(data);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    };
    const getResources = () => {
        return new Promise((resolve: (response: Resource[]) => void, reject) => {
            request
                .get(`resources`)
                .then((response: any) => {
                    const data: Resource[] = response.result.data;
                    resolve(data?.slice(0, 12));
                })
                .catch((error) => {
                    reject(error);
                });
        });
    };
    const getSubjects = () => {
        return new Promise((resolve: (response: Subjects) => void, reject) => {
            request
                .get(`subjects`)
                .then((response: any) => {
                    const data: Subjects = response.result.data;
                    resolve(data);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    };
    const getPosts = () => {
        return new Promise((resolve: (response: Post[]) => void, reject) => {
            request
                .get(`posts`)
                .then((response: any) => {
                    const data: Post[] = response.result.data;
                    resolve(data);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    };
    const getGrade = () => {
        return new Promise((resolve: (response: Grade) => void, reject) => {
            request
                .get(`grade`)
                .then((response: any) => {
                    const data: Grade = response.result.data;
                    resolve(data);
                    resolve(data);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    };
    const getSentiment = () => {
        return new Promise((resolve: (response: Sentiment) => void, reject) => {
            request
                .get(`sentiment`)
                .then((response: any) => {
                    const data: Sentiment = response.result.data;
                    resolve(data);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    };

    return { getDetails, getPosts, getInfo, getResources, getProcess, getSubjects, getGrade, getSentiment };
};

export default useData;
