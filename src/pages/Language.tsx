import { Helmet } from "react-helmet-async";

export default function Language() {
  return (
    <>
      <Helmet>
        <title>Language - Villrein.no</title>
      </Helmet>
      <p className="mx-50 mt-3">
        The second improvement suggestion is a bit simpler, get all the pages
        translated to English. If you want to get information out it is the
        language to do it in, and foreign tourists wanting to see wild deer will
        speak it. It nice that there are some pages translated, but getting the
        rest translated feels like a priority.
        <br />
        Unfortunately while Norwegian and Swedish are close enough that I can
        read most pages with a bit of difficulty, I don't think I should be the
        one to translate it.
      </p>
    </>
  );
}
