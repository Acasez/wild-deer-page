import { Helmet } from "react-helmet-async";

export default function WildDeer() {
  return (
    <>
      <Helmet>
        <title>Wild Deer - Villrein.no</title>
      </Helmet>
      <div className="absolute top-30 left-1/2 -translate-x-1/2 p-3 px-5 bg-gray-800/30 rounded-2xl">
        <h1 className="text-center text-5xl text-text-light">Hej</h1>
      </div>
      <img src="./images/DeerPhoto.jpg"></img>
      <p className="text-center">
        No, I haven't completely copied your web page in React. That would have
        taken way too long. But here is my application as Web Designer for
        VillRein.
      </p>
    </>
  );
}
