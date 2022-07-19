export interface Grade {
    twitter: KeyValue;
    instagram: KeyValue;
    telegram: KeyValue;

}
export interface KeyValue {
    numerator: number;
    denominator: number;
    calculated: number;
}
export interface Result {
    data: Grade;
    mata: any[];
}

export interface Response {
    result: Result;
    errors: any[];
}