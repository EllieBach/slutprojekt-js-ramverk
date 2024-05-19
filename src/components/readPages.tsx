import React, { useState, useEffect } from 'react';
import * as Types from "../types/types";
import { useDispatch, useSelector } from "react-redux";
import { updatePagesRead } from "../redux/slice/favoriteSlice"
import { RootState } from "../redux/store/rootReducer"; // Adjust import path as needed

interface ReadPagesProps {
    book: Types.Doc;
}

const ReadPages: React.FC<ReadPagesProps> = ({ book }) => {
    const [pagesRead, setPagesRead] = useState(0);
    const dispatch = useDispatch();
    const favorites = useSelector((state: RootState) => state.favorites.books);

    useEffect(() => {
        const favoriteBook = favorites.find(b => b.key === book.key);
        if (favoriteBook && favoriteBook.pagesRead) {
            setPagesRead(favoriteBook.pagesRead);
        }
    }, [favorites, book.key]);

    const handlePages = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(e.target.value);
        if (!isNaN(value)) {
            setPagesRead(value);
            dispatch(updatePagesRead({ bookId: book.key, pagesRead: value }));
        } else {
            setPagesRead(0);
            dispatch(updatePagesRead({ bookId: book.key, pagesRead: 0 }));
        }
    };

    return (
        <>
            <div className="pagesRead">
                <p>
                    <input
                        type="number"
                        onChange={handlePages}
                        value={pagesRead}
                        min="0"
                        max={book.number_of_pages_median}
                    />
                    out of {book.number_of_pages_median} pages read
                </p>
            </div>
        </>
    );
};

export default ReadPages;
