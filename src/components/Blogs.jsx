import React from "react";
import Button from "../layouts/Button";
import BlogCard from "../layouts/BlogCard";
import img1 from "../assets/img/blog1.jpg";
import img2 from "../assets/img/blog2.jpg";
import img3 from "../assets/img/blog3.jpg";
import img4 from "../assets/img/blog4.jpg";
import img5 from "../assets/img/blog5.jpg";
import img6 from "../assets/img/blog6.jpg";
import { motion } from "framer-motion"; // Import motion

const Blogs = () => {
  return (
    <div className="flex flex-col justify-center min-h-screen px-5 pt-24 lg:px-32">
      <div className="flex flex-col items-center justify-between lg:flex-row">
        <div>
          <h1 className="text-4xl font-semibold text-center lg:text-start">
            Latest Posts
          </h1>
          <p className="mt-2 text-center lg:text-start">
            Stay up to date with the latest health and wellness tips to improve
            your life.
          </p>
        </div>
        <div className="mt-4 lg:mt-0">
          <Button title="Our Articles" />
        </div>
      </div>
      <div className="my-8">
        <motion.div
          className="flex flex-wrap justify-center gap-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <BlogCard img={img1} headlines="Unraveling the Mysteries of Sleep" />
          <BlogCard img={img2} headlines="The Heart-Healthy Diet" />
          <BlogCard
            img={img3}
            headlines="Understanding Pediatric Vaccinations"
          />
          <BlogCard img={img4} headlines="Navigating Mental Health" />
          <BlogCard img={img5} headlines="The Importance of Regular Exercise" />
          <BlogCard img={img6} headlines="Skin Health 101" />
        </motion.div>
      </div>
    </div>
  );
};

export default Blogs;
