class Empregado{
    _salario: number = 500;

    cacularSalario(): number{
        return this._salario;
    }
}

class Diarista extends Empregado{
    cacularSalario(): number {
        return this._salario/30;
    }
}

class Horista extends Diarista{
    cacularSalario(): number {
        return this._salario/30/24;
    }
}