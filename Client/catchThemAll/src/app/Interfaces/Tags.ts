export interface ITags {
    name: string,
    count: number | string
}

export class Tags {
    static clone(t: Tags): Tags {
        return new Tags(t.name, this.thousandFormater(Number(t.count)))
    }

    //if count in tag is over 1 000 it will change on 1k 
    //another example 20 000 = 20k
    static thousandFormater(number: number) {
        return Math.abs(number) > 999 ? Math.sign(number) * ((Math.abs(number) / 1000)) + 'k' :
            Math.sign(number) * Math.abs(number)
    }

    constructor(
        public name: string,
        public count: number | string,
    ) { }
}