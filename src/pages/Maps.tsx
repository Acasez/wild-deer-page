import { Helmet } from "react-helmet-async";

export default function Maps() {
  return (
    <>
      <Helmet>
        <title>Maps - Villrein.no</title>
      </Helmet>
      <div className=" text-text-black">
        <h1 className="text-xl text-center m-2 underline">
          Place of Improvement One, Maps
        </h1>
        <img
          src="./images/MapOverview.JPG"
          alt="Map view on the site"
          className="w-full"
        />
        <p className="mx-50">
          I like the interactive maps you have, but I saw multiple UX (user
          experience) improvements that could be made on it, especially when it
          comes to the interactivity. It could be that these suggestions are
          hard or impossible to implement because the maps are using a library
          from ESRI, and the limits might come from there. Though on the other
          hand, if all ESRI is used for is rendering a map with some areas that
          should be something I could set up myself. I have been planning to
          make an interactive map view with similar functionality for my TTRPG
          page, that seems possible from my research.
        </p>
      </div>
      <div className="text-text-black">
        <p className="mx-50 mt-3">
          When hovering over a region in the map, the cursor doesn't turn into a
          pointer. This is something you might not notice at first, but compare
          to hovering over any button on my page or one the current site, and
          you see the difference. This can cause some uncertainty on what is an
          interactive object, and what isn't. It might seem like a small thing,
          but it could cause visitors to miss that the map regions can be
          clicked on at all.
        </p>
      </div>
      <img
        src="./images/MapObject.JPG"
        alt="Map view focused on one region"
        className="mx-auto block"
      />
      <div className=" text-text-black">
        <p className=" mx-30">
          Then the map region view is pretty basic. There is some good space
          here for a basic description of the region and maybe a photo. I did a
          possible design below, but there is definitely room for more features
          and styling on it. Moving the name up to top row gives more space for
          a description in the box itself. Maybe you can expand the box to see a
          bigger summary and photos without clicking on it. It should be easy to
          click around and see different areas.
        </p>
      </div>
      <div className="rounded-lg flex flex-col w-80 h-30 mx-auto border border-bg-obsidian shadow-lg mb-5">
        <div className="bg-bg-stone text-text-light flex flex-row justify-between">
          <h1 className="text-lg bold mx-2">Nordfljella villreinområde</h1>
          <button className="mx-2 cursor-pointer">X</button>
        </div>
        <div className="flex flex-wrap">
          <p className="text-sm mx-2 m-1">
            Villreinområdet har et samlet tellende areal på ca. 3000 km²...{" "}
            <a className="text-text-calm underline cursor-pointer">
              Lær mer her
            </a>
          </p>
        </div>
        <div className="flex flex-row justify-between mt-auto">
          <a className="text-text-calm underline mx-2 text-sm cursor-pointer">
            Zoom till
          </a>
          <button className="mx-2 text-lg cursor-pointer">...</button>
        </div>
      </div>
    </>
  );
}
