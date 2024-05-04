
const whyus = [
  // {
  //   name: 'Integrated Service Offerings',
  //   desc: "Whether you're looking for compelling content, expert legal advice, or cutting-edge web solutions, we've got you covered. Our multidisciplinary approach means you get comprehensive solutions tailored to your needs—all from one trusted provider."
  // },
  {
    name: 'Expertise and Experience',
    desc: 'Our team is made up of industry veterans with years of experience. Content creators who craft persuasive and engaging narratives, legal advisors who navigate complex regulations with ease, and web developers who turn digital dreams into reality—whatever your challenge, our experts are ready to meet it.'
  },
  {
    name: 'Client-Centric Approach',
    desc: 'We listen to our clients and truly understand their objectives. This client-focused mindset allows us to deliver personalized services that not only meet but exceed expectations. Your success is our success, and we are dedicated to fostering long-term partnerships.'
  }, {
    name: 'Quality and Precision',
    desc: 'With a keen eye for detail and a commitment to quality, we ensure that every piece of content, legal contract, or web application isn’t just delivered, but perfected. We pride ourselves on flawless execution and exceptional outcomes.'
  },
]

export default function WhyUs() {
  return (
    <section id="whyus">
      <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
        <div
          className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
          aria-hidden="true"
        >
          <div
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
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
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Work with us</h2>
            <p className="mt-6 leading-8 text-gray-300">
              At There and Then, we bring a unique blend of talent, passion, and professionalism to every project. Here’s why we stand out:
            </p>
          </div>

          <div className="mt-4">
            {whyus.map((item) => {
              return (
                <div key={item.name}>
                  <h3 className="text-xl font-bold leading-9 tracking-tight text-slate-100">{item.name}</h3>
                  <p className="mb-2 leading-8 text-gray-200">{item.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
