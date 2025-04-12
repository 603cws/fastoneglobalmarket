function MarketHeaderSection({ title, imagepath }) {
  return (
    <div className="bg-[#030B20]">
      <div className="!container mx-auto lg:pt-10  md:pb-5 px-4">
        <div className="">
          <div className="flex flex-col lg:flex-row justify-center ">
            <div className="flex-1 flex justify-center pb-4 mb:pb-0 lg:py-10 ">
              <h2 className="font-bold text-xl text-center lg:text-left md:text-3xl lg:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#4575FF] to-[#92AEFF]">
                {title}
              </h2>
              {/* <h2 className="font-bold text-xl text-center lg:text-left md:text-3xl lg:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#4575FF] to-[#92AEFF]">
                Diversify your investment portfolio by trading CFDS on forex
              </h2> */}
            </div>
            <div className="flex-1 flex justify-center items-center ">
              <img src={imagepath} alt="dummy image " />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MarketHeaderSection;
