import Logo from "../assets/final_logo.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 

function Footer() {
  return (
    <section className="relative overflow-hidden py-10 bg-black">
      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="-m-6 flex flex-wrap">
          <div className="w-full p-6 md:w-1/2 lg:w-3/6">
            <div className="flex h-full flex-col justify-between">
              <div className="mb-4 inline-flex items-center">
                <img src={Logo} alt="Logo" className="h-[10rem]"/>
              </div>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-2/6">
            <div className="h-full text-white flex justify-center items-center">
              <h4> &copy; Reserved to BlockchainClubVITB </h4>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-1/6">
            <div className="h-full">
              <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-100">
                Support
              </h3>
              <ul>
                <li className="mb-4">
                  <Link
                    className=" text-base font-medium text-gray-100 hover:text-orange-500"
                    to={"/about"}
                  >
                    About Us
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className=" text-base font-medium text-gray-100 hover:text-orange-500"
                    to={"/contact"}
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <div className="flex text-w">
                  <FontAwesomeIcon icon="fa-brands fa-linkedin-in" style={{color: "#f7f9fd",}} />
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
