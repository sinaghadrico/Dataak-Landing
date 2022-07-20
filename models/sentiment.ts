export interface Sentiment {
    twitter: KeyValueSentiment;
    instagram: KeyValueSentiment;
    telegram: KeyValueSentiment;
    news?: KeyValueSentiment;

}
export interface KeyValueSentiment {
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