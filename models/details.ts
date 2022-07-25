export interface Details {
    id: number;
    title: string;
    slug: string;
    description: string;
    platforms: string[];
    query: string;
    user_id: number;
    start_date: string;
    ending_date: string;
    last_update: string;
    created_at: string;
    updated_at: string;
    logo: string;
}

export interface Result {
    data: Details;
    mata: any[];
}

export interface Response {
    result: Result;
    errors: any[];
}
