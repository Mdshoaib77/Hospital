import React from "react";
import Button from "../layouts/Button";
import { RiMicroscopeLine } from "react-icons/ri";
import ServicesCard from "../layouts/ServicesCard";
import { MdHealthAndSafety } from "react-icons/md";
import { FaHeartbeat } from "react-icons/fa";
import { motion } from "framer-motion";

const Services = () => {
  const icon1 = (
    <RiMicroscopeLine size={35} className="text-backgroundColor" />
  );
  const icon2 = (
    <MdHealthAndSafety size={35} className="text-backgroundColor" />
  );
  const icon3 = <FaHeartbeat size={35} className="text-backgroundColor" />;

  return (
    <div className="flex flex-col justify-center min-h-screen px-5 pt-24 lg:px-32 lg:pt-16">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex flex-col items-center justify-between lg:flex-row"
      >
        <div>
          <h1 className="text-4xl font-semibold text-center lg:text-start">
            Our Services
          </h1>
          <p className="mt-2 text-center lg:text-start">
            Explore the range of care we offer — from routine health checks to specialized diagnostics tailored to your needs.
          </p>
        </div>
        <div className="mt-4 lg:mt-0">
          <Button title="See Services" />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="flex flex-col gap-5 lg:flex-row pt-14"
      >
        <ServicesCard icon={icon1} title="Lab Testing" />
        <ServicesCard icon={icon2} title="Preventive Checkups" />
        <ServicesCard icon={icon3} title="Cardiac Wellness" />
      </motion.div>
    </div>
  );
};

export default Services;
