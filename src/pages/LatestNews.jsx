import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import TitleAreaCenter from "../components/TitleAreaCenter";
import "./LatestNews.css"; // Import your CSS file

function LatestNews() {
  const [tweets, setTweets] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state
  const breadcrumbPaths = [
    { name: "Home", href: "/" },
    { name: "News", href: "" },
    { name: "Latest News" },
  ];

  useEffect(() => {
    const fetchTweets = async () => {
      try {
        const response = await fetch("/latest-tweets.json");
        const data = await response.json();
        setTweets(data);
      } catch (err) {
        console.error("Error fetching tweets:", err);
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };

    fetchTweets();
  }, []);

  return (
    <>
      <Header mode={"light"} />
      <TitleAreaCenter
        title="Latest News"
        description="Latest updates and news"
        breadcrumbPaths={breadcrumbPaths}
      />
      <section className="twitter-feed">
        <div className="container">
          <div className="grid">
            {loading ? ( // Check loading state
              <p>Loading tweets...</p> // Show loading message
            ) : tweets.length > 0 ? (
              tweets.map((tweet, index) => (
                <div
                  className="card"
                  key={index}
                  onClick={() =>
                    window.open(
                      `https://twitter.com/financialjuice/status/${tweet.id}`,
                      "_blank"
                    )
                  }
                >
                  <div className="card-header">
                    <img
                      src="/images/icons/fj.png"
                      alt="Logo"
                      className="logo"
                    />
                    <div className="header-info">
                      <span className="channel-name">@financialjuice</span>
                      <span className="date">
                        {new Date(tweet.created_at).toLocaleDateString(
                          "en-US",
                          {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                          }
                        )}
                      </span>
                    </div>
                  </div>
                  <div className="card-body">
                    <p>{tweet.text}</p>
                  </div>
                </div>
              ))
            ) : (
              <p>No tweets found</p>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default LatestNews;
