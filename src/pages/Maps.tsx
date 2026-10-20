import { Helmet } from "react-helmet-async";

export default function RPGOverview() {
  return (
    <>
      <Helmet>
        <title>Maps - Villrein.no</title>
      </Helmet>
      <div className=" text-text-black">
        <h1 className="text-xl  mx-30">Place of Improvement One, Maps</h1>
        <p className=" mx-30">
          I like the interactive maps you have, but I saw multiple UX
          improvements that could be made on it, especially when it comes to
          clicking on them. It could be that these suggestions are potently not
          possible to implement because the maps are from ESRI, and the limits
          might come from there. <br />
          Though on the other hand, if all ESRI is used for is rendering a map
          with some areas that should be something I could set up myself. I have
          been planning to make an interactive map view with similar
          functionality for my TTRPG page
        </p>
      </div>
      <img
        src="./images/MapOverview.JPG"
        alt="Map view on the site"
        className="w-full"
      />
      <div className=" text-text-black">
        <p className=" mx-30">
          When hovering over a region in the map, the cursor doesn't turn into a
          pointer. This is something you might not notice at first, but compare
          to hovering over any button on my page or the main one and you see the
          difference. This can cause some uncertainty on what is an interactive
          object, and what isn't. It might seem like a small thing, but it could
          cause visitors to miss that the map regions can be clicked on at all.
        </p>
      </div>
      <img
        src="./images/MapObject.JPG"
        alt="Map view on the site"
        className="w-full"
      />
      <div className=" text-text-black">
        <p className=" mx-30">
          Then the map region view is pretty basic. There is some good space
          here for a basic description of the region and maybe a photo. People
          are unlikely to click on links, so having cool photos here could
          inspire them to visit regions they might not otherwise have thought
          to. Could maybe even have some markers on how likely you are to see
          wild deer there. Keep the More Info button, but maybe style it a bit.
        </p>
      </div>
      <div className="flex flex-row items-center">
        <div className="rounded-lg flex flex-col w-80 h-30">
          <div className="bg-bg-redwood text-text-light flex flex-row justify-between">
            <h1>Norfljella villreinområde</h1>
            <button>X</button>
          </div>
        </div>
      </div>
    </>
  );
}
