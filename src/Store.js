class Store {
  reviewList = [
    {review: "This is a nice article", stars: 2},
    {review: "A lovely review", stars: 4},
  ];

  addReview(e) {
    this.reviewList.push(e);
  }

  get reviewCount() {
    return this.reviewList.length;
  }

  get averageScore() {
    let avr = 0;
    this.reviewList.map(e => avr += e.stars);
    return Math.round(avr / this.reviewList.length * 100) / 100;
  }
}

export default Store;
