interface IRombo {
    id: number;
    diagonalHorizontal: number;
    diagonalVertical: number;
}

class Rombo {
    constructor(public props: IRombo) {}
}

const newRombo = new Rombo({
    id: 1,
    diagonalHorizontal: 2,
    diagonalVertical: 2,
});

const {props: {id, diagonalHorizontal, diagonalVertical }} = newRombo;

console.log (id, diagonalVertical, diagonalHorizontal) ;