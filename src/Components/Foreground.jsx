import React, { useRef } from "react";
import Card from "./Card";
const Foreground = () => {
  const ref = useRef(null);
  const data = [
    {
      desc: "this is first card.",
      filesize: ".9mbs",
      close: true,
      tag: { isOpen: true, Tagtitle: "Download Now", tagColor: "green" },
    },
    {
      desc: "this is first card.",
      filesize: ".9mbs",
      close: true,
      tag: { isOpen: true, Tagtitle: "Download Now", tagColor: "blue" },
    },
    {
      desc: "this is first card.",
      filesize: ".9mbs",
      close: true,
      tag: { isOpen: true, Tagtitle: "Download Now", tagColor: "green" },
    },
  ];
  return (
    <>
      <div
        ref={ref}
        className="fixed z-[3] top-0 left-0 w-full h-full flex gap-10 flex-wrap p-5"
      >
        {data.map((item, index) => (
          <Card data={item} reference={ref} />
        ))}
      </div>
    </>
  );
};

export default Foreground;
