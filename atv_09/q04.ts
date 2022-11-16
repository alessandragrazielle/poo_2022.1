abstract class FiguraGeometrica{
    protected base: number;
    protected altura: number;
    protected lado1: number;
    protected lado2: number

    constructor(b:number, h:number, l1:number, l2:number){
        this.base = b;
        this.altura = h;
        this.lado1 = l1;
        this.lado2 = l2;
    }

    abstract area(): number; 
    abstract perimetro(): number;
}

class Retangulo extends FiguraGeometrica{
    constructor(b:number, h:number, l1:number, l2:number){
        super(b, h, l1, l2);
    }

    area(): number {
        return this.base * this.altura;
    }

    perimetro(): number {
        return 2*this.lado1 + 2*this.lado2;
    }
}

class Triangulo extends FiguraGeometrica{
    protected lado3: number;
    constructor(b:number, h:number, l1:number, l2:number, l3:number){
        super(b, h, l1, l2);
        this.lado3 = l3;
    }

    area(): number {
        return (this.base * this.altura) / 2;
    }

    perimetro(): number {
        return this.lado1 + this.lado2 + this.lado3;
    }
}

class Trapezio extends FiguraGeometrica{
    protected baseMenor: number;
    constructor(baseMaior:number, baseMenor:number, h:number, l1:number, l2:number){
        super(baseMaior, h, l1, l2);
        this.baseMenor = baseMenor;
    }

    area(): number {
        return ((this.base + this.baseMenor) * this.altura) / 2;
    }

    perimetro(): number {
        return this.base + this.baseMenor + this.lado1 + this.lado2;
    }
}


let r: Retangulo = new Retangulo(15, 10, 15, 10);
console.log(`Área retangulo: ${r.area()} \nPerimetro retangulo: ${r.perimetro()}`);

let t: Triangulo = new Triangulo(5, 12, 5, 5, 3);
console.log(`Área triangulo: ${t.area()} \nPerimetro triangulo: ${t.perimetro()}`);

let tp: Trapezio = new Trapezio(20, 5, 12, 10, 15);
console.log(`Área trapézio: ${tp.area()} \nPerimetro trapézio: ${tp.perimetro()}`);