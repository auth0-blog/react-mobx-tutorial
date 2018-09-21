import React from 'react';
import {observer} from 'mobx-react'

function Dashboard({store}) {
  return (
    <div className="dashboardSection">
      <div className="row">
        <div className="col-md-6">
          <div className="card text-white bg-primary mb-6">
            <div className="card-body">
              <div className="row">
                <div className="col-md-6">
                  <i className="fa fa-comments fa-5x" />
                </div>
                <div className="col-md-6 text-right">
                  <p id="reviewCount">{store.reviewCount}</p>
                  <p className="announcement-text">Reviews</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card text-white bg-success mb-6">
            <div className="card-body">
              <div className="row">
                <div className="col-md-6">
                  <i className="fa fa-star fa-5x" />
                </div>
                <div className="col-md-6 text-right">
                  <p id="averageScores">{store.averageScore}</p>
                  <p className="announcement-text">Average Scores</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default observer(Dashboard);
