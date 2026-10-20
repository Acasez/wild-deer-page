import { Helmet } from "react-helmet-async";

export default function RPGOverview() {
  return (
    <>
      <Helmet>
        <title>Maps - Villrein.no</title>
      </Helmet>
      <div className="m-5 text-text-black">
        <h1 className="text-xl">Place of Improvement One, Maps</h1>
        <p>
          I like the interactive maps you have, but I saw multiple UX
          improvements that could be made on it, especially when it comes to
          clicking on them. It could be that these suggestions are potently not
          possible to implement because the maps are from ESRI
        </p>
      </div>

      <img
        src="./images/MapOverview.JPG"
        alt="Map view on the site"
        className="w-full"
      />
    </>
  );
}
