export interface Subjects {
    twitter: KeyValue[];
    instagram: KeyValue[];
    telegram: KeyValue[];
    news: KeyValue[];

}
export interface KeyValue {
    word: string;
    count: number;
}

export interface Result {
    data: Subjects;
    mata: any[];
}

export interface Response {
    result: Result;
    errors: any[];
}