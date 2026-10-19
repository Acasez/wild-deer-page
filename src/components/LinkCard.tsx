interface LinkProps {
  url: string;
  label: string;
}

export default function LinkCard({ url, label }: LinkProps) {
  return (
    <a
      key={`${url}-${label}`}
      href={url}
      className="p-2 px-4 bg-blue-500 text-amber-50 border-3 border-blue-300  rounded-2xl hover:bg-blue-300 hover:text-bg-creature"
      target="_blank"
      rel="noopener noreferrer"
    >
      {label}
    </a>
  );
}
