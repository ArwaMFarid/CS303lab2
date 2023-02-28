function AsciiArt(width, height, test, alphabet) {
  console.log(width, height, test, alphabet);
  const array =[] ;
  for( let i = 0 ; i<alphabet.length ; i++){
    array[i]= alphabet[i].substring(16,20);
  }
return array.join("\n");
}

module.exports = AsciiArt;
