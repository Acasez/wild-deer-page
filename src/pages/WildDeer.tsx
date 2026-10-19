import { Helmet } from "react-helmet-async";
import LinkCard from "../components/LinkCard";
import WavyPatterns from "../components/WavyPatterns";

export default function WildDeer() {
  return (
    <>
      <Helmet>
        <title>Wild Deer - Villrein.no</title>
      </Helmet>
      <div className="relative">
        {" "}
        <div className="absolute top-30 left-1/2 -translate-x-1/2 p-3 px-5 bg-gray-800/30 rounded-2xl z-10">
          <h1 className="text-center text-5xl text-text-light">Hej</h1>
        </div>
        <img src="./images/DeerPhoto.jpg" className="w-full" />
        <WavyPatterns color="#f3f4f6" />
      </div>
      <div className="bg-gray-100">
        <p className="text-center text-xl bold underline">
          Hi, I'm Edvin Skogsholm Sanne.
        </p>
        <p className="text-center mx-70">
          No, I haven't completely copied your web page. I'm not that crazy, but
          I gotta say I like the layout and design you have already. Anyway here
          is my application as Web Designer for VillRein. I made this page in
          React with Typescript since that is what I'm most used to, but I can
          work with Wordpress too. Below you can read about me and why, I'm
          interested in and would fit well for the job and above you can click
          on the tabs to see my suggested improvements to the site.
        </p>
        <p className="text-center mt-3 mb-5 mx-70">
          I'm a game designer, web developer and programmer from sweden. I’ve
          studied game development for 5 years at Skövde University and have a
          bachelor’s degree in game design, and a master’s in Digital Narration
          and Cultural Heritage. I've also studied fullstack programming at LTU
          and a courses in UI/UX design.
        </p>
        <p className="text-center mt-3 mb-5 mx-70">
          My previous experiences include a strategic board game about building
          sustainable cities which I made for the municipality of Mariestad in
          Sweden. I worked on it between 2022 and 2024 and it was professionally
          published and is now used in education in Mariestad. I led the design
          and development process from first pitch to final product and worked
          with people at the municipality to make it accurate. I worked with a
          few illustrators on the project, and collaborated on game board and
          card layout and design.
        </p>
        <div className="flex flex-row justify-center gap-5">
          <LinkCard
            url="https://mariestad.se/nyheter/nyhetsarkiv/2024-06-03-klimatspelet-mariestad-bidrar-till-den-grona-omstallningen"
            label="Municipality Project Page"
          />
        </div>
        <p className="text-center mt-3 mb-5 mx-70">
          I've worked one my different other projects too, mostly games of
          different sorts. You can find and read all about them on my portfolio
          linked below. I've also linked the web page for Kastorix, an TTRPG
          (tabletop roleplaying game) I'm creating. The web page has lore pages
          and maps, an interactive character sheets for player character and DM
          Screen to create monsters and run the game.
        </p>
        <div className="flex flex-row justify-center gap-5">
          <LinkCard url="https://acasez.github.io/" label="Portfolio Page" />
          <LinkCard
            url="https://acasez.github.io/kastorixv2"
            label="Kastorix TTRPG"
          />
        </div>
        <p className="text-center mt-3 mb-5 mx-70">
          As I mentioned earlier I think your web page is already pretty good,
          and I would like to help make it even better. I think this job would a
          great job for me too to get some proffional experience, and I wouldn't
          mind continuing working on the web page after a year given the
          opportunity. I also think my experience and skills could help improve
          the page. <br />
          While I'm mostly a city person, I really like nature and can't live
          without taking long walks in nature every so often. Informing people
          about nature is extremely creatures important, especially when climate
          change is destabilizing it. And I can't deny that deer are{" "}
          <i>majestic creatures</i>.
        </p>
        <p className="text-center mt-3 mb-5 mx-70">
          Thanks for reading, and I'll hopefully see on you an interview.{" "}
          <span className="font-semibold">Ha de bra!</span>
        </p>
      </div>
    </>
  );
}
