import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">Experience</h1>
      <div>
        {EXPERIENCES.map((experience, index) => (
          <motion.div
            key={index}
            className="mb-8 flex flex-wrap lg:justify-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
          >
            {/* Left: Year */}
            <div className="w-full lg:w-1/4">
              <motion.p
                className="mb-2 text-sm text-neutral-400"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                {experience.year}
              </motion.p>
            </div>

            {/* Right: Role, Description, and Technologies */}
            <div className="w-full max-w-xl lg:w-3/4">
              <motion.h6
                className="mb-2 font-semibold"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                {experience.role} -{" "}
                <span className="text-sm text-purple-100">
                  {experience.company}
                </span>
              </motion.h6>

              <motion.p
                className="mb-4 text-neutral-400"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                {experience.description}
              </motion.p>

              {/* Technologies */}
              <motion.div
                className="flex flex-wrap"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                {experience.technologies.map((tech, index) => (
                  <motion.span
                    key={index}
                    className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800"
                    whileHover={{ scale: 1.1 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
