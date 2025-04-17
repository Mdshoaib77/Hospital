import React from "react";
import img from "../assets/img/about.jpg";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-between min-h-screen gap-5 px-5 pt-24 lg:flex-row lg:px-32 lg:pt-16">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full space-y-4 lg:w-3/4"
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl font-semibold text-center lg:text-start"
        >
          About Us
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-justify lg:text-start"
        >
          At WellnessVista, we’re committed to delivering holistic, patient-centered care. Our mission is to improve lives through innovative and compassionate healthcare services.
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-justify lg:text-start"
        >
          Our experienced team believes in empowering individuals with the tools and support they need for lifelong wellness. Whether it's routine check-ups or specialized treatments, we’re here to guide you every step of the way.
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-justify lg:text-start"
        >
          Join our community and take charge of your health journey. We’re honored to be your trusted partner in wellness.
        </motion.p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
        className="w-full lg:w-3/4"
      >
        <img className="rounded-lg" src={img} alt="About WellnessVista" />
      </motion.div>
    </div>
  );
};

export default About;
