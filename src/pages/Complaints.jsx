import { Link } from "react-router-dom";
import Header from "../components/Header";
import TitleBgCenter from "../components/TitleBgCenter";
import ComplaintsForm from "../components/ComplaintsForm";
import TitleArea from "../components/TitleArea";
import InstantAccount from "../components/InstantAccount";

function Complaints() {
  const breadcrumbPaths = [
    { name: "Home", href: "/" },
    { name: "Company", href: "" },
    { name: "Complaints" },
  ];

  const contactdetail = [
    {
      title: "Address Information",
      description:
        "The Cubicle, Suite 110 , 35-37, Royal Road, Phoenix, Republic of  Mauritius.",
      imagepath: "/images/contactus/addr.png.png",
      social: false,
    },
    {
      title: "Mail and Phone Number",
      description:
        "Email: support@fastoneglobalmarkets.com Phone: +230 698 3426",
      imagepath: "/images/contactus/contact-mail.png.png",
      social: false,
    },
    {
      title: "Stay in Touch",
      description: "",
      imagepath: "/images/contactus/share.png.png",
      social: true,
    },
  ];

  function ContactusDetails({ title, description, imagepath, social }) {
    return (
      <div
        className={`flex-1 flex flex-col justify-center items-center p-2 lg:p-6 ${
          !social && "md:border-r-1"
        } border-[#ccc] `}
      >
        {imagepath && (
          <div>
            <img src={imagepath} alt="address icon" className="h-10 mb-2" />
          </div>
        )}
        {title && (
          <h3 className="font-medium text-[#FFFFFF] text-sm lg:text-lg mb-2">
            {title}
          </h3>
        )}
        {description && (
          <p className="text-center text-[#fff] text-xs lg:text-sm">
            {description}
          </p>
        )}

        {social && (
          <div className="flex justify-center gap-2 text-white text-lg">
            {/* <div className="flex justify-center gap-5 text-white text-lg mb-6 pt-6"> */}
            {/* <FaInstagram className="hover:text-blue-400 transition" /> */}
            <img
              src="./icons/instagram.png"
              alt="Instagram"
              className="hover:brightness-125 h-8 lg:h-12 transition"
            />
            <img
              src="./icons/facebook.png"
              alt="Facebook"
              className="hover:brightness-125 h-8 lg:h-12 transition"
            />
            <img
              src="./icons/twitter.png"
              alt="Twitter"
              className="hover:brightness-125 h-8 lg:h-12 transition"
            />
            <img
              src="./icons/youtube.png"
              alt="Youtube"
              className="hover:brightness-125 h-8 lg:h-12 transition"
            />
            <img
              src="./icons/linkedin.png"
              alt="LinkedIn"
              className="hover:brightness-125 h-8 lg:h-12 transition"
            />
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="bg-[#030B20]">
      <img
        src="/images/bg-shadow.png"
        alt=""
        className="absolute top-0 left-0 object-cover"
      />
      <Header />
      <div className="pt-6 lg:pt-0 lg:py-6 md:py-10">
        <div className="max-w-7xl mx-auto text-center lg:py-10 ">
          <TitleArea title="Complaints" breadcrumbPaths={breadcrumbPaths} />
        </div>
      </div>

      <div className="container mx-auto relative">
        <div className="flex flex-col justify-between items-center gap-4 py-6">
          <div>
            <h3 className="font-bold text-[#FFFFFF]  text-lg lg:text-2xl">
              FastOne Global Financial Markets Limited (Mauritius)
            </h3>
          </div>
          <div className="grid grid-cols-1 md:flex md:justify-between items-center border-1 border-[#CCCCCC] rounded-xl">
            {contactdetail.map((detail) => (
              <ContactusDetails
                title={detail.title}
                description={detail.description}
                imagepath={detail.imagepath}
                social={detail.social}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto relative">
        <div className="flex flex-col md:flex-row gap-8 md:gap-3 lg:gap-0 justify-center items-center [&_h4]:text-white [&_h5]:text-white [&_label]:text-white py-10 lg:py-20">
          <div className="bg-[#126CAB]/20 max-w-sm lg:max-w-lg w-full mx-auto rounded-2xl p-4">
            <div className="font-Poppins font-semibold py-3">
              <p className="text-sm text-[#4575FF]">Complaint Form</p>
              <h4 className="">
                If you have any complaint, please fill below form. We will
                respond to your complaints within 1 day.
              </h4>
              {/* <h5 className="text-xl">Get in Touch!</h5> */}
            </div>
            <div className="font-Poppins pl-2">
              <form action="" className="font-semibold ">
                <div className="mb-2 flex flex-col gap-1.5">
                  <label className="font-semibold text-sm">Name*</label>
                  <input
                    type="text"
                    name="name"
                    className="font-medium w-full rounded-lg p-2 mb-1 border-2 border-[#D1D5DB] bg-[#F8F8F8] focus:outline-none placeholder:text-[#CCC] capitalize text-sm"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div className="mb-2 flex flex-col gap-1.5">
                  <label className="mt-2 text-sm">Email id*</label>
                  <input
                    type="email"
                    name="email"
                    className="font-medium w-full rounded-lg p-2 mb-1 border-2 border-[#D1D5DB] bg-[#F8F8F8] focus:outline-none placeholder:text-[#CCC] text-sm"
                    placeholder="example@gmail.com"
                    required
                  />
                </div>
                {/* <div className="mb-2 flex flex-col gap-1.5">
                  <label className="mt-2 text-sm">Company Name*</label>
                  <input
                    type="text"
                    name="companyName"
                    className="w-full rounded-lg p-2 mb-1 border-2 border-[#D1D5DB] bg-[#F8F8F8] focus:outline-none placeholder:text-[#CCC] font-medium text-sm"
                    required
                  />
                </div> */}
                <div className="mb-2 flex flex-col gap-1.5">
                  <label className="font-semibold mt-2 text-sm">
                    Mobile Number*
                  </label>
                  <input
                    type="Number"
                    name="mobileNo"
                    className="w-full rounded-lg p-2 mb-1 focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none border-2 border-[#D1D5DB] bg-[#F8F8F8] placeholder:text-[#CCC] font-medium text-sm"
                    placeholder="Enter Mobile No"
                    required
                  />
                </div>
                <div className="mb-2 flex flex-col gap-1.5">
                  <label className=" mt-2 text-sm">Message*</label>
                  <textarea
                    rows="4"
                    name="message"
                    className="w-full rounded-lg p-2 mb-1 border-2 border-[#D1D5DB] bg-[#F8F8F8] focus:outline-none placeholder:text-[#CCC] font-medium text-sm"
                    placeholder="your message..."
                  >
                    {" "}
                  </textarea>
                </div>
                <button
                  className="px-10 py-2 font-bold rounded-lg bg-[#13275C] border-black  border-1 mb-2 text-white"
                  // onClick={handleformsubmit}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
          <div>
            <img src="/images/contactus/formimage.png" alt="form image" />
          </div>
        </div>
      </div>

      <InstantAccount />
    </div>
  );
  // return (
  //   <>
  //     <Header mode={"light"} />
  //     <TitleBgCenter
  //       title="Complaints"
  //       description=""
  //       backgroundImage="/images/bg-2.png"
  //       breadcrumbPaths={breadcrumbPaths}
  //     />
  //     <section className="contact-details">
  //       <div className="container">
  //         <h3>FastOne Global Financial Markets Limited (Mauritius)</h3>
  //         <div className="row contact-row">
  //           <div className="col-md-4 card-cd border-r">
  //             <img
  //               src="/images/icons/addr.png"
  //               className="contact-icon"
  //               alt=""
  //             />
  //             <h5>Address Information</h5>
  //             <p>
  //               The Cubicle, Suite 110 , 35-37, Royal Road, Phoenix, Republic of
  //               Mauritius.
  //             </p>
  //           </div>
  //           <div className="col-md-4 card-cd border-r">
  //             <img
  //               src="/images/icons/contact-mail.png"
  //               className="contact-icon"
  //               alt=""
  //             />
  //             {/* <h5>Mail and Phone Number</h5> */}
  //             {/* <p>Email: support@fastoneglobalmarkets.com</p> */}
  //             <h5>Phone Number</h5>
  //             <p>Phone: +230 698 3426</p>
  //           </div>
  //           <div className="col-md-4 card-cd">
  //             <img
  //               src="/images/icons/share.png"
  //               className="contact-icon"
  //               alt=""
  //             />
  //             <h5>Stay in Touch</h5>
  //             <Link to="https://www.facebook.com/FastoneMarkets">
  //               <svg
  //                 width="24"
  //                 height="24"
  //                 viewBox="0 0 24 24"
  //                 version="1.1"
  //                 xmlns="http://www.w3.org/2000/svg"
  //                 aria-hidden="true"
  //                 focusable="false"
  //               >
  //                 <path d="M12 2C6.5 2 2 6.5 2 12c0 5 3.7 9.1 8.4 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.3v7C18.3 21.1 22 17 22 12c0-5.5-4.5-10-10-10z"></path>
  //               </svg>
  //             </Link>
  //             <Link to="https://x.com/Fastone_Markets">
  //               <svg
  //                 width="24"
  //                 height="24"
  //                 viewBox="0 0 24 24"
  //                 version="1.1"
  //                 xmlns="http://www.w3.org/2000/svg"
  //                 aria-hidden="true"
  //                 focusable="false"
  //               >
  //                 <path d="M22.23,5.924c-0.736,0.326-1.527,0.547-2.357,0.646c0.847-0.508,1.498-1.312,1.804-2.27 c-0.793,0.47-1.671,0.812-2.606,0.996C18.324,4.498,17.257,4,16.077,4c-2.266,0-4.103,1.837-4.103,4.103 c0,0.322,0.036,0.635,0.106,0.935C8.67,8.867,5.647,7.234,3.623,4.751C3.27,5.357,3.067,6.062,3.067,6.814 c0,1.424,0.724,2.679,1.825,3.415c-0.673-0.021-1.305-0.206-1.859-0.513c0,0.017,0,0.034,0,0.052c0,1.988,1.414,3.647,3.292,4.023 c-0.344,0.094-0.707,0.144-1.081,0.144c-0.264,0-0.521-0.026-0.772-0.074c0.522,1.63,2.038,2.816,3.833,2.85 c-1.404,1.1-3.174,1.756-5.096,1.756c-0.331,0-0.658-0.019-0.979-0.057c1.816,1.164,3.973,1.843,6.29,1.843 c7.547,0,11.675-6.252,11.675-11.675c0-0.178-0.004-0.355-0.012-0.531C20.985,7.47,21.68,6.747,22.23,5.924z"></path>
  //               </svg>
  //             </Link>
  //             <Link to="https://www.instagram.com/fastone_global/">
  //               <svg
  //                 width="24"
  //                 height="24"
  //                 viewBox="0 0 24 24"
  //                 version="1.1"
  //                 xmlns="http://www.w3.org/2000/svg"
  //                 aria-hidden="true"
  //                 focusable="false"
  //               >
  //                 <path d="M12,4.622c2.403,0,2.688,0.009,3.637,0.052c0.877,0.04,1.354,0.187,1.671,0.31c0.42,0.163,0.72,0.358,1.035,0.673 c0.315,0.315,0.51,0.615,0.673,1.035c0.123,0.317,0.27,0.794,0.31,1.671c0.043,0.949,0.052,1.234,0.052,3.637 s-0.009,2.688-0.052,3.637c-0.04,0.877-0.187,1.354-0.31,1.671c-0.163,0.42-0.358,0.72-0.673,1.035 c-0.315,0.315-0.615,0.51-1.035,0.673c-0.317,0.123-0.794,0.27-1.671,0.31c-0.949,0.043-1.233,0.052-3.637,0.052 s-2.688-0.009-3.637-0.052c-0.877-0.04-1.354-0.187-1.671-0.31c-0.42-0.163-0.72-0.358-1.035-0.673 c-0.315-0.315-0.51-0.615-0.673-1.035c-0.123-0.317-0.27-0.794-0.31-1.671C4.631,14.688,4.622,14.403,4.622,12 s0.009-2.688,0.052-3.637c0.04-0.877,0.187-1.354,0.31-1.671c0.163-0.42,0.358-0.72,0.673-1.035 c0.315-0.315,0.615-0.51,1.035-0.673c0.317-0.123,0.794-0.27,1.671-0.31C9.312,4.631,9.597,4.622,12,4.622 M12,3 C9.556,3,9.249,3.01,8.289,3.054C7.331,3.098,6.677,3.25,6.105,3.472C5.513,3.702,5.011,4.01,4.511,4.511 c-0.5,0.5-0.808,1.002-1.038,1.594C3.25,6.677,3.098,7.331,3.054,8.289C3.01,9.249,3,9.556,3,12c0,2.444,0.01,2.751,0.054,3.711 c0.044,0.958,0.196,1.612,0.418,2.185c0.23,0.592,0.538,1.094,1.038,1.594c0.5,0.5,1.002,0.808,1.594,1.038 c0.572,0.222,1.227,0.375,2.185,0.418C9.249,20.99,9.556,21,12,21s2.751-0.01,3.711-0.054c0.958-0.044,1.612-0.196,2.185-0.418 c0.592-0.23,1.094-0.538,1.594-1.038c0.5-0.5,0.808-1.002,1.038-1.594c0.222-0.572,0.375-1.227,0.418-2.185 C20.99,14.751,21,14.444,21,12s-0.01-2.751-0.054-3.711c-0.044-0.958-0.196-1.612-0.418-2.185c-0.23-0.592-0.538-1.094-1.038-1.594 c-0.5-0.5-1.002-0.808-1.594-1.038c-0.572-0.222-1.227-0.375-2.185-0.418C14.751,3.01,14.444,3,12,3L12,3z M12,7.378 c-2.552,0-4.622,2.069-4.622,4.622S9.448,16.622,12,16.622s4.622-2.069,4.622-4.622S14.552,7.378,12,7.378z M12,15 c-1.657,0-3-1.343-3-3s1.343-3,3-3s3,1.343,3,3S13.657,15,12,15z M16.804,6.116c-0.596,0-1.08,0.484-1.08,1.08 s0.484,1.08,1.08,1.08c0.596,0,1.08-0.484,1.08-1.08S17.401,6.116,16.804,6.116z"></path>
  //               </svg>
  //             </Link>
  //           </div>
  //         </div>
  //       </div>
  //     </section>
  //     <ComplaintsForm />
  //   </>
  // );
}

export default Complaints;
