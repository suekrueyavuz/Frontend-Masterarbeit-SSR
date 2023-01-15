export class CaloricRequirement {
    gender:string;
    age:number;
    weight:number;
    height:number;
    pal:number;

    constructor(gender:string, age:number, weight:number, height:number, pal:number) {
        this.gender = gender;
        this.age = age;
        this.weight = weight;
        this.height = height;
        this.pal = pal;
    }
}