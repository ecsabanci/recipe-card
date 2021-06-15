import React from "react";
import "./Card.css";

import heartOutline from "../../assets/heart-outline.png"; // Tell webpack this JS file uses this image
import heartFill from "../../assets/heart-fill.png"; // Tell webpack this JS file uses this image

export default function Card({item,author,likeCount,isLiked,foodImg,setIsLiked,setLikeCount}) {
  return (
    <div className="card">
      <div className="card-header">
        <div className="profile">
          <span className="letter">{author[0]}</span>
        </div>
        <div className="card-title-group">
          <h5 className="card-title">{item.title}</h5>
          <div className="card-date">{item.date}</div>
        </div>
      </div>
      <img className="card-image" src={foodImg} alt="Logo" />
      <div className="card-text">{item.description}</div>
      <div className="card-like-bar"  onClick={() => [setIsLiked(!isLiked), !isLiked ? setLikeCount(likeCount+1) : setLikeCount(likeCount-1)]} >
        {isLiked ? (
          <img className="card-like-icon filled" src={heartFill} alt="Logo" />
        ) : (
          <img className="card-like-icon" src={heartOutline} alt="Logo" />
        )}
        <div className="like-text">
          <b>{likeCount}</b> kişi bu tarifi beğendi.
        </div>
      </div>
    </div>
  );
}
