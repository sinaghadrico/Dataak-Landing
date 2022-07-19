
import type { Detaills} from "models/details";
import type { Grade } from "models/grade";
import type { Info} from "models/info";
import type { Posts } from "models/posts";
import type { Sentiment } from "models/sentiment";
import type { Subjects } from "models/subjects";
import useRequest from "utils/useRequest";


const useData = () => {

    const request = useRequest();
    const getDetails = () => {
          
        return new Promise((resolve: (response: Detaills) => void, reject) => {
            request.get(``)
                .then((response: any) => {
                   
                const data :Detaills= response.result.data;
                resolve(data);
            })
                .catch((error) => {
                    reject(error);
                })
                
        });
    };
    const getInfo = () => {
          
        return new Promise((resolve: (response: Info) => void, reject) => {
            request.get(`info`)
                .then((response: any) => {
                    
                const data :Info= response.result.data;
                    resolve(data);
                })
                .catch((error) => {
                    reject(error);
                })
                
        });
    };
    const getSubjects = () => {
          
        return new Promise((resolve: (response: Subjects) => void, reject) => {
            request.get(`subjects`)
                .then((response: any) => {
                    
                    const data :Subjects= response.result.data;
                    resolve(data);
                })
                .catch((error) => {
                    reject(error);
                })
                
        });
    };
    const getPosts = () => {
          
        return new Promise((resolve: (response: Posts) => void, reject) => {
            request.get(`posts`)
                .then((response: any) => {
                    
                    const data :Posts= response.result.data;
                    resolve(data);
                })
                .catch((error) => {
                    reject(error);
                })
                
        });
    };
    const getGrade = () => {
          
        return new Promise((resolve: (response: Grade) => void, reject) => {
            request.get(`grade`)
                .then((response: any) => {
                    
                const data :Grade=  response.result.data;
                resolve(data);
                    resolve(data);
                })
                .catch((error) => {
                    reject(error);
                })
                
        });
    };
    const getSentiment = () => {
          
        return new Promise((resolve: (response: Sentiment) => void, reject) => {
            request.get(`sentiment`)
                .then((response: any) => {
                    
                const data :Sentiment=  response.result.data;
                    resolve(data);
                })
                .catch((error) => {
                    reject(error);
                })
                
        });
    };
   

    return {getDetails, getPosts,getInfo,getSubjects,getGrade,getSentiment};
};

export default useData;
