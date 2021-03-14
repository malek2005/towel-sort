
// You should implement your task here.

module.exports = function towelSort (matrix) {
   
  let matrix1 = [];
  let valueReverse;
  if (!matrix) {
    return [];
  }  
  for (const [key, value] of Object.entries(matrix)){
  if (key % 2 == 0)
  {
    for (const [subkey,subvalue] of Object.entries(value))
  {
    matrix1.push(subvalue);
  }  
  } 

    else  {
    
      valueReverse = value.reverse();
      for (const [subkey, subvalue] of Object.entries(valueReverse))
      {
        matrix1.push (subvalue);
      }
  } 
  
}
return matrix1;
}
