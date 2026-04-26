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

function getTheTitles(input){
    return input.map(item => item.title);
}

console.log(getTheTitles(books))