const filterDipthongs = (words) => {
    // filters out all the 4-letter words starting with a consonant, 
    // ending with a consonant with a dipthong in the middle
    // a dipthong in this context is considered any two consective vowels
};


// const createNextLevel = (currentLevel) => {
//     if (currentLevel.length === 1) return [1, 2, 1];
//     return currentLevel.reduce((level, num, i) => {
//         if (i === currentLevel.length - 1 || i === 0) return [1];
//         else {
//             return [...level]
//         }
//         return acc;
//     }, 0)
// }
// const getPascalTriangle = (levels) => {
//     const createTriangle = (levels, triangle = [1], currentLevel = 1) => {
//         if (levels === currentLevel) return triangle;
//         else {
//             const newTriangle = [...triangle, nextLevel(triangle)];
//             return createTriangle(levels, newTriangle, ++currentLevel);
//         }
//     }
//     return createTriangle(levels);
// };