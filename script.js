  const checkHtml = RegExp(/(<([^>]+)>)/i);
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
    let words = string[i].innerHTML.split(/(?<=>)([\w\s]+)(?=<\/)/g);

    if(words.length > 1){
      const newWords = words.map((word) => {

        if(word.search(" ") >= 0 && word.search(checkHtml) === -1) return word.split(" ");

        if(word !== string[i].textContent && word.search(checkHtml) === -1){
          return word.split(" ");
        }else{
          return word
        }
      })
      
      words = newWords.flat(1);
    }else{
      if(words[0].search(" ") >= 0 && words[0].search(checkHtml) === -1) words = words[0].split(" ");
    }

    const boldWords =  words.map((word) =>{
      
      let lettersNumber = word.length > 1 ? Math.round(word.length / 2) : 1;

      if(word.search(checkHtml) === -1 ){
        const boldLetters = word.slice(0,lettersNumber).bold();
        return boldLetters.concat(word.slice(lettersNumber));
      }    
      else return word;
    });

    string[i].innerHTML = boldWords.join(" ");

  }
}
