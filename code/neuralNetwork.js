let Matrix = require("./matrix");

class NeuralNetwork{
    constructor(){
        
    }

    static solve(inputVec, weights, bias, relu){
        const product = Matrix.multiply(weights, inputVec);
        // console.log("prod", product)
        let sum = Matrix.add(product, bias);
        sum = sum.matrix;

        if(relu === 'true'){
            for(let i = 0; i < sum.length; i++){
                for(let j = 0; j < sum[0].length; j++){
                    sum[i][j] = Math.max(0, sum[i][j]);
                }
            }
        }
        // console.log(sum);
        return new Matrix(sum);
    }
}

module.exports = NeuralNetwork;