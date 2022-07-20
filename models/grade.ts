export interface Grade {
    twitter: KeyValueGrade;
    instagram: KeyValueGrade;
    telegram: KeyValueGrade;
    news?: KeyValueGrade;

}
export interface KeyValueGrade {
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