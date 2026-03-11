import { motion } from "framer-motion";
import { ExternalLink, BookMarked } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay },
});

const PUBLICATIONS = [
  {
    title: "Performance Comparison of A* Search Algorithm and Hill-Climb Search Algorithm: A Case Study",
    abstract:
      "A comparative analysis of the performance of A* and Hill-Climb search algorithms in solving optimization problems. The study evaluates solution quality, execution time, and search complexity across different problem cases, showing that A* outperforms Hill-Climb in complex state spaces while Hill-Climb exhibits faster convergence in simpler settings.",
    url: "https://www.taylorfrancis.com/chapters/edit/10.1201/9781003470939-24/",
    color: "from-primary to-brand-light",
  },
  {
    title: "Soil Moisture Predictive Analysis using IoT and Machine Learning",
    abstract:
      "Examines the efficient usage of IoT sensors for farming and agriculture. The proposed system utilizes a soil moisture detection sensor with an ESP-32 Dev Module to find moisture levels in soil, enabling smart irrigation and reducing the need for human intervention in agricultural monitoring.",
    url: "https://doi.org/10.1051/e3sconf/202339101147",
    color: "from-accent to-amber-400",
  },
  {
    title: "Safe Driving Enabled using IoT",
    abstract:
      "Uses an ultrasonic sensor to detect potholes and road hazards, alerting drivers in real time, particularly in risky weather conditions. The project addresses a significant road safety concern  and road objects have contributed to thousands of deaths annually and proposes a low-cost IoT-based solution.",
    url: "https://doi.org/10.1051/e3sconf/202339101144",
    color: "from-emerald-500 to-teal-400",
  },
];

const PublicationsSection = () => (
  <section id="publications" className="py-24 bg-white">
    <div className="max-w-6xl mx-auto px-potholes6">
      <motion.p {...fadeUp(0)} className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">
        Publications
      </motion.p>
      <motion.h2 {...fadeUp(0.1)} className="font-display text-4xl font-bold text-brand-deep mb-14">
        Research & Writing
      </motion.h2>

      <div className="space-y-6">
        {PUBLICATIONS.map((pub, i) => (
          <motion.div
            key={i}
            {...fadeUp(0.15 + i * 0.12)}
            className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100"
          >
            <div className={`h-1.5 bg-gradient-to-r ${pub.color}`} />
            <div className="p-6">
              <div className="flex items-start gap-3 mb-3">
                <BookMarked size={18} className="text-accent mt-1 flex-shrink-0" />
                <h3 className="font-bold text-lg text-gray-900 leading-snug">{pub.title}</h3>
              </div>
              <p className="text-gray-600 text-base leading-relaxed mb-4 text-justify pl-7">
                {pub.abstract}
              </p>
              <div className="pl-7">
                <a
                  href={pub.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-brand-light transition-colors"
                >
                  <ExternalLink size={14} /> View Publication
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PublicationsSection;
