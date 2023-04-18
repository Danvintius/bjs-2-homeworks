class PrintEditionItem {
  constructor(name,releaseDate,pagesCount,state,type) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;
  }

  fix() {
    this.state = this.state * 1.5;
  }

  set state(stateNumber) {
    if (stateNumber < 0) {
      this._state = 0;
  }
    else if (stateNumber > 100) {
      this._state = 100;
  } else {
    this._state = stateNumber;
    }
  }
  
  get state() {
    return this._state;
}  
}

class Magazine extends PrintEditionItem {
  type = "magazine";
}

class Book extends PrintEditionItem {
  constructor(author,name,releaseDate,pagesCount,state,type) {
    super(name,releaseDate,pagesCount,state,type);
    this.author = author;
    this.type = "book";
}
}

class NovelBook extends Book {
  type = "novel";
}

class FantasticBook extends Book {
  type = "fantastic";
}

class DetectiveBook extends Book {
  type = "detective";
}

class Library {
  constructor(name, books) {
    this.name = name;
    this.books = [];
  }

   addBook(book) {
    if (book.state > 30) {
      this.books.push(book);
    }
  }

  findBookBy(type, value) {
    const book = this.books.find(book => book[type] === value);
      if (book) {
        return book;
      } else {
        return null;
      }
  }

  giveBookByName(bookName) {
    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i].name == bookName) {
        this.books.delete(this.books[i]);
        return this.books[i].name;
      } else {
        return null;
      }
    }
  }
}
