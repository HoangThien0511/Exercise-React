import React, { useState } from 'react';
import { Card, CardTitle, CardImg, CardImgOverlay, CardBody } from 'reactstrap';
function RenderDish({ dish }) {
    if (dish != null) {
      return (
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            <img src={dish.image} alt={dish.name} className="img-fluid" />
          </div>
          <div className="col-12 col-md-5 m-1">
            <h4>{dish.name}</h4>
            <p>{dish.description}</p>
          </div>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
  
  function RenderComments({ comments }) {
    if (comments != null) {
      const commentItems = comments.map((comment) => (
        <li key={comment.id}>
          <p style={{ color: 'orange' }}>{comment.comment}</p>
          <p style={{ color: 'black' }}>
            -- {comment.author},{' '}
            {new Intl.DateTimeFormat('en-US', {
              year: 'numeric',
              month: 'long',
              day: '2-digit'
            }).format(new Date(comment.date))}
          </p>
        </li>
      ));
  
      return (
        <div>
          <h4>Comments</h4>
          <ul className="list-unstyled">{commentItems}</ul>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
  
  
  const DishDetail = ({ dish }) => {
    if (dish != null) {
      return (
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6">
              <RenderDish dish={dish} />
            </div>
            <div className="col-12 col-md-6">
              <RenderComments comments={dish.comments} />
            </div>
          </div>
        </div>
      );
    } else {
      return <div></div>;
    }
  };
  
  export default DishDetail;