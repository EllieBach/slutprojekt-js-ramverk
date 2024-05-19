import React, { useState } from 'react';
import "../sass/Rating.scss";
import { useDispatch } from 'react-redux';
import { addReadBook } from '../redux/slice/readBookSlice';
import { Types } from '../types/types'; 

interface TitleReviewProps {
  value: Types.Doc;
}

const Review = ({ value }: TitleReviewProps) => {
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(1);
  const [amountReadPages, setAmountReadPages] = useState(0);
  const dispatch = useDispatch();

  const handleAmountPages = (e: React.ChangeEvent<HTMLInputElement>) => {
    const pages = parseInt(e.target.value);
   
    if (!isNaN(pages)) {
      setAmountReadPages(pages);
    } else {
      setAmountReadPages(0); 
    }
  }

  const handleRating = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRating(parseInt(e.target.value));
  };

  const handleSubmit = () => {
    if (amountReadPages !== 0) {
      console.log("AAAAAAAAAAAA")
      dispatch(addReadBook({ title: value.title, review:review, rating:rating, amountPages:amountReadPages}));
    }
  }

  const handleReview = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReview(e.target.value);
  };

  return (
    <>
      <div className="review">
        <div className="pagesRead">
          
          <p>
          <input size="4"type="text" onChange={handleAmountPages} value={amountReadPages} /> {value.number_of_pages_median && ` out of ${value.number_of_pages_median}`}</p>
        </div>
        <div className="starRating rate">
          <input type="radio" id="star5" name="rate" value="5" onChange={handleRating} /> 
          <label htmlFor="star5" title="text">5 stars</label>
          <input type="radio" id="star4" name="rate" value="4" onChange={handleRating} />
          <label htmlFor="star4" title="text">4 stars</label>
          <input type="radio" id="star3" name="rate" value="3" onChange={handleRating} />
          <label htmlFor="star3" title="text">3 stars</label>
          <input type="radio" id="star2" name="rate" value="2" onChange={handleRating} /> 
          <label htmlFor="star2" title="text">2 stars</label>
          <input type="radio" id="star1" name="rate" value="1" onChange={handleRating} />
          <label htmlFor="star1" title="text">1 star</label>
        </div>
        <label id='reviewlabel'>Leave a review!</label>
        <textarea onChange={handleReview} id="freeform" name="freeform" rows="4" cols="50" placeholder='Type here...'></textarea>
        <button id='submitBtn' onClick={handleSubmit}>Submit</button>
      </div>
    </>
  );
}

export default Review;
