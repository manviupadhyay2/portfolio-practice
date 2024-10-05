import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/kevinRushProfile.png";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        {/* Left section - Text */}
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            {/* Animated Heading */}
            <motion.h1
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Manvi Upadhyay
            </motion.h1>

            {/* Animated Role */}
            <motion.span
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              Full Stack Developer
            </motion.span>

            {/* Animated Description */}
            <motion.p
              className="mt-4 text-lg text-neutral-400"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 1 }}
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>

        {/* Right section - Image */}
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            {/* Animated Profile Image */}
            <motion.img
              src={profilePic}
              alt="Profile"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
