export class Cocktails {

  name : string;
  prix: number;
  image: string;

  constructor(name: string = '', prix: number = 10, image: string = ''){

    this.name = name;
    this.image = image;
    this.prix = prix;
  }

  }