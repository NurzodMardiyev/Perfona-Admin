"use client";
import React, { useContext, useEffect, useState } from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalTrigger,
} from "../ui/animated-modal";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { BiSolidSelectMultiple } from "react-icons/bi";
import { cn } from "../../lib/utils";
import { ModalContext } from "../../context/ContextApi";

interface AnimatedModalDemoProps {
  collapsed?: boolean;
}
// interface stateType {
//   open: boolean;
//   setOpen: (open: boolean) => void;
// }

// type ModalContextType = {
//   setOpen: React.Dispatch<React.SetStateAction<boolean>>;
// };

// const useModal = () => {
//   const context = useContext(ModalContext) as ModalContextType;

//   if (!context) {
//     throw new Error("useModal must be used within a ModalProvider");
//   }
//   return context;
// };

export function AnimatedModalDemo({ collapsed }: AnimatedModalDemoProps) {
  // const { setOpen } = useModal();
  const useModal = () => {
    const context = useContext(ModalContext);
    if (!context) {
      throw new Error("useModal must be used within a ModalProvider");
    }
    return context;
  };

  const { open, setOpen } = useModal();
  const navigate = useNavigate();
  const links = [
    { to: "/admin/select_channel", name: "Yopiq kanal qo'shish" },
    { to: "/admin/select_course", name: "Kurs qo'shish" },
  ];

  return (
    <div className="flex items-center justify-center">
      {/* <Modal> */}
      <ModalTrigger
        className={`bg-black dark:bg-white dark:text-black text-white flex justify-center group/modal-btn w-full transition-all duration-150 ${
          collapsed ? "h-[30px]" : ""
        }`}
      >
        <span
          className={`group-hover/modal-btn:translate-x-60 text-center md:text-[16px] text-[12px]  transition duration-500 italic ${
            collapsed ? "hidden" : ""
          }`}
        >
          Taʻrif tanlash!
        </span>
        <div
          className={`-translate-x-60 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20 ${
            collapsed ? "translate-x-[0.1px]" : ""
          } `}
        >
          ↗️
        </div>
      </ModalTrigger>
      <ModalBody>
        <ModalContent>
          <h4
            className=" md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8 text-[13px] "
            style={{ fontFamily: "IvyEpic, sans-serif" }}
          >
            Siz qoʻshmoqchi boʻlgan
            <span className="px-1 py-0.5 rounded-md bg-gray-100 dark:bg-neutral-800 dark:border-neutral-700 border border-gray-200">
              Taʻrifni
            </span>{" "}
            tanlang! ⭐
          </h4>
          <div className="flex justify-center items-center ">
            {links.map((link, idx) => (
              <motion.div
                key={"images" + idx}
                style={{
                  rotate: Math.random() * 20 - 10,
                }}
                whileHover={{
                  scale: 1.1,
                  rotate: 0,
                  zIndex: 100,
                }}
                whileTap={{
                  scale: 1.1,
                  rotate: 0,
                  zIndex: 100,
                }}
                className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 flex-shrink-0 overflow-hidden"
              >
                <Link
                  to={`${link.to}`}
                  onClick={() => {
                    setOpen(false);
                  }}
                  className="md:w-[200px] md:h-[130px] w-[180px] h-[110px] text-[12px] md:text-[16px] flex items-center border justify-center rounded-md bg-gradient-to-t  from-[#0230C7] to-[#0097FF] text-white gap-2 hover:text-white"
                >
                  <BiSolidSelectMultiple />
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </div>
          <div className="py-10 flex flex-wrap gap-x-4 gap-y-6 items-start justify-start max-w-md mx-auto ">
            <div className="flex  items-center justify-center">
              🎯
              <span className="text-neutral-700 dark:text-neutral-300 md:text-sm text-[11px]">
                Shaxsiylashtirilgan Kontent
              </span>
            </div>
            <div className="flex items-center justify-center">
              💰
              <span className="text-neutral-700 dark:text-neutral-300 md:text-sm text-[11px]">
                Qulay Toʻlov Tizimi
              </span>
            </div>
            <div className="flex items-center justify-center">
              🎮
              <span className="text-neutral-700 dark:text-neutral-300 md:text-sm text-[11px]">
                Interaktiv Imkoniyatlar
              </span>
            </div>
            <div className="flex  items-center justify-center">
              📥
              <span className="text-neutral-700 dark:text-neutral-300 md:text-sm text-[11px]">
                Materiallarni Yuklab Olish Imkoniyati
              </span>
            </div>
            <div className="flex items-center justify-center">
              📊
              <span className="text-neutral-700 dark:text-neutral-300 md:text-sm text-[11px]">
                Progressni Kuzatish
              </span>
            </div>
            <div className="flex items-center justify-center">
              🛠️
              <span className="text-neutral-700 dark:text-neutral-300 md:text-sm text-[11px]">
                Qoʻllab-quvvatlash va Konsultatsiya
              </span>
            </div>
          </div>
        </ModalContent>
      </ModalBody>
      {/* </Modal> */}
    </div>
  );
}
