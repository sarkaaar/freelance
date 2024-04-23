import Card from "./Card/Card";
import { useState, useRef } from "react";
import PopUp from "./Card/PopUp";
import writing1 from '../assets/writing1.jpeg'
import writing2 from '../assets/writing2.jpg'
import writing3 from '../assets/writing3.jpeg'
import writing4 from '../assets/writing4.jpeg'
import writing5 from '../assets/writing5.jpeg'
import legal1 from '../assets/legal1.jpg'
import legal2 from '../assets/legal2.jpeg'

const content = [
  {
    image: writing1,
    name: "Non-fiction",
    desc: "Covers essays, articles, biographies, memoirs, and historical accounts.",
  },
  {
    image: writing2,
    name: "Academic",
    desc: "Involves scholarly writing such as research papers, dissertations, and academic articles.",
  },
  {
    image: writing3,
    name: "Technical",
    desc: "Focuses on conveying complex information in fields like science, technology, engineering, and medicine.",
  },
  {
    image: writing4,
    name: "Creative Writing",
    desc: "Blends elements of fiction with real-life events, such as personal essays and travel writing.",
  },
  {
    image: writing5,
    name: "Business",
    desc: "Includes writing for corporate communications, such as reports, proposals, memos, and business correspondence.",
  },
  {
    name: "Marketing",
    desc: " Involves creating promotional materials like advertisements, brochures, website content, and social media posts.",
  },
  { name: "Health and Medicine", desc: "Health and medicine writing encompasses research, education, policy advocacy, patient communication, scientific reporting, and medical marketing across diverse platforms." },
  {
    name: "CV Building",
    desc: "Summarize education, experience, skills, and achievements. Keep it concise, organized, error-free, and tailored to the job you're applying for.",
  },
];

const webDev = [
  {
    name: "Custom Website Design",
    desc: "Tailor-made designs that uniquely reflect your brand and engage your audience.",
  },
  {
    name: "E-commerce Solutions",
    desc: "Comprehensive online store setups that provide seamless shopping experiences and boost sales.",
  },
  {
    name: "CMS Development",
    desc: "Customizable Content Management Systems that empower you to manage and update content effortlessly.",
  },
  {
    name: "Responsive Web Design",
    desc: " Fluid, adaptive web designs ensuring optimal viewing across all devices, from desktops to smartphones.",
  },
]

export default function Offer() {
  let [open, setOpen] = useState(false);
  let [object, setObject] = useState(false);

  const cancelButtonRef = useRef(null);
  return (
    <div className="relative isolate overflow-hidden bg-slate-200 py-24 sm:py-32">
      <div
        className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
        aria-hidden="true"
      >

        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div
        className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
        aria-hidden="true"
      >
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl">
            What We Offer
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-700">
            Your One-Stop Hub for Professional Content Writing, Trusted Legal
            Immigration Consulting, and Innovative IT Solutions
          </p>
        </div>
        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <p className="text-2xl font-bold leading-9 tracking-tight text-slate-900">
            Content Writing
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-700">
            Unlock Your Potential with Our Comprehensive Content Writing Services for Every Need
          </p>
          <div className="flex justify-center">
            <div className="sm:grid grid-cols-1 sm:justify-center md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
              {content.map((stat) => (
                <div
                  key={stat.name}
                  onClick={() => {
                    setOpen(true);
                    setObject(stat);
                  }}
                  className="flex"
                >
                  <Card obj={stat} />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <p className="text-2xl font-bold leading-9 tracking-tight text-slate-900">
            Legal Services
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-700">
            Legal services encompass professional advice, representation, and assistance in matters of law, ensuring rights, compliance, and resolution of legal issues.
          </p>
        </div>
        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <p className="text-2xl font-bold leading-9 tracking-tight text-slate-900">
            Web Services
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-700">
            Premium Web Development Services to Elevate Your Online Presence.
          </p>
          <div className="flex justify-center">
            <div className="sm:grid grid-cols-1 sm:justify-center md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
              {webDev.map((stat) => (
                <div
                  key={stat.name}
                  onClick={() => {
                    setOpen(true);
                    setObject(stat);
                  }}
                  className="flex"
                >
                  <Card obj={stat} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <PopUp
        obj={object}
        setOpen={setOpen}
        cancelButtonRef={cancelButtonRef}
        open={open}
      />
    </div>
  );
}
