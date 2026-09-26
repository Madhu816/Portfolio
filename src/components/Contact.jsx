import emailjs from "@emailjs/browser";
import { useRef } from "react";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_dd16pix",
      "template_nbhbowa",
      form.current,
      "18h2-xZQ-hjKOype3"
    )
      .then(() => {
        alert("Message Sent Successfully!");
      })
      .catch(() => {
        alert("Failed to Send Message");
      });
  };

  return (
    <>
      <section name="contact" className="flex min-h-screen w-full flex-col justify-center px-5 py-24">
        <h1 className="mt-10 text-4xl font-bold text-green-700 text-center">
          Contact Me
        </h1>

        <p className="text-center mt-4 max-w-md mx-auto border border-gray-500 p-2 rounded-xl">
          Please fill out the form below to contact me
        </p>

        <div className="flex justify-center mt-10 bg">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="w-87.5 rounded-xl bg-slate-200 px-5 py-3 shadow-lg md:w-125"
          >
            <h1 className="text-2xl font-bold text-blue-500 mb-4">
              Send Your Message
            </h1>

            <div className="flex flex-col gap-2">
              <label className="font-bold">Full Name:</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                className="border border-gray-300 p-2 rounded-xl"
              />

              <label className="font-bold">Email:</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="border border-gray-300 p-2 rounded-xl"
              />

              <label className="font-bold">Message:</label>
              <textarea
                name="message"
                rows={5}
                placeholder="Enter your message"
                className="border border-gray-300 p-2 rounded-xl"
              />
            </div>

            <div className="flex justify-end mt-4">
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-blue-600"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
        {/* Social Links */}
        <div className="text-center mt-10">
          <p className="text-sm font-semibold mb-4 text-amber-500">
            Available On
          </p>

          <ul className="flex items-center justify-center gap-4">
            <li className="w-9 h-9 rounded-full bg-gray-200 justify-around flex items-center hover:bg-gray-300">
        <a href="https://www.instagram.com/_madhu_____p/" target="_blank">
          <img src="/instagram.png" alt="Instagram" className="w-6 h-6" />
        </a>
      </li>


      <li className="w-9 h-9 rounded-full bg-gray-200 justify-around flex items-center hover:bg-gray-300">
        <a href="https://www.linkedin.com/in/madhupiske/" target="_blank">
          <img src="/linkdin.png" alt="LinkedIn" className="w-6 h-6" />
        </a>
      </li>

      <li className="w-9 h-9 rounded-full bg-gray-200 justify-around flex items-center hover:bg-gray-300">
        <a href="https://github.com/Madhu816" target="_blank">
          <img src="/github.png" alt="GitHub" className="w-6 h-6" />
        </a>
      </li>
          </ul>
        </div>

        <footer className="text-center mt-10 mb-4 text-gray-600">
          &copy; {new Date().getFullYear()} P.Madhu. All rights reserved.
        </footer>
      </section>
    </>
  );
};

export default Contact;