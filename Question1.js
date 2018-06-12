
function sortByStrings(s,t){

  var newStr = [];
  const letterOrder = t.split(""); 
  const str = s.split("");

  letterOrder.forEach( (i) => {
    str.forEach( (j) => {
      if (i === j){
      newStr.push(j);
      } 
    });
    
  });

  return newStr.toString();

}

sortByStrings('bobby','ybo');