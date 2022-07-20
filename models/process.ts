export interface Process {
    count: number;
    time:string
 
 }
export interface ProcessResponse {
   [x:string]: number;
}

export interface Result {
    data: ProcessResponse;
    mata: any[];
}

export interface Response {
    result: Result;
    errors: any[];
}