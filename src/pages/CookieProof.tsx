import { Helmet } from "react-helmet-async";

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>CookieProof - Villrein.no</title>
      </Helmet>
      <h1 className="text-xl text-center m-2 underline">
        Place of Improvement Three, Cookies and Videos
      </h1>
      <p className="mx-50 mt-3">
        I was looking around for a third potential improvement, and found this
        empty area on https://villrein.no/banken/, which looked suspicious. The
        text mentioned a video but nothing loaded so I did checked via inspect
        element. And yes, turns out there was a video there, but hidden since I
        blocked cookies when I first entered the site.
      </p>
      <img
        src="./images/EmptyArea.JPG"
        alt="Map view on the site"
        className="w-full"
      />
      <p className="mx-50 mt-3">
        Opening the page in incognito I could indeed see some embedded youtube
        videos, but not everyone is going to think of doing that. I actually
        have a Firefox extension to automatically block cookies for me, and I
        know I'm not the only one. I saw on the Jakt page there is actually a
        notice to accept cookies in order to be able to interact with the videos
        there. So I would would want to look around and set up "Enable Cookies
        to see this" so visitors don't miss videos and other fun content. <br />
        Or, even better yet, see where you actually need cookies. They can be
        great for storing data, and are needed for things like login systems to
        work, but to display a video? Shouldn't need to accept a cookie for
        that.
      </p>
      <img
        src="./images/CookieElement.JPG"
        alt="Map view on the site"
        className="w-full"
      />
    </>
  );
}
