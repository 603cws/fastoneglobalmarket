import React, { useEffect, useState } from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaTelegramPlane,
  FaStar,
  FaRegCircle,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import PriceTicker from "./PriceTicker";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const features = [
  {
    icon: "📈",
    title: "High Returns",
    description: "Earn competitive APY on your staked assets.",
  },
  {
    icon: "🔒",
    title: "Secure Staking",
    description: "Top-notch security protocols for peace of mind.",
  },
  {
    icon: "⚡",
    title: "Instant Rewards",
    description: "No waiting—earn rewards instantly.",
  },
  {
    icon: "📊",
    title: "Real-Time Tracking",
    description: "Keep track of earnings with live analytics.",
  },
  {
    icon: "🧠",
    title: "Smart Automation",
    description: "Let AI optimize your staking strategy.",
  },
  // {
  //   icon: "🌐",
  //   title: "Global Access",
  //   description: "Stake from anywhere, anytime.",
  // },
];

const steps = [
  {
    number: "1",
    title: "Choose Your Crypto",
    description: "Select the cryptocurrency you want to stake.",
  },
  {
    number: "2",
    title: "Start Staking",
    description: "Initiate the staking process in just a few clicks.",
  },
  {
    number: "3",
    title: "Earn Rewards",
    description: "Sit back and watch your rewards grow automatically.",
  },
];

const cryptos = [
  {
    name: "Bitcoin",
    reward: "4.5%",
    image: "/icons/bitcoin.svg", // placeholder — update to real image or SVG
  },
  {
    name: "Ethereum",
    reward: "5.2%",
    image: "/icons/ethereum.svg",
  },
  {
    name: "Solana",
    reward: "6.1%",
    image: "/icons/solana.svg",
  },
  {
    name: "Cardano",
    reward: "3.8%",
    image: "/icons/cardano.svg",
  },
  {
    name: "Bitcoin2",
    reward: "4.5%",
    image: "/icons/bitcoin.svg", // placeholder — update to real image or SVG
  },
  {
    name: "Ethereum",
    reward: "5.2%",
    image: "/icons/ethereum.svg",
  },
  {
    name: "Solana",
    reward: "6.1%",
    image: "/icons/solana.svg",
  },
  {
    name: "Cardano",
    reward: "3.8%",
    image: "/icons/cardano.svg",
  },
  {
    name: "Bitcoin3",
    reward: "4.5%",
    image: "/icons/bitcoin.svg", // placeholder — update to real image or SVG
  },
  {
    name: "Ethereum",
    reward: "5.2%",
    image: "/icons/ethereum.svg",
  },
  {
    name: "Solana",
    reward: "6.1%",
    image: "/icons/solana.svg",
  },
  {
    name: "Cardano",
    reward: "3.8%",
    image: "/icons/cardano.svg",
  },
  {
    name: "Bitcoin4",
    reward: "4.5%",
    image: "/icons/bitcoin.svg", // placeholder — update to real image or SVG
  },
  {
    name: "Ethereum",
    reward: "5.2%",
    image: "/icons/ethereum.svg",
  },
  {
    name: "Solana",
    reward: "6.1%",
    image: "/icons/solana.svg",
  },
  {
    name: "Cardano",
    reward: "3.8%",
    image: "/icons/cardano.svg",
  },
  {
    name: "Bitcoin4",
    reward: "4.5%",
    image: "/icons/bitcoin.svg", // placeholder — update to real image or SVG
  },
  {
    name: "Ethereum",
    reward: "5.2%",
    image: "/icons/ethereum.svg",
  },
  {
    name: "Solana",
    reward: "6.1%",
    image: "/icons/solana.svg",
  },
  {
    name: "Cardano",
    reward: "3.8%",
    image: "/icons/cardano.svg",
  },
];

const testimonials = [
  {
    name: "Sarah L",
    rating: 5,
    comment:
      "I started staking with FastOne and have already earned 10% in rewards. It’s so easy to use! I love how transparent and secure the platform is.",
  },
  {
    name: "John D",
    rating: 4,
    comment:
      "Great experience overall. The staking rewards are consistent and support is quick to respond.",
  },
  {
    name: "Alex K",
    rating: 5,
    comment:
      "Using FastOne for staking has been a game changer. Super easy, secure, and rewarding!",
  },
  {
    name: "Emily R",
    rating: 5,
    comment:
      "Really impressed by how intuitive and sleek the platform is. And the returns are awesome!",
  },
  {
    name: "Sarah L",
    rating: 5,
    comment:
      "I started staking with FastOne and have already earned 10% in rewards. It’s so easy to use! I love how transparent and secure the platform is.",
  },
  {
    name: "John D",
    rating: 4,
    comment:
      "Great experience overall. The staking rewards are consistent and support is quick to respond.",
  },
  {
    name: "Alex K",
    rating: 5,
    comment:
      "Using FastOne for staking has been a game changer. Super easy, secure, and rewarding!",
  },
  {
    name: "Emily R",
    rating: 5,
    comment:
      "Really impressed by how intuitive and sleek the platform is. And the returns are awesome!",
  },
];

const faqs = [
  {
    question: "What is crypto staking?",
    answer:
      "Crypto staking is the process of locking up your cryptocurrency to support a blockchain network and earning rewards in return.",
  },
  {
    question: "How secure is staking on FastOne?",
    answer:
      "FastOne uses state-of-the-art encryption and multi-layered security systems to protect your assets.",
  },
  {
    question: "When do I start earning rewards?",
    answer:
      "Rewards start accumulating as soon as you begin staking, and you can track them in your dashboard.",
  },
  {
    question: "Can I unstake anytime?",
    answer:
      "Yes, you can unstake anytime depending on the specific token’s lock period or policy.",
  },
  {
    question: "Are there any hidden fees?",
    answer:
      "No hidden fees. All applicable charges are transparently mentioned before you stake.",
  },
];

// const CRYPTOS_PER_PAGE = isMobile ? 2 : 5;

function Landing() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const cardsPerSlide = 2;
  const totalSlides = Math.ceil(testimonials.length / cardsPerSlide);
  const [active, setActive] = useState(0);
  const start = currentSlide * cardsPerSlide;
  const visibleTestimonials = testimonials.slice(start, start + cardsPerSlide);
  // const [currentPage, setCurrentPage] = useState(0);
  // const CRYPTOS_PER_PAGE = isMobile ? 2 : 5;
  // const totalPages = Math.ceil(cryptos.length / CRYPTOS_PER_PAGE);
  // const startIdx = currentPage * CRYPTOS_PER_PAGE;
  // const visibleCryptos = cryptos.slice(startIdx, startIdx + CRYPTOS_PER_PAGE);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000); // Auto-slide every 5 seconds

    return () => clearInterval(interval);
  }, [totalSlides]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="scrollbar-hidden">
      <svg width="0" height="0">
        <defs>
          <linearGradient id="icon-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#4575FF" />
            <stop offset="100%" stopColor="#92AEFF" />
          </linearGradient>
        </defs>
      </svg>

      <div className="">
        <PriceTicker />
      </div>

      {/* Header */}
      <header
        className={`fixed left-0 w-full z-50 bg-[#0b132e]/50 backdrop-blur-md text-white shadow-md transition-all duration-300 ${
          scrolled ? "top-0" : "lg:top-12"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src="./fastone-logo-text2.png" alt="FastOne" className="h-8" />
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex space-x-6 text-sm font-semibold">
            <a href="#">Trading</a>
            <a href="#">Markets</a>
            <a href="#">Platforms</a>
            <a href="#">News</a>
            <a href="#">Company</a>
            <a href="#">Partners</a>
          </nav>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className="border border-white px-4 py-1.5 rounded-md hover:bg-white hover:text-black transition">
              Log in
            </button>
            <button className="bg-white text-black px-4 py-1.5 rounded-md hover:bg-gray-200 transition">
              Create Account
            </button>
          </div>

          {/* Mobile Menu Icon */}
          <div className="lg:hidden">
            {menuOpen ? (
              <FaTimes
                className="text-2xl cursor-pointer"
                onClick={() => setMenuOpen(false)}
              />
            ) : (
              <FaBars
                className="text-2xl cursor-pointer"
                onClick={() => setMenuOpen(true)}
              />
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div
            className="lg:hidden px-6 pb-4 pt-2 bg-blue"
            style={{
              background:
                "linear-gradient(to bottom, #0b132e 0%, #1c2740 100%)", // linear-gradient(to bottom, #0b132e 0%, #1a2340 50%, #314e91 100%)
            }}
          >
            {" "}
            <nav className="flex flex-col space-y-3 text-sm font-semibold items-center">
              <a href="#">Trading</a>
              <a href="#">Markets</a>
              <a href="#">Platforms</a>
              <a href="#">News</a>
              <a href="#">Company</a>
              <a href="#">Partners</a>
            </nav>
            <div className="mt-4 flex flex-col space-y-3">
              <button className="border border-white px-4 py-2 rounded-md hover:bg-white hover:text-black transition">
                Log in
              </button>
              <button className="bg-white text-black px-4 py-2 rounded-md hover:bg-gray-200 transition">
                Create Account
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Section 1 */}
      <section
        className="relative min-h-screen bg-no-repeat bg-cover bg-center px-4 sm:px-6 text-white flex items-center py-5 pt-20 md:pt-0"
        style={{ backgroundImage: "url('/images/bg-landing1.png')" }}
      >
        <div className="max-w-7xl w-full mx-auto flex flex-col md:flex-row justify-between items-center gap-8 sm:gap-10">
          {/* Left Content */}
          <div className="space-y-4 flex-1 text-left">
            <p className="text-md sm:text-xl tracking-wide uppercase flex justify-start items-center gap-2">
              <FaRegCircle style={{ fill: "url(#icon-gradient)" }} size={14} />
              <span className="bg-gradient-to-r from-[#4575FF] to-[#92AEFF] text-transparent bg-clip-text">
                Grow your assets effortlessly!
              </span>
            </p>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug sm:leading-tight">
              <span className="whitespace-nowrap bg-gradient-to-r from-[#4575FF] to-[#92AEFF] text-transparent bg-clip-text">
                Empower Your Trade
              </span>
              <br />
              <span className="text-white">Master the Markets</span>
            </h1>

            <p className="text-gray-300 text-xl sm:text-md lg:text-lg leading-relaxed">
              Stake your cryptocurrencies and earn up to 15% APY. Secure,
              <br className="hidden sm:block" />
              transparent, and beginner-friendly.
            </p>

            {/* <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-3 sm:gap-4 pt-4"> */}
            <div className="flex gap-3 pt-4 w-full justify-center md:justify-normal">
              <button className="text-sm sm:text-base whitespace-nowrap px-3 sm:px-6 py-2 rounded-lg font-semibold bg-gradient-to-r from-[#C6D5FF] to-[#698FFF] text-black">
                Start Staking Now
              </button>
              <button className="text-sm sm:text-base whitespace-nowrap border border-blue-600 bg-gradient-to-r from-[#4575FF] to-[#92AEFF] text-transparent bg-clip-text hover:bg-blue-600 hover:text-white px-3 sm:px-6 py-2 rounded-lg font-semibold">
                Learn How It Works
              </button>
            </div>
          </div>

          {/* Right Placeholder */}
          <div className="w-45 sm:w-64 md:w-[400px] h-45 sm:h-64 md:h-[400px] bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl shadow-xl md:flex-1 mt-4 sm:mt-10 md:mt-0" />
        </div>
      </section>

      {/* Section 2 */}
      <section className="min-h-screen bg-[#0A0F2C] text-white py-20 px-6">
        <div className="max-w-7xl mx-auto grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {/* Image Block */}
          <div className="hidden sm:block bg-gray-300 h-[300px] md:h-[300px] lg:col-span-1 lg:row-span-2" />

          {/* Text Content with Heading + Paragraph */}
          <div className="lg:col-span-2">
            <div className="flex flex-col lg:flex-row items-start gap-6">
              {/* Heading */}
              <div className="flex-1">
                <h2 className="text-4xl md:text-5xl font-bold leading-snug text-white">
                  Why{" "}
                  <span className="bg-gradient-to-r from-[#4575FF] to-[#92AEFF] text-transparent bg-clip-text">
                    Stake
                  </span>
                  <br />
                  with Us
                </h2>
              </div>

              {/* Horizontal line for tablet & below */}
              {/* <div className="block lg:hidden w-full h-px my-6 bg-gradient-to-r from-[#000] via-[#92aeff] to-[#4575ff]" /> */}

              {/* Vertical line for large screen only */}
              <div className="flex items-center gap-4 sm:items-start mt-4 sm:mt-0">
                {/* Vertical Line */}
                <div
                  className="w-px h-[120px] bg-gradient-to-b"
                  style={{
                    backgroundImage: `linear-gradient(to bottom, #000 0%, #92aeff 24%, #4575ff 77%, #000 98%)`,
                  }}
                />

                {/* Paragraph */}
                <div className="flex-1">
                  <p className="text-gray-300 text-base md:text-lg">
                    Discover the advantages of staking with
                    <br /> FastOne—where security, simplicity, and
                    <br /> high rewards come together to help you
                    <br /> grow your crypto effortlessly.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Feature Cards (5 items) */}
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-[2px] rounded-xl bg-gradient-to-br from-[#4575FF] to-[#92AEFF]"
            >
              <div className="rounded-xl p-4 bg-[#0A0F2C] hover:bg-blue-900/20 transition h-full">
                <div className="text-3xl mb-2">{feature.icon}</div>
                <h4 className="text-lg font-semibold">{feature.title}</h4>
                <p className="text-sm text-gray-300">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 3 */}
      <section
        className="bg-no-repeat bg-cover bg-center py-24 px-6 text-white"
        style={{ backgroundImage: "url('/images/bg-landing3.png')" }}
      >
        <div className="max-w-7xl mx-auto space-y-20">
          {/* Staking Steps Section */}
          <div>
            <div className="text-center md:text-left mb-10 flex flex-col lg:flex-row justify-between lg:items-start gap-6 ">
              {/* Heading */}
              <div className="">
                <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold leading-snug text-start">
                  How Crypto Staking <br /> Works in
                  <span className="bg-gradient-to-r from-[#4575FF] to-[#92AEFF] text-transparent bg-clip-text">
                    {" "}
                    3 Simple Steps
                  </span>
                </h2>
              </div>

              {/* Vertical line + Paragraph in flex row */}
              <div className="flex items-start lg:items-center gap-4 ">
                {/* Vertical line */}
                <div
                  className="w-px h-24 bg-gradient-to-b"
                  style={{
                    backgroundImage: `linear-gradient(to bottom, #000 0%, #92aeff 24%, #4575ff 77%, #000 98%)`,
                  }}
                />

                {/* Paragraph */}
                <p className="text-gray-400 max-w-md text-start text-base lg:text-xl">
                  Staking your crypto has never been easier.
                  <br /> Follow these three simple steps to start
                  <br /> earning rewards today!
                </p>
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              {steps.map((step, idx) => (
                <div
                  key={idx}
                  className="rounded-xl bg-gradient-to-r from-[#4575FF] to-[#92AEFF] p-[1px]  w-auto sm:w-3/4 lg:w-auto"
                >
                  <div className="flex items-center rounded-xl bg-[#0b132e] p-6 h-full">
                    {/* Number */}
                    <div className="text-5xl font-bold text-white mr-4">
                      {step.number}
                    </div>

                    {/* Content */}
                    <div>
                      <h4 className="text-white text-lg font-semibold mb-1">
                        {step.title}
                      </h4>
                      <p className="text-gray-400 text-sm">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Favorite Crypto Section */}
          <div>
            <div className="text-center md:text-left mb-10 flex flex-col lg:flex-row justify-between items-start">
              <div className="">
                <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold leading-snug">
                  Stake Your Favorite <br />
                  <span className="bg-gradient-to-r from-[#4575FF] to-[#92AEFF] text-transparent bg-clip-text">
                    Crypto Currencies
                  </span>
                </h2>
              </div>

              {/* Vertical line + Paragraph in flex row */}
              <div className="flex items-start gap-4">
                {/* Vertical line */}
                <div
                  className="w-px h-24 bg-gradient-to-b"
                  style={{
                    backgroundImage: `linear-gradient(to bottom, #000 0%, #92aeff 24%, #4575ff 77%, #000 98%)`,
                  }}
                />

                {/* Paragraph */}
                <p className="text-gray-400 max-w-md mt-4 md:mt-0 text-start text-base lg:text-xl">
                  Choose from a wide range of trusted
                  <br /> cryptocurrencies to stake and start earning
                  <br /> rewards today.
                </p>
              </div>
            </div>

            <div className="">
              <Swiper
                modules={[Pagination, Scrollbar, Autoplay]}
                scrollbar={{ draggable: true }}
                spaceBetween={20}
                autoplay={true}
                breakpoints={{
                  0: {
                    slidesPerView: 2,
                  },
                  640: {
                    slidesPerView: 3,
                  },
                  1024: {
                    slidesPerView: 5,
                  },
                }}
              >
                {cryptos.map((crypto, idx) => (
                  <SwiperSlide key={idx}>
                    <div className="p-[2px] rounded-xl bg-gradient-to-r from-[#4575FF] to-[#92AEFF]">
                      <div className="rounded-[10px] p-6 flex flex-col items-center text-center space-y-4 bg-[#0b132e] transition">
                        <img
                          src={crypto.image}
                          alt={crypto.name}
                          className="w-12 h-12"
                        />
                        <h4 className="font-semibold">{crypto.name}</h4>
                        <p className="text-2xl font-bold bg-gradient-to-r from-[#4575FF] to-[#92AEFF] text-transparent bg-clip-text">
                          {crypto.reward}
                        </p>
                        <p className="text-sm text-gray-400">Monthly Rewards</p>
                        <button className="bg-gradient-to-r from-[#C6D5FF] to-[#698FFF] hover:opacity-90 hover:text-white text-black px-4 py-2 rounded-lg text-sm transition">
                          Stake Now
                        </button>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 */}
      <section className="bg-[#060D27] text-white py-24 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col lg:flex-row justify-between gap-6 mb-12">
            {/* Heading */}
            <div className="flex-1">
              <h2 className="text-4xl md:text-5xl font-bold leading-snug">
                What Our{" "}
                <span className="bg-gradient-to-r from-[#4575FF] to-[#92AEFF] text-transparent bg-clip-text">
                  Users Are
                  <br className="hidden md:block" /> Saying
                </span>
              </h2>
            </div>

            {/* Paragraph block - placed below on tablet & mobile */}
            <div className="flex items-center gap-4 flex-1 mt-4 lg:mt-0">
              {/* Gradient line */}
              <div
                className="w-1 h-24 lg:w-px lg:h-24 bg-gradient-to-b"
                style={{
                  backgroundImage:
                    "linear-gradient(to bottom, #000 0%, #92aeff 24%, #4575ff 77%, #000 98%)",
                }}
              />

              {/* Paragraph */}
              <p className="text-gray-400 text-md sm:text-xl max-w-md">
                Join thousands of satisfied users who are growing their crypto
                portfolios with EPTY. Hear what they have to say about their
                staking experience!
              </p>
            </div>
          </div>

          {/* Testimonials Wrapper */}
          <div className="bg-[#111827] p-6 rounded-2xl transition-all duration-500">
            {/* Mobile: Show only currentSlide */}
            <div className="flex flex-col gap-6 md:hidden">
              <div className="w-full bg-gradient-to-r from-[#4575FF] to-[#92AEFF] p-[1px] rounded-xl">
                <div className="rounded-xl p-6 flex flex-col sm:flex-row items-start gap-4 bg-[#111827] h-full">
                  {/* Image */}
                  <div className="w-16 h-16 bg-gray-300 rounded-sm shrink-0" />
                  {/* Content */}
                  {testimonials[currentSlide] && (
                    <div>
                      <h4 className="font-semibold text-lg">
                        {testimonials[currentSlide].name}
                      </h4>
                      <div className="flex text-blue-400 mb-2">
                        {[...Array(testimonials[currentSlide].rating)].map(
                          (_, i) => (
                            <FaStar key={i} size={16} />
                          )
                        )}
                      </div>
                      <p className="text-sm text-gray-300">
                        {testimonials[currentSlide].comment}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Tablet and above: Show all */}
            <div className="hidden md:flex flex-col lg:flex-row gap-6">
              {visibleTestimonials.map((user, idx) => (
                <div
                  key={idx}
                  className="w-full bg-gradient-to-r from-[#4575FF] to-[#92AEFF] p-[1px] rounded-xl"
                >
                  <div className="rounded-xl p-6 flex flex-col sm:flex-row items-start gap-4 bg-[#111827] h-full">
                    {/* Image */}
                    <div className="w-16 h-16 bg-gray-300 rounded-sm shrink-0" />
                    {/* Content */}
                    <div>
                      <h4 className="font-semibold text-lg">{user.name}</h4>
                      <div className="flex text-blue-400 mb-2">
                        {[...Array(user.rating)].map((_, i) => (
                          <FaStar key={i} size={16} />
                        ))}
                      </div>
                      <p className="text-sm text-gray-300">{user.comment}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination Dots only on mobile */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: totalSlides }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  idx === currentSlide
                    ? "bg-gradient-to-r from-[#4575FF] to-[#92AEFF] scale-110"
                    : "bg-gray-500 hover:bg-blue-400"
                }`}
              ></button>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5 */}
      <section
        className="lg:min-h-screen bg-no-repeat bg-cover bg-center text-white px-4 py-10  lg:py-20"
        style={{ backgroundImage: "url('/images/bg-landing5.png')" }}
      >
        <div className="max-w-7xl mx-auto">
          {/* FAQ container */}
          <div className="bg-[#111827] rounded-2xl p-10 hidden   sm:flex flex-col lg:flex-row gap-6 mb-10 lg:mb-28">
            {/* Left side - FAQ intro */}
            <div className="flex-1 flex flex-col ju items-center  lg:justify-normal ">
              <h2 className="text-4xl lg:text-5xl font-semibold leading-tight mb-4">
                Frequently Asked <br />
                <span className="bg-gradient-to-r from-[#4575FF] to-[#92AEFF] text-transparent bg-clip-text">
                  Questions
                </span>
              </h2>

              {/* Vertical line + Paragraph */}
              <div className="flex justify-center items-center lg:items-start gap-4">
                <div
                  className="w-0.5 h-24"
                  style={{
                    backgroundImage: `linear-gradient(to bottom, #000 0%, #92aeff 24%, #4575ff 77%, #000 98%)`,
                  }}
                />
                <p className="text-[#fff] leading-relaxed text-sm lg:text-base">
                  Join thousands of satisfied users who are
                  <br /> growing their crypto portfolios with FastOne.
                  <br /> Hear what they have to say about their
                  <br /> staking experience!
                </p>
              </div>
            </div>

            {/* Right side - Accordion */}
            <div className="flex-1 space-y-4">
              {faqs.map((item, index) => (
                <div
                  key={index}
                  className={`bg-gradient-to-r from-[#4575FF] to-[#92AEFF] p-[1px] rounded-md transition-all duration-300`}
                >
                  <div
                    className="rounded-md px-6 py-4 transition-all duration-300 cursor-pointer bg-[#1f2937]"
                    onClick={() => setActive(index === active ? null : index)}
                  >
                    <div className="flex justify-between items-center">
                      <h4 className="text-white text-sm lg:text-base font-medium">
                        {item.question}
                      </h4>
                      {active === index ? (
                        <TiArrowSortedUp className="text-white" size={20} />
                      ) : (
                        <TiArrowSortedDown className="text-white" size={20} />
                      )}
                    </div>
                    {active === index && (
                      <p className="mt-3 text-sm text-gray-300 leading-relaxed">
                        {item.answer}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center lg:mb-28">
            <h2 className="text-4xl md:text-5xl font-bold">
              Ready to{" "}
              <span className="bg-gradient-to-r from-[#4575FF] to-[#92AEFF] text-transparent bg-clip-text">
                Start Earning?
              </span>
            </h2>
            <p className="text-gray-300 mt-4 mb-8">
              Join thousands of users growing their crypto portfolios with
              staking.
            </p>
            <div className="flex justify-center gap-4 text-xs sm:text-base">
              <button className="bg-gradient-to-r from-[#C6D5FF] to-[#698FFF] hover:opacity-90 hover:text-white text-[#0B132E] font-medium py-2 px-6 rounded-md transition duration-300">
                Get Started Now
              </button>

              <button className="border border-blue-400 bg-gradient-to-r from-[#4575FF] to-[#92AEFF] text-transparent bg-clip-text py-2 px-6 rounded-md hover:bg-blue-400 hover:text-white transition">
                Contact Support
              </button>
            </div>
          </div>

          {/* Gradient Horizontal Line */}
          <div className="relative my-10 lg:my-20">
            <div
              className="h-[2px] sm:w-1/2 mx-auto"
              style={{
                backgroundImage:
                  "linear-gradient(to right, #0F2567 0%, #92AEFF 24%, #4575FF 77%, #0F2567 100%)",
              }}
            ></div>
          </div>

          {/* Footer */}
          <div className="sm:pt-2 text-center text-sm text-gray-400">
            {/* Logo */}
            <div className="flex justify-center mb-6">
              <img
                src="./fastone-logo-text2.png"
                alt="FastOne"
                className="h-10 md:h-12 object-contain"
              />
            </div>

            {/* Footer Links */}
            <div className="flex flex-wrap justify-center gap-x-10 gap-y-4 sm:mb-6 text-base sm:pt-12">
              <a href="#" className="hover:text-white transition">
                How It Works
              </a>
              <a href="#" className="hover:text-white transition">
                Supported Cryptos
              </a>
              <a href="#" className="hover:text-white transition">
                Staking Plans
              </a>
              <a href="#" className="hover:text-white transition">
                FAQ
              </a>
              <a href="#" className="hover:text-white transition">
                Blog
              </a>
              <a href="#" className="hover:text-white transition">
                Contact Us
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex justify-center gap-5 text-white text-lg mb-6 pt-6">
              <FaInstagram className="hover:text-blue-400 transition" />
              <FaFacebookF className="hover:text-blue-400 transition" />
              <FaTwitter className="hover:text-blue-400 transition" />
              <FaYoutube className="hover:text-blue-400 transition" />
              <FaTelegramPlane className="hover:text-blue-400 transition" />
            </div>

            {/* Copyright */}
            <p className="text-white text-sm pt-4">
              &copy; 2019–2025 FastOne.com
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Landing;
