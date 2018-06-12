function decodeString(s){

  var argument = s.replace('[':'',']':'').split("");
  var printThis;

  for(i = 1; i <= argument[0]; i++ ){
      
      printThis += argument[i];
  }

  return printThis;
}