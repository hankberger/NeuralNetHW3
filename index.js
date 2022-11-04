let Matrix = require("./matrix");
const fs = require('fs/promises');
const NeuralNetwork = require("./neuralNetwork");


async function readFile(){
    try{
        const data = await fs.readFile('./newNetwork.txt', {encoding: 'utf8'});
        return data;
    } catch (err){
        console.error(err);
    }
}

async function solveNetworks(){
    let data = await readFile();
    data = data.split('\n');
    // console.log(data);
    const nn = new NeuralNetwork();

    const inputVec = new Matrix([[1]]);

    let line = 0;
    const layers = data[line].split(' ')[1];
    line++;

    let ans;
    for(let i = 0; i < layers; i++){
        let curArray = ans || inputVec;

        const rows = data[line].split(' ')[2];
        line++;
        const cols = data[line].split(' ')[2];
        line++;
        const weights = await JSON.parse(data[line].split(':')[1]);
        line++;
        const bias = await JSON.parse(data[line].split(':')[1]);
        line++;
        const relu = data[line].split(' ')[2];
        line++;

        // console.log(layers, rows, cols, weights, bias, relu, curArray);
        ans = NeuralNetwork.solve(curArray, new Matrix(weights), new Matrix(bias), relu);

    }
    console.log(ans);
}

solveNetworks();


// let mat = new Matrix([[2, 2]]);

// let mat2 = new Matrix([[1], [1]]);

// const res = Matrix.multiply(mat, mat2);

// console.log(res);