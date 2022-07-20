export interface Subjects {
    twitter: KeyValueSubjects[];
    instagram: KeyValueSubjects[];
    telegram: KeyValueSubjects[];
    news: KeyValueSubjects[];

}
export interface KeyValueSubjects {
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