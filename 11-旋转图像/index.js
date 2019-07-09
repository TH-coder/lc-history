var rotate = function(matrix) {
    for (let i = 0; i < matrix.length; i++) {
      const arr = matrix[i];
      for (let j = i; j < arr.length; j++) {
        const num = matrix[i][j];
        matrix[i][j] = matrix[j][i];
        matrix[j][i] = num;
      }
    }
    matrix.forEach((item,index,arr)=>{
      arr[index].reverse();
    });
    return matrix
  };


  console.log(rotate([[1,2,3],[4,5,6],[7,8,9]]));
  