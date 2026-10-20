interface MapPointerProps {
  name: string;
  desc: string;
}

export default function MapPointer({ name, desc }: MapPointerProps) {
  return (
    <div className="rounded-lg flex flex-col w-80 h-30 mx-auto border border-bg-obsidian shadow-lg mb-5">
      <div className="bg-bg-stone text-text-light flex flex-row justify-between">
        <h1 className="text-lg bold mx-2">{name}</h1>
        <button className="mx-2 cursor-pointer">X</button>
      </div>
      <div className="flex flex-wrap">
        <p className="text-sm mx-2 m-1">
          {desc}{" "}
          <a className="text-text-calm underline cursor-pointer">Lær mer her</a>
        </p>
      </div>
      <div className="flex flex-row justify-between mt-auto">
        <a className="text-text-calm underline mx-2 text-sm cursor-pointer">
          Zoom till
        </a>
        <button className="mx-2 text-lg cursor-pointer">...</button>
      </div>
    </div>
  );
}
