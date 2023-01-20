import React from "react";
import Footer from "./Footer";

const HomePage = () => {
  const [quote, setQuote] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const getQuote = () => {
    setQuote([]);
    setLoading(true);
    fetch("https://type.fit/api/quotes")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        setQuote(data[Math.floor(Math.random() * data.length)].text);
        setLoading(false);
        console.log(data);
      });
  };

  return loading ? (
    <h1 style={{ textAlign: "center", color: "gray" }}>Loading...</h1>
  ) : (
    <div>
      <header>
        <h1 style={{ textAlign: "center", color: "rgb(39, 52, 82)" }}>
          Inspirational Quotes
        </h1>
        <p style={{ textAlign: "center" }}>
          Here are some inspirational quotes to help you get through the day.
        </p>
      </header>
      <main className="main" >
        <div className="mainContent">
          <div className="quote">
            <p>{quote}</p>
          </div>
          <div className="btn">
            <button onClick={() => getQuote()} className="button">
              Get quote
            </button>
          </div>
        </div>
      </main>
      <section className="sectionContent">
        <p>Subscribe to get a daily inspirational quote</p>
        <form className="subscribe">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email address"
          />
          <button type="submit">Subscribe</button>
        </form>
      </section>

      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
