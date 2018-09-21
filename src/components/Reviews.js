import React from 'react';
import {observer} from 'mobx-react';
import StarRatingComponent from 'react-star-rating-component';

function Review({data}) {
  return (
    <li className="list-group-item">
      <div className="float-left">{data.review}</div>
      <div className="float-right">
        <StarRatingComponent name="reviewRate" starCount={data.stars}/>
      </div>
    </li>
  )
}

function Reviews({store}) {
  return (
    <div className="reviewsWrapper">
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <i className="fa fa-comments"/> Reviews
            </div>
            <ul className="list-group list-group-flush">
              {store.reviewList.map((e, i) =>
                <Review
                  key={i}
                  data={e}
                />
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default observer(Reviews);
