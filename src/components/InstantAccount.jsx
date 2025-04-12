function InstantAccount() {
  return (
    <div className="bg-[#041329] flex justify-center md:justify-around items-center  py-6  text-center px-2 md:px-0">
      <div>
        <p className="text-white font-semibold text-sm lg:text-lg ">
          Instant Account - Trade Within Minutes!
        </p>
      </div>
      <div>
        <button className="md:mt-4 text-xs lg:text-base bg-white text-black px-3 py-1 md:px-6 md:py-2 rounded-md font-medium">
          <a href="/account-comparison">Start Live Account</a>
        </button>
      </div>
    </div>
  );
}

export default InstantAccount;
