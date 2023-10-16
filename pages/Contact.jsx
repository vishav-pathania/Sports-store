import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Link from "react-dom";
const Contact = () => {
  return (
    <div className="w-full">
      <Navbar />
    
<div className=" w-full mx-auto text-center bg-gradient-to-r text-black from-blue-200 via-sky-100 to-blue-200">
        <main className="w-full py-4">
          <section className="flex flex-col justify-center items-center">
            <h2 className="text-center text-3xl mb-28 font-bold">Contact Us</h2>
            <p className="text-center w-3/5  mb-32 text-lg">
              If you have any questions or feedback, please don't hesitate to
              contact Us. We are always happy to hear from people, and 
              helping others in any way that we can.
            </p>

            <ul className="flex gap-2  justify-center items-center space-x-4 mt-4">
              <li>Gmail:-
                <a href="gmail.com">
                  <img className="h-9 w-9" src="/email.png" alt="Email" />
                </a>
              </li>
              <li>Phone:-
                <a href='#'>
                  <img className="h-9 w-9" src="/phone.png" alt="Phone" />
                </a>
              </li>
              <li>LinkedIn:-
                <a href="https://linkedin.com">
                  <img className="h-9 w-9" src="/linkedin.png" alt="LinkedIn" />
                </a>
              </li>
              <li>Twitter:-
                <a href="https://twiiter.com">
                  <img className="h-9 w-9" src="/twiiter.png" alt="Twitter" />
                </a>
              </li>
              <li>FaceBook:-
                <a href="https://facebook.com">
                  <img className="h-9 w-9" src="/facebook.png" alt="Facebook" />
                </a>
              </li>
            </ul>
          </section>

          <section className="flex flex-col justify-center items-center mt-8">
            <h2 className="text-center text-3xl font-bold">Contact Form</h2>
            <form action="/contact" method="post">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full mt-4 p-2 border text-black border-gray-300 rounded"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full mt-4 p-2 border text-black border-gray-300 rounded"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                className="w-full mt-4 p-2 border text-black border-gray-300 rounded"
              />
              <input
                type="submit"
                value="Submit"
                className="w-full mt-4 p-2 bg-blue-500 text-white rounded"
              />
            </form>
          </section>

          <section className="flex flex-col justify-center items-center mt-8">
            <h2 className="text-center text-3xl font-bold">Subscribe to our newsletter</h2>
            <p className="text-center text-lg">
              Get the latest updates on our products and services</p>
              </section>
              </main>
              </div>
      <Footer/>
    </div>
  );
};

export default Contact;
