function MarketHeaderSection({ title, imagepath, alt = "dummy image" }) {
  return (
    <div className="bg-[#030B20]">
      <div className="container mx-auto py-10 lg:pt-10  md:pb-5 relative">
        <div className="">
          <div className="flex flex-col gap-16  lg:flex-row justify-center lg:justify-between lg:items-center lg:gap-10 ">
            <div className=" flex-1 flex justify-center pb-4 mb:pb-0 lg:py-10 ">
              <h2 className="font-bold text-xl text-center lg:text-left md:text-3xl lg:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#4575FF] to-[#92AEFF]">
                {title}
              </h2>
            </div>
            <div className="flex-1 flex justify-center items-center  lg:max-w-lg">
              <img src={imagepath} alt={alt} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MarketHeaderSection;
