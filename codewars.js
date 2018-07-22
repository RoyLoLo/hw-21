

function accum(s){
  let sArray = s.split("");
  let newArray =[];
  
  for(n=0;n<sArray.length;n++){
  for(k=0;k<n;k++){
  if(k=0){
  newArray.push(sArray[n].toLowerCase);
  }else{
  newArray.push(sArray[n].toUpperCase)
  }
  }
  if(n,sArray.length-1){
    newArray.push('-');
  }
  }
  return newArray.toString;
}