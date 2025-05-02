import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import TitleAreaCenter from "../components/TitleAreaCenter";
import "./MarketUpdates.css";
import InstantAccount from "../components/InstantAccount";

function MarketUpdates() {
  const [tweets, setTweets] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state
  const breadcrumbPaths = [
    { name: "Home", href: "/" },
    { name: "News", href: "" },
    { name: "Market Updates" },
  ];

  useEffect(() => {
    // Fetch latest tweets
    const fetchTweets = async () => {
      try {
        const response = await fetch("/latest-tweets.json");
        const data = await response.json();

        // Sort tweets by created_at in descending order (newest first)
        const sortedTweets = data.sort(
          (a, b) => new Date(b.created_at) - new Date(a.created_at)
        );

        setTweets(sortedTweets); // Set the sorted tweets
      } catch (err) {
        console.error("Error fetching tweets:", err);
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };

    fetchTweets();
  }, []);

  useEffect(() => {
    if (!document.getElementById("tradingview-widget-script")) {
      const script = document.createElement("script");
      script.id = "tradingview-widget-script";
      script.src =
        "https://s3.tradingview.com/external-embedding/embed-widget-events.js";
      script.async = true;
      script.innerHTML = JSON.stringify({
        width: "100%",
        height: "100%",
        colorTheme: "dark",
        isTransparent: false,
        // colorTheme: "light",
        // isTransparent: false,
        locale: "en",
        importanceFilter: "-1,0,1",
        countryFilter:
          "ar,au,br,ca,cn,fr,de,in,id,it,jp,kr,mx,ru,sa,za,tr,gb,us,eu",
      });
      document.getElementById("tradingview-widget").appendChild(script);
    }

    // Cleanup function to remove script when component unmounts
    return () => {
      const existingScript = document.getElementById(
        "tradingview-widget-script"
      );
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  const getUserData = (tweet) => {
    // Determine which user the tweet belongs to and return the corresponding data
    if (tweet.user_id === "381696140") {
      // financialjuice
      return {
        username: "@financialjuice",
        logo: "/images/icons/fj.png",
      };
    } else if (tweet.user_id === "108617488") {
      // newsinvesting
      return {
        username: "@newsinvesting",
        logo: "/images/icons/ni.png",
      };
    }
    return { username: "", logo: "" };
  };

  // Helper function to calculate time ago
  const timeAgo = (date) => {
    const now = new Date();
    const seconds = Math.floor((now - new Date(date)) / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (seconds < 60) return `${seconds} seconds ago`;
    if (minutes < 60) return `${minutes} minutes ago`;
    if (hours < 24) return `${hours} hours ago`;
    return `${days} days ago`;
  };

  return (
    <div className="bg-[#030B20]">
      <Header />
      <TitleAreaCenter
        title="Market Updates"
        description="Latest updates and news"
        breadcrumbPaths={breadcrumbPaths}
      />

      {/* Economic Calendar Section */}
      <section className="mt-6">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-white text-center mb-12 text-2xl lg:text-4xl font-semibold">
            Economic Calendar
          </h2>
          <div className="tradingview-widget-container">
            <div id="tradingview-widget" />
            <div className="tradingview-widget-copyright">
              <a
                href="https://www.tradingview.com/"
                rel="noopener nofollow"
                target="_blank"
              >
                <span className="text-white">
                  Track all markets on TradingView
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Twitter Feed Section */}
      <section className="mt-24">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-white text-center mb-12 text-2xl lg:text-4xl font-semibold">
            Latest News
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {loading ? (
              <p className="text-white">Loading tweets...</p>
            ) : tweets.length > 0 ? (
              tweets.map((tweet, index) => {
                const { username, logo } = getUserData(tweet);
                return (
                  <div
                    key={index}
                    className="border bg-[#fff]/0 text-white border-[#22A4FF] rounded-lg cursor-pointer transform transition-transform duration-200 hover:scale-105"
                    onClick={() =>
                      window.open(
                        `https://twitter.com/${username.replace(
                          "@",
                          ""
                        )}/status/${tweet.id}`,
                        "_blank"
                      )
                    }
                  >
                    <div className="flex items-center p-3 border-b border-b-[#22A4FF]">
                      <img
                        src={logo}
                        alt="Logo"
                        className="w-8 h-8 rounded-full mr-3"
                      />
                      <div className="flex flex-col">
                        <span className="font-bold">{username}</span>
                        <span className=" text-sm">
                          {timeAgo(tweet.created_at)}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-[#CDE6FF] text-sm ">{tweet.text}</p>
                    </div>
                  </div>
                );
              })
            ) : (
              <p className="text-white">No tweets found</p>
            )}
          </div>
        </div>
      </section>

      {/* Market Analysis Section */}
      <section className="mt-24 pb-8">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-white text-center mb-12 text-2xl lg:text-4xl font-semibold">
            Market Analysis
          </h2>
          <div className="relative w-full pb-[56.25%]">
            <iframe
              src="https://www.youtube.com/embed/CFPIPoM8KB8"
              title="Market Analysis"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full"
            ></iframe>
          </div>
        </div>
      </section>

      <InstantAccount />
    </div>
  );
  // return (
  //   <>
  //     <Header mode={"light"} />
  //     <TitleAreaCenter
  //       title="Market Updates"
  //       description="Latest updates and news"
  //       breadcrumbPaths={breadcrumbPaths}
  //     />

  //     <section className="economic-calendar">
  //       <div className="container">
  //         <div className="row">
  //           <div className="col-md-12">
  //             <h2>Economic Calendar</h2>
  //             <div className="tradingview-widget-container">
  //               <div id="tradingview-widget" />
  //               <div className="tradingview-widget-copyright">
  //                 <a
  //                   href="https://www.tradingview.com/"
  //                   rel="noopener nofollow"
  //                   target="_blank"
  //                 >
  //                   <span className="blue-text">Track all markets on TradingView</span>
  //                 </a>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </section>

  //     <section className="twitter-feed">
  //       <div className="container">
  //         <h2>Latest News</h2>
  //         <div className="grid">
  //           {loading ? (
  //             <p>Loading tweets...</p>
  //           ) : tweets.length > 0 ? (
  //             tweets.map((tweet, index) => {
  //               const { username, logo } = getUserData(tweet); // Get user data for each tweet
  //               return (
  //                 <div
  //                   className="card"
  //                   key={index}
  //                   onClick={() =>
  //                     window.open(
  //                       `https://twitter.com/${username.replace('@', '')}/status/${tweet.id}`,
  //                       "_blank"
  //                     )
  //                   }
  //                 >
  //                   <div className="card-header">
  //                     <img src={logo} alt="Logo" className="logo" />
  //                     <div className="header-info">
  //                       <span className="channel-name">{username}</span>
  //                       <span className="date">
  //                         {timeAgo(tweet.created_at)} {/* Display time ago */}
  //                       </span>
  //                     </div>
  //                   </div>
  //                   <div className="card-body">
  //                     <p>{tweet.text}</p>
  //                   </div>
  //                 </div>
  //               );
  //             })
  //           ) : (
  //             <p>No tweets found</p>
  //           )}
  //         </div>
  //       </div>
  //     </section>
  //     <section className="market-analysis">
  //       <div className="container">
  //         <h2>Market Analysis</h2>
  //         <div className="video-container">
  //           <iframe

  //             src="https://www.youtube.com/embed/CFPIPoM8KB8"
  //             title="Market Analysis"
  //             frameBorder="0"
  //             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  //             allowFullScreen
  //           ></iframe>
  //         </div>
  //       </div>
  //     </section>
  //   </>
  // );
}

export default MarketUpdates;
