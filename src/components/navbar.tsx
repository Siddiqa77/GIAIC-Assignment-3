import Link from "next/link";


const Navbar = () => {
  return (
    <div className=" w-[100%]  top-0 z-50">
      <header className="bg-[#16a34a] text-gray-100 font-serif font-bold body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            
            <span className="ml-3 text-2xl text-gray-200 hover:animate-spin">
              Siddiqa Badar
            </span>
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <Link
              href="/"
              className="mr-5 text-xl hover:bg-pink-700 hover:p-2 hover:rounded-2xl cursor-pointer"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="mr-5 text-xl hover:bg-pink-700 hover:p-2 hover:rounded-2xl cursor-pointer"
            >
              About Us
            </Link>
           
             
            
            <Link
              href="/contact"
              className="mr-5 text-xl hover:bg-pink-700 hover:p-2 hover:rounded-2xl cursor-pointer"
            >
              Contact Us
            </Link>
          </nav>
         
        </div>
      </header>
    </div>
  );
};

export default Navbar;