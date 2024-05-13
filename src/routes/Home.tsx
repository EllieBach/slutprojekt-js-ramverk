import React from "react";
import "../sass/Home.scss";

const Home = () => {
  return (
    <>
      <div className="line">
        <span></span>
        <h1 id="welcome-text">Welcome!</h1>
      </div>
      <div className="homeContainer">
        <section>

          <span>🪵🐻🧺☕️</span>
        <p className="homeText">
          
          Welcome to Cozy Cage Library Search, your gateway to a world of
          knowledge and adventure! Whether you're searching for your next
          favorite book, exploring new authors, or diving into research, our
          library search tool is here to help. With our user-friendly interface
          and extensive collection of books, articles, and resources, finding
          what you need has never been easier. 
        </p>
        <span>📕๋࣭⭑જ⁀➴</span>
        <p className="homeText">Simply enter your search query,
          select your preferred search type, and embark on a journey through the
          vast realms of literature. Discover hidden gems, uncover fascinating
          insights, and enrich your mind with the power of knowledge. Cozy up in
          your favorite reading nook, grab a cup of tea, and let your curiosity
          guide you through the virtual aisles of our digital library. Start
          your exploration today with Cozy Cage Library Search, where every
          search opens a door to endless possibilities. </p>
          </section>
          <span>🪵🐻🧺☕️</span>
      </div>
    </>
  );
};

export default Home;
