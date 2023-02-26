  const span = document.getElementsByTagName('span');
  const p = document.getElementsByTagName('p');
  
  if(span.length){
      transformByonicReading(span)
  }
  
  if(p.length){
    transformByonicReading(p);
  }


function transformByonicReading(string){
  for(let i = 0; i < string.length; i++){ 
    const words = string[i].textContent.split(" ");

    const boldWords =  words.map((word) =>{
      let lettersNumber = word.length > 1 ? Math.round(word.length / 2) : 1;

      const boldLetters = word.slice(0,lettersNumber).bold();

      if(boldLetters) return boldLetters.concat(word.slice(lettersNumber));
      else return word;
    });

    string[i].innerHTML = boldWords.join(" ");
  }
}
