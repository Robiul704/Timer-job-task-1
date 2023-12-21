import { NavLink } from "react-router-dom";


const Banner = () => {
    return (
        <div className="">
             <section
        className="relative min-h-screen text-start bg-[url(https://i.ibb.co/kyTsHSY/task-management-concept-banner-header-vector-24529046.jpg)] bg-cover bg-center bg-no-repeat"
      >
        <div
          className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
        ></div>
      
        <div
          className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
        >
          <div className="max-w-xl text-start ml-10 ltr:sm:text-left rtl:sm:text-right">
            <h1 className="text-3xl text-white font-extrabold sm:text-5xl">
            Manage work 
Efficiently
      
              <strong className="block font-extrabold text-red-500"> Plan, Track and Organise your work. </strong>
            </h1>
      
            <p className="mt-4 max-w-lg text-white sm:text-xl/relaxed">
            An Intranet platform to Manage projects, organise work and focus on what’s important.
            </p>
      
            <div className="mt-8 flex flex-wrap gap-4 text-center">
              <NavLink to={'dashboard'}
                href="#"
                className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
              >
               Let’s Explore
              </NavLink>
            </div>
          </div>
        </div>
      </section>
        </div>
    );
};

export default Banner;