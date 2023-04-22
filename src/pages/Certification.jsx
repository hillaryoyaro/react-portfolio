import React from "react";;
import { motion } from "framer-motion";

import { styles } from "../styles";
import { certificates } from "../constants";
import { SectionWrapper } from "../hoc";
import {  textVariant } from "../utils/motion";
import ServiceCard from "../components/ServiceCard"

const Certification = () => {
  return (
    <>
       <motion.div variants={textVariant()}>
    
          <h2 className={`${styles.sectionHeadTextEducation} text-center`}>
              Certification..
          </h2>
        </motion.div>
      <div className='mt-20 flex flex-wrap gap-10'>
        {certificates.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Certification, " ");