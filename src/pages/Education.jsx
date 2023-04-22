import React from "react";
import {
  VerticalTimeline,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { education } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import EducationCard from "../components/EducationCard";

const Education = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
    
        <h2 className={`${styles.sectionHeadTextEducation} text-center`}>
          Education Background.
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {education.map((education, index) => (
            <EducationCard
              key={`education-${index}`}
              education={education}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Education, "education");