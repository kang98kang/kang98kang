import * as D from "../data";

export default function Tailwindcss() {
  return (
    <div className="bg-black">
      <p className="w-full p-4 text-3xl text-white">Tailwindcss</p>
      <p className="italic text-gray-50 line-clamp-1">
        {D.randomParagraphs(10)}
      </p>
      <button className="btn btn-primary " style={{ textTransform: "none" }}>
        button
      </button>
    </div>
  );
}
