import React, { useEffect, useState } from "react";
import { Doc } from "../types/types";
import "../sass/BookInfo.scss";
import "../sass/Rating.scss";
import { useLocation } from "react-router-dom";

const BookInfo = () => {
  const [book, setBook] = useState<Doc | undefined>(undefined);
  const { state } = useLocation();

  useEffect(() => {
    console.log(state);
    setBook(state.value);
  }, [state]);

  return (
    <>
    <div className="page-cont">
      <div className="bookInfoContainer">
          {book && (
            <>
              <div className="basic">
                <h2>{book.title}</h2>
                <p>by: {book.author_name} </p>
              </div>
              
              <img
                className="bookImg-info"
                src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
                alt={`${book.title}`}
              />
              <div className="leContainer">
              <div className="rate">
                <input type="radio" id="star5" name="rate" value="5" />
                <label htmlFor="star5" title="text">5stars</label>
                <input type="radio" id="star4" name="rate" value="4" />
                <label htmlFor="star4" title="text">4stars</label>
                <input type="radio" id="star3" name="rate" value="3" />
                <label htmlFor="star3" title="text">3stars</label>
                <input type="radio" id="star2" name="rate" value="2" />
                <label htmlFor="star2" title="text">2stars</label>
                <input type="radio" id="star1" name="rate" value="1" />
                <label htmlFor="star1" title="text">1star</label>
              </div>
              <div className="checkbox">
                <label className="container">
                  Read book
                  <input type="checkbox"  />
                  <span className="checkmark"></span>
                </label>
              </div>
              </div>
              <div className="infoBox">
                <p><b>Published</b></p>
                <p>{book.first_publish_year}</p>
                <p><b>Genre</b></p>
                {/* {book.subject_facet && book.subject_facet.map((item, index)=> (<p key={index}>{ item}</p>))}
                */}
              </div>
              {book.number_of_pages_median && Array.isArray(book.number_of_pages_median) && book.number_of_pages_median.map((item, index) => (
  <p key={index}>{item}</p>
))}
              <div className="textBox">
                {book.first_sentence &&
                  book.first_sentence.map((item, index) => (
                    <p className="text" key={index}>
                      {item}
                    </p>
                  ))}
              </div>
            </>
          )}
        </div>
        </div>
    </>
  );
};

export default BookInfo;
