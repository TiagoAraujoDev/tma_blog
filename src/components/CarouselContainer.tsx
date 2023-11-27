"use client";

import Image from "next/image";

import { Carousel } from "./Carousel";

const logos = [
  "/logos/archlinux.png",
  "/logos/hack.png",
  "/logos/node.png",
  "/logos/shell_script.png",
  "/logos/java.png",
  "/logos/nextjs.png",
  "/logos/react.png",
  "/logos/typescript.png",
  "/logos/javascript.png",
  "/logos/html.png",
  "/logos/css.png",
  "/logos/tailwindcss.png",
  "/logos/jest.png",
  "/logos/linux.png",
  "/logos/lua.png",
  "/logos/python.png",
  "/logos/mongodb.png",
  "/logos/aws.png",
  "/logos/docker.png",
  "/logos/postgresql.png",
  "/logos/info_sec.jpg",
];

const CarouselContainer = () => {
  return (
    <>
      <Carousel align="center" loop>
        {logos.map((logo, idx) => {
          return (
            <div
              className="min-w-0 h-80 flex-[0_0_100%]"
              key={idx}
            >
              <Image
                src={logo}
                width={300}
                height={300}
                className="object-contain mx-auto h-80"
                priority
                alt="alt"
              />
            </div>
          );
        })}
      </Carousel>
    </>
  );
};

export { CarouselContainer };
