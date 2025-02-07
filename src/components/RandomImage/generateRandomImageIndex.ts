const shuffleArray = (collection: string[]): string[] => {
  if (!collection) {
    return [];
  }

  const tempArr:string[] = [];
  
  collection.forEach((_, index) => {
    const collectionContains = collection.length;
    let randomNumber = generateRandomNumber(collectionContains);
 
    while(tempArr.includes(collection[randomNumber]) && index !== randomNumber) {
      randomNumber = generateRandomNumber(collectionContains);
    }

    tempArr.push(collection[randomNumber]);
    return collection[randomNumber];
  });

  return tempArr;
}

const generateRandomNumber = (maxItems: number) => Math.floor(Math.random() * maxItems);

export {shuffleArray, generateRandomNumber}