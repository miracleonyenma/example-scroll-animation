"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const SectionComponent: React.FC<{
  title: string;
  description: string;
  image: string;
}> = ({ title, description, image }) => {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    amount: 0.5,
  });

  useEffect(() => {
    console.log("Element is in view: ", isInView);
  }, [isInView]);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: isInView ? 1 : 0 }}
      ref={ref}
      className="flex flex-col relative min-h-screen items-center justify-center gap-4 p-8 sm:p-16 font-[family-name:var(--font-geist-sans)]"
    >
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        style={{
          position: "fixed",
          top: 0,
          left: "0",
          width: "100%",
          height: "100%",
        }}
        animate={{
          y: isInView ? 0 : -100,
          opacity: isInView ? 1 : 0,
        }}
        exit={{ y: -100, opacity: 0 }}
        transition={{
          duration: 0.5,
          ease: "easeOut",
        }}
        className="flex gap-12 justify-center items-center"
      >
        <header>
          <h1 className="text-4xl font-bold">{title}</h1>
          <p className="text-lg">{description}</p>
        </header>
        <figure>
          <Image
            src={image}
            alt="Section Image"
            width={640}
            height={480}
            className="rounded-lg shadow-lg object-cover w-72 h-56"
          />
        </figure>
      </motion.div>
    </motion.section>
  );
};

export default function Home() {
  const [sections] = useState([
    {
      title: "Section 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image:
        "https://images.unsplash.com/photo-1738168346641-6aedb68a6c99?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Section 2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image:
        "https://images.unsplash.com/photo-1736821481668-2cb07ceed73b?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Section 3",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image:
        "https://images.unsplash.com/photo-1633158165793-c48be169c242?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ]);
  return (
    <main>
      {sections.map((section, index) => (
        <SectionComponent key={index} {...section} />
      ))}
    </main>
  );
}
