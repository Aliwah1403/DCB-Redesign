import { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { Phone, Mail, Linkedin, X } from "lucide-react";
import chrisImage from "./assets/Chris.jpg";
import denisImage from "./assets/Denis.jpg";

const teamMembers = [
  {
    name: "Chrispinus Otieno",
    position: "Managing Partner",
    content: () => {
      return (
        <p>
          Chris is a founding and the managing partner at DCB consulting. He
          brings together 11 years of professional experience in the health
          sector. He was an integral part of the establishment and growth of
          Karen hospital branches and strengthening of the hospital’s corporate
          finance functions which saw him awarded Top 40 under 40 award in 2015.
          Chris has also helped several hospitals build their strategic plans
          and scale. <br />
          <br />
          Chris is the current CFO of AAR hospital. He has an MBA from
          Strathmore Business School. Member of ICPAK and has also undertaken
          executive program with IESE in Barcelona.
        </p>
      );
    },
    imageSrc: chrisImage,
    phone: "+254712345678",
    linkedin: "https://www.linkedin.com/",
    email: "chris.otieno@example.com",
  },
  {
    name: "Denis Nyanja",
    position: "Founding Partner",
    content: () => {
      return (
        <p>
          Denis brings 13 years of experience in finance, strategy and
          operations. Denis worked with KPMG's audit and compliance business for
          5 years. Denis then supported GiveDirectly's, a multinational non
          profit Fintech, growth as Finance Director to reach $ 200m in annual
          budget across 12 African countries. <br />
          <br />
          Denis has an MBA from Strathmore Business School, has taken executive
          programs with IESE and Harvard Business Schools and is a member of
          ICPAK.
        </p>
      );
    },
    imageSrc: denisImage,
    phone: "+254712345678",
    linkedin: "https://www.linkedin.com/",
    email: "denis.nyanja@example.com",
  },
];

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const TeamSection = () => {
  const [active, setActive] = useState(null);
  const id = useId();
  const ref = useRef(null);

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {active && (
          <div className="fixed inset-0 grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.name}-${id}`}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.05 } }}
              className="flex absolute top-4 right-4 items-center justify-center bg-white rounded-full h-8 w-8 shadow-md"
              onClick={() => setActive(null)}
            >
              <X size={20} />
            </motion.button>
            <motion.div
              layoutId={`card-${active.name}-${id}`}
              ref={ref}
              className="w-full max-w-[500px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-white sm:rounded-3xl overflow-hidden shadow-xl"
            >
              <motion.div layoutId={`image-${active.name}-${id}`}>
                <img
                  src={active.imageSrc}
                  alt={active.name}
                  className="w-full h-80 object-cover object-top"
                />
              </motion.div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <motion.h3
                      layoutId={`name-${active.name}-${id}`}
                      className="text-2xl font-semibold mb-1"
                    >
                      {active.name}
                    </motion.h3>
                    <motion.p
                      layoutId={`position-${active.name}-${id}`}
                      className="text-lg text-[#005857]"
                    >
                      {active.position}
                    </motion.p>
                  </div>
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex space-x-3"
                  >
                    <a
                      href={`tel:${active.phone}`}
                      className="text-gray-400 hover:text-gray-600"
                    >
                      <Phone size={18} />
                    </a>
                    <a
                      href={active.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-gray-600"
                    >
                      <Linkedin size={18} />
                    </a>
                    <a
                      href={`mailto:${active.email}`}
                      className="text-gray-400 hover:text-gray-600"
                    >
                      <Mail size={18} />
                    </a>
                  </motion.div>
                </div>
                <motion.div
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-gray-600 text-sm h-48 overflow-y-auto pr-2"
                  style={{
                    scrollbarWidth: "thin",
                    scrollbarColor: "#CBD5E0 #F1F5F9",
                  }}
                >
                  {active.content()}
                </motion.div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-sm font-semibold text-[#005857] uppercase tracking-wide mb-2">
              Expertise
            </h3>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get to know the leadership team and key members.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                layoutId={`card-${member.name}-${id}`}
                onClick={() => setActive(member)}
                className="flex flex-col items-center cursor-pointer"
              >
                <motion.div
                  layoutId={`image-${member.name}-${id}`}
                  className="w-full aspect-[4/3] mb-6 overflow-hidden rounded-lg"
                >
                  <img
                    src={member.imageSrc}
                    alt={member.name}
                    className="w-full h-full object-cover object-top"
                  />
                </motion.div>

                <motion.h3
                  layoutId={`name-${member.name}-${id}`}
                  className="text-2xl font-semibold"
                >
                  {member.name}
                </motion.h3>
                <motion.p
                  layoutId={`position-${member.name}-${id}`}
                  className="text-lg text-[#005857]"
                >
                  {member.position}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamSection;
