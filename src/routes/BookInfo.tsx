import React, { useEffect, useState } from "react";
import { Doc } from "../types/types";
import "../sass/BookInfo.scss";
import "../sass/Rating.scss";
import { useLocation } from "react-router-dom";
import Review from "../components/Review";

const BookInfo = () => {
  const [book, setBook] = useState<Doc | undefined>(undefined);
  const [isChecked, setIsChecked] = useState(false);

  const { state } = useLocation();

  useEffect(() => {
    if (state && state.value) {
      setBook(state.value);
    }
  }, [state]);

  const handleCheckboxChange = () => {
    if (isChecked) {
      setIsChecked(false);
    } else if (!isChecked) {
      setIsChecked(true);
    }
  };

  return (
    <>
      <div className="page-cont">
        <div className="bookInfoContainer">
          
          {book && (
            <>
              <img
                  className="bookImg-info"
                  src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
                  alt={`${book.title}`}
                />
             
              <div className="basic">
                <h2>{book.title}</h2>
                <p>by: {book.author_name} </p>
              </div>
             
              <div className="infoBox">
                <p>
                  <b>Published</b>
                </p>
                <p>{book.first_publish_year}</p>
                <p><b>Pages</b></p>
                <p>{book.number_of_pages_median}</p>
              </div>

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
          <span></span>
          <div className="checkbox">
            <label className="container">
              Read book
              <input
             
                type="checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
                style={{ margin: "10px" }}
                
              />
              <span className="checkmark"></span>
            </label>
            {isChecked && <Review value={book} />}
            <span></span>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookInfo;
