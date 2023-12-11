import { CarouselContainer } from "./CarouselContainer";
import { SocialLinks } from "./SocialLinks";

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-between gap-8 py-16 lg:flex-row">
      <div className="mb-4 flex flex-col gap-3 lg:mb-0">
        <span
          className="
          flex items-center justify-center gap-2 text-xs font-light
          uppercase text-gray-600 dark:text-gray-400 sm:text-sm
          lg:justify-start
         "
        >
          <span className="block h-[1px] w-4 bg-blue-400" />
          I&apos;m here to talk about tech
        </span>
        <h1 className="text-center text-3xl font-extrabold text-gray-900 dark:text-gray-100 lg:text-left">
          Hi, my name is <span className="text-blue-400">Tiago Araujo!</span>
        </h1>
        <p className="text-text-xl text-center font-medium text-gray-700 dark:text-gray-300 lg:text-left">
          I&apos;m a IT student interested in web development, cybersecurity,
          open-source, command line tools and music. So get ready and let&apos;s
          get start!
        </p>
        <SocialLinks />
      </div>
      <CarouselContainer />
    </section>
  );
};

export { Hero };
