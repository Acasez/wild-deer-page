interface LinkProps {
  url: string;
  label: string;
}

export default function LinkCard({ url, label }: LinkProps) {
  return (
    <a
      key={`${url}-${label}`}
      href={url}
      className="p-5 bg-blue-400 text-amber-50  rounded-2xl hover:translate-2"
      target="_blank"
      rel="noopener noreferrer"
    >
      {label}
    </a>
  );
}

/* .project-link {
    display: inline-block;
    padding: 8px 16px;
    border-radius: 6px;
    font-size: 1em;
    font-weight: 500;
    text-decoration: none;
    color: white !important;
    transition: all 0.2s ease;
}

.project-link:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
} */
