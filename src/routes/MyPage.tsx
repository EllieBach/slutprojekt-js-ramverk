import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "../sass/MyPage.scss";
import { selectReadBooks } from "../redux/slice/readBookSlice";

const MyPage = () => {


  const [reviewBookArray, setReviewBookArray] = useState([]);
  const fetchReadBooks = useSelector(selectReadBooks);

  useEffect(() => {
    console.log(fetchReadBooks);
    const sliceArray = fetchReadBooks.slice(1);

    setReviewBookArray(sliceArray);
  }, [fetchReadBooks]);

  return (
    <>
      <h1 id="myPageTitle">My Page</h1>
      <div className="myPageContainer">
        <div className="readBookCont">
          <p>Amount of read books: {reviewBookArray.length}</p>{" "}
        
          <div className="BooksRead">
            <h2 id="read-book-title">📕Read Books📕</h2>
            {reviewBookArray && reviewBookArray.map((item,index)=>(
              <>
              <h4 key={index}>{item.title}</h4>
              <p key={index}>{item.rating} out of 5🌟</p>
              <p key={index}>{item.amountPages} pages read</p>
              </>
            )
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default MyPage;
