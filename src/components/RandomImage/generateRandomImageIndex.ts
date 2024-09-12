const generateRandomImageIndex = (maxItems: number): number => {  
  if (maxItems === 1) return 0; 
  return Math.floor(Math.random() * maxItems);
}

export {generateRandomImageIndex}