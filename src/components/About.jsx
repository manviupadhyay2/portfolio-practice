import { ABOUT_TEXT } from "../constants";
import aboutImg from "../assets/about.jpg";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">
        About <span className="text-neutral-500">Me</span>
      </h1>
      <div className="flex flex-wrap">
        
        {/* Left section - Image */}
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center">
            {/* Animated Image */}
            <motion.img
              className="rounded-2xl"
              src={aboutImg}
              alt="about"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            />
          </div>
        </div>

        {/* Right section - Text */}
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:justify-start">
            {/* Animated Text */}
            <motion.p
              className="my-2 max-w-xl py-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 1 }}
            >
              {ABOUT_TEXT}
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
