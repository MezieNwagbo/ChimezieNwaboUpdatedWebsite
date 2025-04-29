import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef();
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="text-primary dark:text-primaryDark capitalize"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {address}
        </span>

        <p className="font-medium w-full md:text-sm">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>

      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]"
        />

        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position="Lead Frontend Engineer"
            company="Cantant"
            companyLink="https://www.mycantant.com/"
            time="2024-Present"
            work="Developed and launched a Business Assistant and Bookkeeping web application using React.js,
JavaScript (ES6+), and Tailwind CSS, currently supporting 5,000+ active users with a seamless
and responsive user experience."
            address="Lagos, Nigeria"
          />
          <Details
            position="Frontend Developer"
            company="Senior Internet"
            companyLink="https://senior.co.uk/"
            time="2023-2024"
            work="Developed responsive, accessible websites
for membership organizations using HTML5, CSS3, React.js, and Umbraco CMS. Contributed to high-impact sites for clients like the International Police Association (IPA),
British Independent Retailers Association (BIRA), and AGCAS."
          />
          <Details
            position="Frontend Developer"
            company="Crust Africa"
            companyLink="https://www.crust.africa/"
            time="2022-2024"
            work="Led and managed a team of frontend developers, orchestrating the development of various web based products; including Greenbanker, Crust POS and Crust Corporate. Demonstrated strong leadership skills and ensured successful delivery of projects with a focus on quality and user experience."
          />

          <Details
            position="Web Developer / Instructor"
            company="Imaginarium"
            companyLink="https://www.imaginariumng.com"
            time="2018-2022"
            work="Developed and maintained multiple responsive, high-performance websites for diverse clients,
enhancing the company’s digital footprint and online credibility. Took on an additional role as Instructor within the company’s education/incubator arm, where
I trained over 100 individuals in modern web development tools and best practices 
                        "
          />

          <Details
            position="Software Engineer"
            company="Freelance"
            // companyLink="https://www.magiccarpet.studio/"
            time="Ongoing"
            work="Delivered end-to-end web development using the MERN stack (MongoDB, Express.js, React.js,
Node.js) for various brands and institutions. Built and deployed scalable, high-performance web applications, focusing on UI/UX design and
optimizing for seamless user interactions"
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
