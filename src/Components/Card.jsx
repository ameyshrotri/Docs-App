import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";

const Card = ({ data, reference }) => {
  return (
    <>
      <motion.div
        drag
        dragConstraints={reference}
        whileDrag={{ scale: 1.1 }}
        dragElastic={0.1}
        dragTransition={{ bounceStiffnesS: 600, bounceDamping: 10 }}
        className="relative w-60 h-72 flex-shrink-0 rounded-[45px] bg-zinc-900/90 text-white py-10 px-8 overflow-hidden"
      >
        <FaRegFileAlt />
        <p className="text-sm mt-5 font-semibold leading-tight">{data.desc} </p>
        <div className="footer absolute bottom-0  w-full left-0  ">
          <div className="flex items-center justify-between mb-3 py-3 px-10">
            <h5>{data.filesize} </h5>
            <span className="w-7 h-7 p-2 bg-zinc-600 rounded-full flex item-center justify-center ">
              {data.close ? (
                <IoClose />
              ) : (
                <LuDownload size=".7em" color="#fff" />
              )}
            </span>
          </div>
          {data.tag.isOpen && (
            <div
              className={`tag w-full py-4 ${
                data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"
              } flex items-center justify-center`}
            >
              <h3 className="text-sm font-semibold">{data.tag.Tagtitle}</h3>
            </div>
          )}
        </div>
      </motion.div>
    </>
  );
};

export default Card;
