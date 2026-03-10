import { motion } from "framer-motion";
import { Calendar, MapPin, BookOpen } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay },
});

const EDUCATION = [
  {
    degree: "Master of Science in Computer Science",
    school: "The George Washington University",
    period: "Aug 2024 – May 2026 (Expected)",
    location: "Washington, DC",
    color: "from-primary to-brand-light",
    coursework: [
      "Computer Systems Architecture",
      "Security Software Systems",
      "Database Systems II",
      "Trustworthy AI",
      "Big Data & Analytics",
      "Distributed Computing",
    ],
  },
  {
    degree: "Bachelor of Technology in Computer Science",
    school: "Gokaraju Rangaraju Institute of Engineering & Technology",
    period: "Aug 2020 – May 2024",
    location: "Hyderabad, India",
    color: "from-accent to-amber-400",
    coursework: [
      "Data Structures & Algorithms",
      "Object Oriented Programming",
      "Database Management Systems",
      "Artificial Intelligence",
      "Machine Learning",
      "Natural Language Processing",
    ],
  },
];

const EducationSection = () => (
  <section id="education" className="py-24 bg-white">
    <div className="max-w-6xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-14"
      >
      <motion.p {...fadeUp(0)} className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">
          Education
        </motion.p>
        <motion.h2 {...fadeUp(0.1)} className="font-display text-4xl font-bold text-brand-deep">
          Where I've Studied
        </motion.h2>
      </motion.div>

      <div className="space-y-6">
        {EDUCATION.map((edu, i) => (
          <motion.div
            key={i}
            {...fadeUp(0.15 + i * 0.12)}
            className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100"
          >
            <div className={`h-1.5 bg-gradient-to-r ${edu.color}`} />
            <div className="p-6">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                <div>
                  <h3 className="font-bold text-lg text-gray-900">{edu.degree}</h3>
                  <span className="text-primary font-medium text-base">{edu.school}</span>
                </div>
                <div className="flex flex-col md:items-end gap-1 text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    <Calendar size={13} /> {edu.period}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={13} /> {edu.location}
                  </span>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <BookOpen size={14} className="text-accent mt-0.5 flex-shrink-0" />
                <div className="flex flex-wrap gap-2">
                  {edu.coursework.map((course) => (
                    <span
                      key={course}
                      className="px-2 py-0.5 bg-gray-50 border border-gray-200 rounded-full text-sm text-gray-600"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default EducationSection;
