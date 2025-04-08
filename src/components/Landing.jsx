import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaTelegramPlane,
} from "react-icons/fa";

const features = [
  {
    title: "High Returns",
    description: "Earn competitive APY on your staked assets.",
    icon: "📈", // You can replace this with an actual icon or image
  },
  {
    title: "Secure Protocol",
    description: "Built with industry-grade security standards.",
    icon: "🔐",
  },
  {
    title: "User Friendly",
    description: "Simple interface for hassle-free staking.",
    icon: "🧑‍💻",
  },
  {
    title: "Fast Payouts",
    description: "Withdraw your rewards quickly and easily.",
    icon: "⚡",
  },
  {
    title: "Transparent System",
    description: "Track your staking performance in real-time.",
    icon: "🔍",
  },
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

function Landing() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const cardsPerSlide = 2;
  const totalSlides = Math.ceil(testimonials.length / cardsPerSlide);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000); // Auto-slide every 5 seconds

    return () => clearInterval(interval);
  }, [totalSlides]);

  const start = currentSlide * cardsPerSlide;
  const visibleTestimonials = testimonials.slice(start, start + cardsPerSlide);

  return (
    <div>
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0A0F2C] to-[#0F172A] text-white px-6">
        <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <div className="space-y-4">
            <p className="text-sm tracking-wide text-blue-400 uppercase">
              ● Grow your assets effortlessly!
            </p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-blue-500">Empower Your Trade</span>
              <br />
              Master the <span className="text-white">Markets</span>
            </h1>
            <p className="text-gray-300 text-lg">
              Stake your cryptocurrencies and earn up to 15% APY. Secure,
              transparent, and beginner-friendly.
            </p>
            <div className="flex gap-4 pt-4">
              <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg font-semibold">
                Start Staking Now
              </button>
              <button className="border border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white px-6 py-2 rounded-lg font-semibold">
                Learn How It Works
              </button>
            </div>
          </div>

          {/* Right Media (Image/Graphic/Video Placeholder) */}
          <div className="w-full h-64 md:h-[400px] bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl shadow-xl" />
        </div>
      </section>

      <section className="bg-[#0A0F2C] text-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            {/* Left Side Media + Title */}
            <div className="space-y-4">
              <div className="w-full h-80 bg-gray-300 rounded-md" />{" "}
              {/* Placeholder image */}
              <h2 className="text-4xl font-bold leading-snug">
                Why <span className="text-blue-500">Stake</span>
                <br />
                with Us
              </h2>
              <p className="text-gray-300 text-lg pr-4">
                Discover the advantages of staking with FastOne—where security,
                simplicity, and high rewards come together to help you grow your
                crypto effortlessly.
              </p>
            </div>

            {/* Right Side Features */}
            <div className="grid grid-cols-2 gap-4 mt-6 md:mt-0">
              {features.map((feature, idx) => (
                <div
                  key={idx}
                  className="border border-blue-600 rounded-xl p-4 hover:bg-blue-900/20 transition"
                >
                  <div className="text-3xl mb-2">{feature.icon}</div>
                  <h4 className="text-lg font-semibold">{feature.title}</h4>
                  <p className="text-sm text-gray-400">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-[#0B0F2F] to-[#02071C] text-white py-24 px-6">
        <div className="max-w-7xl mx-auto space-y-20">
          {/* Staking Steps Section */}
          <div>
            <div className="text-center md:text-left mb-10 flex flex-col md:flex-row justify-between items-start">
              <div>
                <h2 className="text-4xl font-bold leading-snug">
                  How Crypto Staking Works in{" "}
                  <span className="text-blue-400">3 Simple Steps</span>
                </h2>
              </div>
              <p className="text-gray-400 max-w-md mt-4 md:mt-0">
                Staking your crypto has never been easier. Follow these three
                simple steps to start earning rewards today!
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {steps.map((step, idx) => (
                <div
                  key={idx}
                  className="border border-blue-500 rounded-xl p-6 space-y-2 hover:bg-blue-900/10 transition"
                >
                  <div className="text-4xl font-bold text-blue-400">
                    {step.number}
                  </div>
                  <h4 className="text-lg font-semibold">{step.title}</h4>
                  <p className="text-sm text-gray-400">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Favorite Crypto Section */}
          <div>
            <div className="text-center md:text-left mb-10 flex flex-col md:flex-row justify-between items-start">
              <div>
                <h2 className="text-4xl font-bold leading-snug">
                  Stake Your Favorite <br />
                  <span className="text-blue-400">Crypto Currencies</span>
                </h2>
              </div>
              <p className="text-gray-400 max-w-md mt-4 md:mt-0">
                Choose from a wide range of trusted cryptocurrencies to stake
                and start earning rewards today.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {cryptos.map((crypto, idx) => (
                <div
                  key={idx}
                  className="border border-blue-500 rounded-xl p-6 flex flex-col items-center text-center space-y-4 hover:bg-blue-900/10 transition"
                >
                  <img
                    src={crypto.image}
                    alt={crypto.name}
                    className="w-12 h-12"
                  />
                  <h4 className="font-semibold">{crypto.name}</h4>
                  <p className="text-2xl font-bold text-blue-400">
                    {crypto.reward}
                  </p>
                  <p className="text-sm text-gray-400">Monthly Rewards</p>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm">
                    Stake Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#060D27] text-white py-24 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start mb-12">
            <h2 className="text-4xl font-bold leading-snug">
              What Our <span className="text-blue-400">Users Are Saying</span>
            </h2>
            <p className="text-gray-400 max-w-md mt-4 md:mt-0">
              Join thousands of satisfied users who are growing their crypto
              portfolios with EPTY. Hear what they have to say about their
              staking experience!
            </p>
          </div>

          {/* Testimonial Cards */}
          <div className="bg-[#111827] p-6 rounded-2xl flex flex-col md:flex-row gap-6 justify-center transition-all duration-500">
            {visibleTestimonials.map((user, idx) => (
              <div
                key={idx}
                className="border border-blue-500 rounded-xl p-6 flex items-start gap-4 w-full md:w-1/2"
              >
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
            ))}
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: totalSlides }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  idx === currentSlide ? "bg-blue-400" : "bg-gray-400"
                }`}
              ></button>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0B132E] text-white px-4 py-20">
        <div className="max-w-7xl mx-auto">
          {/* FAQ */}
          <div className="flex flex-col md:flex-row gap-10 mb-28">
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Frequently Asked{" "}
                <span className="text-blue-400">Questions</span>
              </h2>
              <p className="text-gray-400">
                Join thousands of satisfied users who are growing their crypto
                portfolios with FastOne. Hear what they have to say about their
                staking experience!
              </p>
            </div>

            <div className="flex-1 space-y-4">
              {faqs.map((item, index) => (
                <div
                  key={index}
                  className="border border-blue-400 rounded-lg p-4 bg-[#111827] transition-all"
                >
                  <div
                    className="flex justify-between items-center cursor-pointer"
                    onClick={() => setActive(index === active ? null : index)}
                  >
                    <h4 className="text-sm font-semibold">{item.question}</h4>
                    {active === index ? (
                      <FaChevronUp className="text-blue-400" />
                    ) : (
                      <FaChevronDown className="text-gray-400" />
                    )}
                  </div>
                  {active === index && (
                    <p className="mt-2 text-sm text-gray-300">{item.answer}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mb-28">
            <h2 className="text-4xl md:text-5xl font-bold">
              Ready to <span className="text-blue-400">Start Earning?</span>
            </h2>
            <p className="text-gray-300 mt-4 mb-8">
              Join thousands of users growing their crypto portfolios with
              staking.
            </p>
            <div className="flex justify-center gap-4">
              <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-md transition">
                Get Started Now
              </button>
              <button className="border border-blue-400 text-blue-400 py-2 px-6 rounded-md hover:bg-blue-400 hover:text-white transition">
                Contact Support
              </button>
            </div>
          </div>

          {/* Footer */}
          <div className="border-t border-gray-700 pt-10 text-center text-sm text-gray-400">
            <div className="flex flex-wrap justify-center gap-6 mb-6">
              <a href="#">How It Works</a>
              <a href="#">Supported Cryptos</a>
              <a href="#">Staking Plans</a>
              <a href="#">FAQ</a>
              <a href="#">Blog</a>
              <a href="#">Contact Us</a>
            </div>

            <div className="flex justify-center gap-4 text-white text-lg mb-6">
              <FaInstagram />
              <FaFacebookF />
              <FaTwitter />
              <FaYoutube />
              <FaTelegramPlane />
            </div>

            <p className="text-sm">&copy; 2019–2025 . FastOne.com</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Landing;
