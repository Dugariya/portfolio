import ContactForm from "./ContactForm";
import { social_media_options } from "./Home";
const Contact = () => {
  return (
    <div
      className=" bg-[url('https://media1.tenor.com/m/zEzrCBd_6i8AAAAd/hacker%C4%B1m-hacker.gif')] min-h-[100%] flex flex-col flex-1 relative object-fill "
      id="contact"
    >
      {/* <img
        src="https://media1.tenor.com/m/5Xw3hRmmtsoAAAAd/cover-page-hacker-man.gif"
        className=" w-full h-full object-cover relative "
      /> */}
      <div className="absolute w-full min-h-[100%] bg-black/80 ">
        <div className="p-4 mt-[70px] md:ml-[100px]">
          <span className="text-[#63c8ff] text-2xl font-semibold">
            Contact Me
          </span>
          {/* <hr className="w-[60%] my-5 bg-gray-600 text-black" /> */}
          <hr className="h-px my-4 bg-gray-400 border-0 dark:bg-gray-70 w-[60%]" />

          <div className="flex flex-1 flex-col">
            <div className="flex flex-col md:flex-row my-5">
              <div className=" border-0 border-blue-500 flex-1 text-white">
                <div className="text-white font-light text-2xl">
                  Get in touch
                </div>
                <div className="flex text-white gap-2 items-center mt-10 max-w-[80%]">
                  I am actively seeking full-time opportunities. Let's connect
                  to discuss how I can contribute to your team.
                </div>
                <div className="flex text-white gap-2 items-center mt-5">
                  <a className="text-gray-400 text-[20px]">Email: </a>
                  <a className="text-white text-[16px] font-light  blur-sm hover:blur-0">
                    pawandugariya@gmail.com
                  </a>
                </div>
                <div className="flex text-white gap-2 items-center mt-3">
                  <a className="text-gray-400 text-[20px]">Phone: </a>
                  <a className="text-white text-[16px] font-light blur-sm hover:blur-0">
                    +91 8224855676
                  </a>
                </div>
                <br />
                <div className="invisible md:visible">&#8592;</div>
              </div>
              <ContactForm />
              <div className=" border-blue-700 p-2  md:hidden flex items-center justify-center flex-row gap-5 bg-[#024265] mt-[50px] ">
                <span className="text-white ">Follow Me On</span>
                {social_media_options.map((item, i) => {
                  return (
                    <a
                      key={i}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.icon}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-r from-blue-400 via-red-500 to-indigo-400 inline-block text-transparent bg-clip-text absolute md:bottom-10 bottom-1 ml-4 md:ml-[100px] ">
          Made With ❤ by Pawan Dugariya
        </div>
      </div>
    </div>
  );
};

export default Contact;
