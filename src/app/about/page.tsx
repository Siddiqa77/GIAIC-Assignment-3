

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Link from "next/link";


const About = () => {
  return (
    <div>
        <Navbar/>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <div className="flex justify-end  h-[250px] w-50  mr-[60px] mx-10 md: mb-[200px] md:mr-15 lg:w-[400px] lg:mt-5">
              <img
                className="rounded-full w-[400px] h-[200px] bg-gray-100  md:h-[450px] lg:w-[400px] lg:h-[400px] border-8 border-gray-100 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ... "
                src="./images/pic.png"
                alt=""
              />

            </div>
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            {/* <h1 className="text-[30] font-serif font-extrabold sm:text-6xl text-3xl mb-4 text-gray-100 md:mt-2 md:ml-[90px]">
             
            </h1> */}
             <h1 className="text-[25] font-serif font-extrabold sm:text-6xl text-3xl mb-4 text-gray-200 md:mt-2 md:ml-[90px]">
              I AM SIDDIQA BADAR
             
            </h1>
            <p className="mb-5 leading-relaxed text-gray-100">
              I’m a passionate Web developer and graphic designer dedicated to
              turning ideas into visually stunning and functional digital
              experiences. With a strong foundation in both design and
              development, I create websites that not only look beautiful but
              also perform seamlessly across all devices.
            </p>
            <p className="mb-5 leading-relaxed text-gray-100">
              My Journey Starting as a Graphic designer, I developed an eye for
              aesthetics, color theory, and composition, which laid the
              groundwork for my transition into web development. This unique
              blend of skills allows me to approach projects holistically,
              ensuring that every design element serves a purpose and enhances
              the overall user experience.
            </p>
            <div className="flex justify-center">
              <Link href="#">
                
                <button className="ml-4 inline-flex text-gray-700 bg-green-400  py-2 px-6 font-bold focus:outline-none hover:bg-pink-600 hover:text-white rounded text-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ... ">
                  View CV
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default About;
