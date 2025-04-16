const getTheTitles = function (arr) {
  const titleArr = arr.map((book) => book.title);
  return titleArr;
};

const books = [
  {
    title: "Book",
    author: "Name",
  },
  {
    title: "Book2",
    author: "Name2",
  },
  {
    title: "Harry Potter",
    author: "Name2",
  },
  {
    title: "Dune",
    author: "Name2",
  },
];

console.log(getTheTitles(books));
/*


```javascript
const books = [
  {
    title: 'Book',
    author: 'Name'
  },
  {
    title: 'Book2',
    author: 'Name2'
  }
]
```

Your job is to write a function that takes the array and returns an array of titles:

```javascript
getTheTitles(books) // ['Book','Book2']
```

*/

// Do not edit below this line
module.exports = getTheTitles;
