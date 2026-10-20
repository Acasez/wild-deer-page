import { Helmet } from "react-helmet-async";

export default function Language() {
  return (
    <>
      <Helmet>
        <title>Language - Villrein.no</title>
      </Helmet>
      <h1 className="text-xl text-center m-2 underline">
        Place of Improvement One, Translation
      </h1>
      <p className="mx-50 mt-3">
        The second improvement suggestion is a bit simpler, get all the pages
        translated to English. If you want to get information out it is the
        language to do it in, and foreign tourists wanting to see wild deer will
        speak it. It nice that there are some pages translated, but getting the
        rest translated feels like a priority.
        <br />
        While Norwegian and Swedish are close enough that I can read most pages
        with a bit of difficulty, I don't think I should be the one to translate
        it.
        <br />I also see you have a German translation, which is good too. I've
        heard there is a lot of german tourists visiting Swedish forests and I
        guess its the same in Norway. Unfortunately my German is{" "}
        <i>nicht gut</i>, been 13 years or so since I studied any.
      </p>
    </>
  );
}
