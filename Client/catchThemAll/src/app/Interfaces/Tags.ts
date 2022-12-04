export interface ITags {
    name: string,
    count: number | string
}

export class Tags {
    static clone(t: Tags): Tags {
        return new Tags(t.name, t.count)
    }

    constructor(
        public name: string,
        public count: number,
    ) { }
}