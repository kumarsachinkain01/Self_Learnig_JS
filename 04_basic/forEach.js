// forEach;

// const codding =["JavaScript","Ruby", "Java", "Python","TypeScript", "C++"]

// codding.forEach((language, index) => {
//     console.log(`${index+1}. ${language}`)
// })

// array of objects

const codding = [
    {
        name: "Python",
        year: 1991,
      author: "Guido van Rossum"
    },
    {
        name: "JavaScript",
        year: 1995,
        author: "Brendan Eich"
    },
    {
        name: "Java",
        year: 1995,
      author: "James Gosling"
    },
    {
        name: "Ruby",
        year: 1995,
        author: "Yukihiro Matsumoto"
    },
    {
        name: "TypeScript",
        year: 2012,
        author: "Daniel Arts"
    }, 
]

codding.forEach((item)=>{
  console.log(`Name :- ${item.name} , Year : ${item.year} , Author : ${item.author}`);
})