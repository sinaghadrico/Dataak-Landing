export interface Detaills {
    id: number;
    title: string;
    slug: string;
    platforms: string[];
    query: string;
    user_id: number;
    start_date: string;
    ending_date: string;
    last_update: string;
    created_at: string;
    updated_at: string;

}

export interface Result {
    data: Detaills;
    mata: any[];
}

export interface Response {
    result: Result;
    errors: any[];
}