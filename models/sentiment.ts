export interface Sentiment {
    twitter: KeyValue;
    instagram: KeyValue;
    telegram: KeyValue;

}
export interface KeyValue {
    sentiment: number;
}
export interface Result {
    data: Sentiment;
    mata: any[];
}

export interface Response {
    result: Result;
    errors: any[];
}