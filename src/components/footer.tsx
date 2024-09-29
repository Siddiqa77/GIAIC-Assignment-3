const Footer = () => {
  return (
    <div>
      <footer className="bg-[#16a34a] body-font">
        <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <a href="Cv.pdf.pdf">
              <div className="container flex font-serif ">
                <span className="pt-5 text-[25px] text-black font-bold hover:animate-spin">
                  Siddiqa Badar
                </span>
              </div>
            </a>
            <p className="mt-2 text-md text-gray-700 font-bold">
              I am a Frontend Developer
            </p>
          </div>
          <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 ml-30 mt-10 md:text-left text-center">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font text-black font-bold tracking-widest text-sm mb-3">
                PORTFOLIO
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a
                    href="./"
                    className="text-gray-900  hover:text-lg hover:bg-pink-700 p-1 rounded-lg hover:text-white"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="./about"
                    className="text-gray-900  hover:text-lg hover:bg-pink-700 p-1 rounded-lg hover:text-white"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="./contact"
                    className="text-gray-900  hover:text-lg hover:bg-pink-700 p-1 rounded-lg hover:text-white"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-900  hover:text-lg hover:bg-pink-700 p-1 rounded-lg hover:text-white"
                  >
                    Project
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-md mb-3">
                PROJECTS
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a
                    href="#"
                    className="text-gray-900  hover:text-lg hover:bg-pink-700 p-1 rounded-lg hover:text-white"
                  >
                    Projact-One
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-900  hover:text-lg hover:bg-pink-700 p-1 rounded-lg hover:text-white"
                  >
                    Project-Two
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-900  hover:text-lg hover:bg-pink-700 p-1 rounded-lg hover:text-white"
                  >
                    Project-Three
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-900  hover:text-lg hover:bg-pink-700 p-1 rounded-lg hover:text-white"
                  >
                    Project-Four
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-md mb-3">
                CONNECT WITH ME
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a
                    href="#"
                    className="text-gray-900  hover:text-lg hover:bg-pink-700 p-1 rounded-lg hover:text-white"
                  >
                    Sector 5M North Karachi
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.whatsapp.com/"
                    className="text-gray-900  hover:text-lg hover:bg-pink-700 p-1 rounded-lg hover:text-white"
                  >
                    03213661804
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.gmail.com/"
                    className="text-gray-900  hover:text-lg hover:bg-pink-700 p-1 rounded-lg hover:text-white"
                  >
                    siddiqabadar421@ <br />
                    gmail.com
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-m mb-3">
                RESOURCESb
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a
                    href="https://github.com/Siddiqa77?tab=repositories"
                    className="text-gray-900  hover:text-lg hover:bg-pink-700 p-1 rounded-lg hover:text-white"
                  >
                    Github
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/siddiqa-badar-49a5692b5/"
                    className="text-gray-900  hover:text-lg hover:bg-pink-700 p-1 rounded-lg hover:text-white"
                  >
                    Linkedin
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.behance.net/siddiqa04"
                    className="text-gray-900  hover:text-lg hover:bg-pink-700 p-1 rounded-lg hover:text-white"
                  >
                    Behance{" "}
                  </a>
                </li>
                <li>
                  <a
                    href="http://www.youtube.com/@Siddiqa-345"
                    className="text-gray-900  hover:text-lg hover:bg-pink-700 p-1 rounded-lg hover:text-white"
                  >
                    Youtube
                  </a>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div className="bg-gray-300">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-black gap-2 text-sm text-center  sm:text-left">
              © CopyRight 2024
              <a
                href="https://twitter.com/knyttneve"
                rel="noopener noreferrer"
                className="black ml-1"
                target="_blank"
              >
                @siddiqabadar
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
