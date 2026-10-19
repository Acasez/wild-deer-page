import { Link } from "react-router-dom";
import "../CSS/ProjectLinks.css";

interface LinkProps {
  webpageLinks?: { url: string; label: string }[];
  deerLinks?: { linkTo: string; label: string }[];
}

export default function ProjectLinks({
  webpageLinks = [],
  deerLinks = [],
}: LinkProps) {
  return (
    <>
      <div className="project-links">
        {/* Custom webpage links */}
        {webpageLinks.map(({ url, label }) => (
          <a
            key={`${url}-${label}`}
            href={url}
            className="project-link web"
            target="_blank"
            rel="noopener noreferrer"
          >
            {label}
          </a>
        ))}

        {/* Links to other part of portfolio */}
        {deerLinks.map(({ linkTo, label }) => (
          <Link
            key={`${linkTo}-${label}`}
            to={linkTo}
            className="project-link pf"
          >
            {label}
          </Link>
        ))}
      </div>
    </>
  );
}
