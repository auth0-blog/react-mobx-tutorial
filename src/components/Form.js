import React, {Component} from 'react';

export default class Form extends Component {

  submitReview = (e) => {
    e.preventDefault();
    const review = this.review.value;
    const stars = Number(this.stars.value);
    this.props.store.addReview({review, stars})
  };

  render() {
    return (
      <div className="formSection">
        <div className="form-group">
          <p>Submit a Review</p>
        </div>
        <form onSubmit={this.submitReview}>
          <div className="row">
            <div className="col-md-4">
              <div className="form-group">
                <input type="text" name="review" ref={node => {
                  this.review = node;
                }} id="review" placeholder="Write a review" className="form-control"/>
              </div>
            </div>

            <div className="col-md-4">
              <div className="form-group">
                <select name="stars" id="stars" className="form-control" ref={node => {
                  this.stars = node;
                }}>
                  <option value="1">1 Star</option>
                  <option value="2">2 Star</option>
                  <option value="3">3 Star</option>
                  <option value="4">4 Star</option>
                  <option value="5">5 Star</option>
                </select>
              </div>
            </div>

            <div className="col-md-4">
              <div className="form-group">
                <button className="btn btn-success" type="submit">SUBMIT REVIEW</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    )
  }
}
