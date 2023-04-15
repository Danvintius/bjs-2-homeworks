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

  setState(stateNumber) {
    if (stateNumber < 0) {
      this.state = 0;
  }
    else if (stateNumber > 100) {
      this.state = 100;
  } else {
    this.state = stateNumber;
    }
}

  getState() {
    return this.state;
}
}

class Magazine extends PrintEditionItem {
  type = "magazine";
}

class Book extends PrintEditionItem {
  constructor(author,releaseDate,pagesCount,state,type) {
    super(releaseDate,pagesCount,state,type);
    this.author = author;
    type = "book";
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
