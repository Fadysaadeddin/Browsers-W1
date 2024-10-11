const flowers = [
  { name: 'tulip', color: 'red' },
  { name: 'dandelion', color: 'yellow' },
  { name: 'rose', color: 'red' },
  { name: 'daisy', color: 'white' },
  { name: 'lily', color: 'white' },
];



const upperCaseFlower = flowers.map(flower => flower.name.charAt(0).toUpperCase() + flower.name.slice(1))
const filterFlowers = flowers.filter(flower => flower.name.length === 4)
const totalColorNumber = flowers.reduce((total , flower)=>{
  if(total[flower.color]){
    total[flower.color]++
  }else{
    total[flower.color] = 1
  }
  return total
},{}) 
const fiveLetterFlower = flowers
.filter(flower => flower.name.length === 5 )
.every(flower => flower.color === 'red')


console.log(fiveLetterFlower)

// Exercise 1
// use `map` to make the first letter of al flowers a capital.
// so 'tulip' becomes 'Tulip' etc.

// Exercise 2
// use `filter` to get only the flowers with a name of 4 characters


// Exercise 3
// use `reduce` to create an object that contains
// the total number of flowers for each color

// Exercise 4 (bonus)
// use `some` or `every` in combination with another array method
// to find out if all flowers with five letters are red
