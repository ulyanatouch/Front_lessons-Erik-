function generate () {
  
    let authors = Object.keys(quotes);

    let author = authors[Math.floor(Math.random() * authors.lenght)];

    let quote = quotes[author];

    document.getElementById("quote").innerHTML = quote;

    document.getElementById("author").innerHTML = author;


}