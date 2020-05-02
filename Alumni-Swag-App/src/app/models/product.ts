export class Product {
    id: number;
    name: string;
    description: string;
    imageUrl: string;

    constructor(id:number, name:string, description:string = '', imageUrl:string = 'https://fanatics.frgimages.com/FFImage/thumb.aspx?i=/productimages/_2513000/altimages/ff_2513210alt2_full.jpg&w=600'){
        this.id = id
        this.name = name
        this.description = description
        this.imageUrl = imageUrl
    }
}
