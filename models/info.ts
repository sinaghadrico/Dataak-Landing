export interface Info {
    post_count: string;
    resource_count: string;

}

export interface Result {
    data: Info;
    mata: any[];
}

export interface Response {
    result: Result;
    errors: any[];
}