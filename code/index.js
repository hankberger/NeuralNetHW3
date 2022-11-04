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


    let min = Number.MAX_VALUE;
    let leastInput = 0;
    let minMatrix;
    for(let i = 0; i < 1000000; i++){
        const input = Math.random()*.20 +.15;
        const inputVec = new Matrix([[input], [input], [input], [input], [input], [input], [input], [input], [input], [input], [input], [input], [input], [input], [input], [input], [input], [input], [input], [input], [input], [input], [input], [input], [input], [input], [input], [input], [input], [input]]);

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
        const sum = Math.abs(sumMatrix(ans.matrix));
        if(sum < min){
            min = sum;
            minMatrix = ans;
            leastInput = input;
        }
        // console.log(ans);
    }

    console.log(leastInput, min, minMatrix);
}

solveNetworks();

function sumMatrix(matrix){
    let sum = 0;
    for(let i = 0; i < matrix.length; i++){
        for(let j = 0; j < matrix[i].length; j++){
            sum += matrix[i][j];
        }
    }
    return sum;
}


// let mat = new Matrix([[2, 2]]);

// let mat2 = new Matrix([[1], [1]]);

// const res = Matrix.multiply(mat, mat2);

// console.log(res);