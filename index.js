function spinWords(string){
  let joinstring;
  if(string.indexOf(' ') ==-1){
    let splitsting = string.split('');
    let reversestring = splitsting.reverse();
     joinstring = reversestring.join('');
  }
  else{
    let putarray =[];
    let splitsting = string.split(' ');
    splitsting.forEach(str =>{
     let splitstr =  str.split('');
      splitstr  = splitstr.reverse();
      let joinspltedstr = splitstr.join('');
      putarray.push(joinspltedstr);
    });
     joinstring = putarray.join(' ');  
  } 
  return joinstring;
}