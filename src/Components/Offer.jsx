import Card from "./Card/Card";
import { useState, useRef } from "react";
import PopUp from "./Card/PopUp";
import writing1 from '../assets/writing1.jpeg';
import writing2 from '../assets/writing2.jpg';
import writing3 from '../assets/writing3.jpeg';
import writing4 from '../assets/writing4.jpeg';
import writing5 from '../assets/writing5.jpeg';
import refugee from '../assets/refugee.jpeg';
import criminal from '../assets/criminal.jpeg';
import family from '../assets/family.jpeg';
import worker from '../assets/worker.jpeg';
import visit from '../assets/visit.jpeg';
import cv from '../assets/cv.jpg';
import health from '../assets/health.webp';
import marketing from '../assets/marketing.jpg';
import tech1 from '../assets/tech1.jpg'
import tech2 from '../assets/tech2.png'
import tech3 from '../assets/tech3.jpg'
import tech4 from '../assets/tech4.webp'
import cleaning from '../assets/cleaning.jpeg'
import mot from '../assets/mot.jpg'
import success from '../assets/success.jpeg';
import birth from '../assets/birth.jpeg';
import aniversary from '../assets/aniversary.jpeg';
import window from '../assets/window.jpeg'
import office from "../assets/office.png"

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
    image: marketing,
    name: "Marketing",
    desc: " Involves creating promotional materials like advertisements, brochures, website content, and social media posts.",
  },
  {
    image: health,
    name: "Health and Medicine",
    desc: "Health and medicine writing encompasses research, education, policy advocacy, patient communication, scientific reporting, and medical marketing across diverse platforms."
  },
  {
    image: cv,
    name: "CV Building",
    desc: "Summarize education, experience, skills, and achievements. Keep it concise, organized, error-free, and tailored to the job you're applying for.",
  },
];

const webDev = [
  {
    image: tech1,
    name: "Custom Website Design",
    desc: "Tailor-made designs that uniquely reflect your brand and engage your audience.",
  },
  {
    image: tech2,
    name: "E-commerce Solutions",
    desc: "Comprehensive online store setups that provide seamless shopping experiences and boost sales.",
  },
  {
    image: tech3,
    name: "CMS Development",
    desc: "Customizable Content Management Systems that empower you to manage and update content effortlessly.",
  },
  {
    image: tech4,
    name: "Responsive Web Design",
    desc: " Fluid, adaptive web designs ensuring optimal viewing across all devices, from desktops to smartphones.",
  },
]

const laws = [
  {
    image: refugee,
    name: "Asylum and Refugee",
    desc: "Legal assistance for individuals fleeing persecution, seeking asylum or refugee status, navigating complex legal processes, and advocating for protection"
  },
  {
    image: visit,
    name: "visit visa",
    desc: "Legal assistance for obtaining visit visas, ensuring compliance with regulations, and navigating application processes for temporary stays in foreign countries."
  },
  {
    image: worker,
    name: "Skilled Worker Visa",
    desc: "navigating complex requirements, and assisting with employment-based immigration processes."
  },
  {
    image: family,
    name: "Family law",
    desc: "Legal support for matters concerning family relationships: divorce, child custody, adoption, paternity, alimony, domestic violence, and related issues."
  },
  {
    image: criminal,
    name: "Criminal law",
    desc: "Legal representation and defense for individuals accused of committing crimes, encompassing a range of offenses"
  }
]


const cleaningServ = [
  {
    image: cleaning,
    name: "Cleaning Services",
    desc: "The company offers comprehensive cleaning services, including residential and commercial cleaning, deep cleaning, sanitation, organizing, and eco-friendly cleaning solutions."
  },
  {
    image: office,
    name: "Office Cleaning",
    desc: "Revitalize Your Workspace! We deliver top-tier office cleaning solutions. Elevate cleanliness and productivity. Reach out for a spotless office!"
  },{
    image: window,
    name: "Windows Cleaning",
    desc: "Sparkling Windows Guaranteed, we offer expert window cleaning services. Trust us for crystal-clear windows. Contact us today!"
  }
]


const motser = [
  {
    image: mot,
    name: "MOT Services",
    desc: "Book your MOT service with us today for thorough inspections, repairs, and advisory reports, ensuring your vehicle's roadworthiness!"
  }
]


const event = [
  {
    image: birth,
    name: "Birthdays",
    desc: "Make your birthdays unforgettable with us! Professional event planning services tailored to your preferences. Book now for a memorable celebration!"
  },

  {
    image: aniversary,
    name: "Anniversary",
    desc: "Create cherished anniversary memories with us! Expert event planning services customized to your love story. Reserve your celebration now!"
  },
  {
    image: success,
    name: "Success Celebrations",
    desc: "Elevate your success with us! Premier event planning services for your celebratory milestones. Book now for an unforgettable success celebration!"
  },
]

export default function Offer() {
  let [open, setOpen] = useState(false);
  let [object, setObject] = useState(false);
  let [cont, setCont] = useState(4);
  let [leg, setLeg] = useState(4);

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
      <section id="services">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl">
            What We Offer
          </h2>
          <p className="mt-6 leading-8 text-gray-700">
            Your One-Stop Hub for Professional Content Writing, Trusted Legal
            Immigration Consulting, and Innovative IT Solutions
          </p>
        </div>
        <section id="content">
        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <p className="text-2xl font-bold leading-9 tracking-tight text-slate-900">
            Content Writing
          </p>
          <p className="mt-6 leading-8 text-gray-700">
            Unlock Your Potential with Our Comprehensive Content Writing Services for Every Need
          </p>
          <div className="flex justify-center">
            <div className="sm:grid grid-cols-1 sm:justify-center md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
              {content.slice(0, cont).map((item) => (
                <div
                  key={item.name}
                  onClick={() => {
                    setOpen(true);
                    setObject(item);
                  }}
                  className="flex"
                >
                  <Card obj={item} />
                </div>
              ))}
            </div>
          </div>
          <div className="grid justify-items-end">
            {(content.length > 4 && cont === 4) ? <button className="" onClick={() => setCont(content.length)}>See More&rarr;</button> : <></>}
          </div>
       </div>    
        </section>
        <section id="legal">
        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <p className="text-2xl font-bold leading-9 tracking-tight text-slate-900">
            Legal Services
          </p>
          <p className="mt-6 leading-8 text-gray-700">
            Legal services encompass professional advice, representation, and assistance in matters of law, ensuring rights, compliance, and resolution of legal issues.
          </p>
          <div className="flex justify-center">
            <div className="sm:grid grid-cols-1 sm:justify-center md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
              {laws.slice(0, leg).map((item) => (
                <div
                  key={item.name}
                  onClick={() => {
                    setOpen(true);
                    setObject(item);
                  }}
                  className="flex"
                >
                  <Card obj={item} />
                </div>
              ))}
              {/* {(laws.length > 4 && leg === 4) ? <button className="flex flex-end" onClick={() => setLeg(content.length)}>See More...</button> : <></>} */}

            </div>
          </div>
        </div>
        <div className="grid justify-items-end">
          {(laws.length > 4 && leg === 4) ? <button className="" onClick={() => setLeg(content.length)}>See More&rarr;</button> : <></>}
        </div>
        </section>

        <section id="event">
        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <p className="text-2xl font-bold leading-9 tracking-tight text-slate-900">
            Event Managemant / Planning
          </p>
          <p className="mt-6 leading-8 text-gray-700">
          Unforgettable Events, Seamless Execution. Trust us for event planning.
          </p>
          <div className="flex justify-center">
            <div className="sm:grid grid-cols-1 sm:justify-center md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
              {event.map((item) => (
                <div
                  key={item.name}
                  onClick={() => {
                    setOpen(true);
                    setObject(item);
                  }}
                  className="flex"
                >
                  <Card obj={item} />
                </div>
              ))}
            </div>
          </div>
        </div>
        </section>

        <section id="mot">
        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <p className="text-2xl font-bold leading-9 tracking-tight text-slate-900">
            MOT Services
          </p>
          <p className="mt-6 leading-8 text-gray-700">
          Get your MOT services booked with us.
          </p>
          <div className="flex justify-center">
            <div className="sm:grid grid-cols-1 sm:justify-center md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
              {motser.map((item) => (
                <div
                  key={item.name}
                  onClick={() => {
                    setOpen(true);
                    setObject(item);
                  }}
                  className="flex"
                >
                  <Card obj={item} />
                </div>
              ))}
            </div>
          </div>
        </div>
        </section>

        <section id="web">
        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <p className="text-2xl font-bold leading-9 tracking-tight text-slate-900">
            Web Services
          </p>
          <p className="mt-6 leading-8 text-gray-700">
            Premium Web Development Services to Elevate Your Online Presence.
          </p>
          <div className="flex justify-center">
            <div className="sm:grid grid-cols-1 sm:justify-center md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
              {webDev.map((item) => (
                <div
                  key={item.name}
                  onClick={() => {
                    setOpen(true);
                    setObject(item);
                  }}
                  className="flex"
                >
                  <Card obj={item} />
                </div>
              ))}
            </div>
          </div>
        </div>
        </section>

        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <p className="text-2xl font-bold leading-9 tracking-tight text-slate-900">
            Cleaning Services
          </p>
          <p className="mt-6 leading-8 text-gray-700">
          Spotless Solutions: Premier Cleaning Services for Every Space
          </p>
          <div className="flex justify-center">
            <div className="sm:grid grid-cols-1 sm:justify-center md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
              {cleaningServ.map((item) => (
                <div
                  key={item.name}
                  onClick={() => {
                    setOpen(true);
                    setObject(item);
                  }}
                  className="flex"
                >
                  <Card obj={item} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      </section>
      <PopUp
        obj={object}
        setOpen={setOpen}
        cancelButtonRef={cancelButtonRef}
        open={open}
      />
    </div>
  );
}
