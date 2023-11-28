"use client";

import Image from "next/image";

import { Carousel } from "./Carousel";

const logos = [
  "/logos/shell_script.png",
  "/logos/node.png",
  "/logos/archlinux.png",
  "/logos/hack.png",
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
  "/logos/prisma.png",
  "/logos/typeorm.png",
  "/logos/mongodb.png",
  "/logos/aws.png",
  "/logos/docker.png",
  "/logos/postgresql.png",
];

const CarouselContainer = () => {
  return (
    <>
      <Carousel align="center" loop>
        {logos.map((logo, idx) => {
          return (
            <div className="h-80 min-w-0 flex-[0_0_100%]" key={idx}>
              <Image
                src={logo}
                width={300}
                height={300}
                className="mx-auto h-80 object-contain"
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
