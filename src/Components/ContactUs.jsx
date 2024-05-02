import { useForm } from "@formspree/react";
import call from '../assets/call.svg'
import mail from '../assets/mail.svg'

export default function ContactUs() {
  const [state, handleSubmit] = useForm("xrgweqdo");

  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <section id="contactus" className="bg-slate-900 ">
      <div className="relative isolate overflow-hidden flex justify-center bg-slate-300 py-24 sm:py-32">
        <div className="max-w-7xl w-full">
          <div className="isolate px-6 py-24 sm:py-32 lg:px-8 bg-slate-">
            <div className="lg:flex">
              <div className="sm:w-1/2">
                <div className="flex justify-center items-center">
                  <div className="w-10/12 lg:pt-36 text-6xl  pb-8">
                    <h1 className="text-3xl sm:text-8xl">We&apos;re Here to Help!</h1>
                    <p className="text-lg text-gray-700 pt-8">
                      Got questions? Need a quote? We’re just a message away!
                    </p>
                    <p className="text-lg text-gray-700 pt-4">
                      Reach out to us anytime with your inquiries, and we will get back to you as soon as possible.
                    </p>
                    <div className="mt-12 flex">
                      <img src={call} className="w-6 h-6" />
                      <p className="text-lg text-gray-700 pl-4">+92302 55 08 945</p>
                    </div>
                    <div className=" flex pt-4">
                      <img src={mail} className="w-6 h-6" />
                      <p className="text-lg text-gray-700 pl-4">waliabdul91@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 bg-slate-100 rounded-lg p-8">
                <div className="mx-auto max-w-2xl text-center">
                  <p className="text-2xl font-bold leading-9 tracking-tight text-slate-900">
                    Contact Us
                  </p>
                </div>
                <form
                  onSubmit={handleSubmit}
                  className="mx-auto mt-16 max-w-xl sm:mt-20"
                >
                  <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="first-name"
                        className="block text-sm font-semibold leading-6"
                      >
                        Username
                      </label>
                      <div className="mt-2.5">
                        <input
                          type="text"
                          name="username"
                          id="username"
                          autoComplete="given-name"
                          className="block w-full text-white   bg-slate-50 rounded-md border-0 px-3.5 py-2  shadow-sm ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="email"
                        className="block text-sm font-semibold leading-6"
                      >
                        Email
                      </label>
                      <div className="mt-2.5">
                        <input
                          type="email"
                          name="email"
                          id="email"
                          autoComplete="email"
                          className="block w-full bg-slate-50 rounded-md border-0 px-3.5 py-2  shadow-sm ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="subject"
                        className="block text-sm font-semibold leading-6 "
                      >
                        Subject
                      </label>
                      <div className="mt-2.5">
                        <input
                          type="text"
                          name="subject"
                          id="subject"
                          className="block w-full  bg-slate-50 rounded-md border-0 px-3.5 py-2  shadow-sm ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <label
                        htmlFor="message"
                        className="block text-sm font-semibold leading-6 "
                      >
                        Message
                      </label>
                      <div className="mt-2.5">
                        <textarea
                          name="message"
                          id="message"
                          rows={4}
                          className="block w-full  bg-slate-50 rounded-md border-0 px-3.5 py-2  shadow-sm ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                          defaultValue={""}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mt-10">
                    <button
                      type="submit"
                      className="block w-full rounded-md  bg-slate-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-slate-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600"
                    >
                      Let&apos;s talk
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
