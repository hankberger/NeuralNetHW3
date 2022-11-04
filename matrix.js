class Matrix{
    constructor(matrix){
        // console.log(matrix);
        this.matrix = matrix || [];
        this.rows = matrix.length || 0;
        this.columns = matrix[0].length || 0; 
    }

    static multiply(matrix1, matrix2){
        let a, b;
        if(matrix1.columns != matrix2.rows){
            a = matrix2;
            b = matrix1;
        } else {
            a = matrix1;
            b = matrix2;
        }

        let newMatrix = new Array(a.rows).fill(0).map(()=>new Array(b.columns).fill(0));

        for(let i = 0; i < a.rows; i++){
            
            for(let j = 0; j < b.columns; j++){
                newMatrix[i][j] = 0;
                for(let k = 0; k < b.rows; k++){
                    // console.log(a)
                    newMatrix[i][j] += a.matrix[i][k] * b.matrix[k][j];
                }
            }
        }

        // console.log(newMatrix);
        return new Matrix(newMatrix);
    }

    static add(m1, m2){
        m1 = m1.matrix;
        m2 = m2.matrix;
        let newMat = [];

        for(let i = 0; i < m1.length; i++){
            const row = [];
            for(let j = 0; j < m1[0].length; j++){
                row.push(m1[i][j] + m2[i][j]);
            }
            newMat.push(row);
        } 

        return new Matrix(newMat);
    }
}

module.exports = Matrix;