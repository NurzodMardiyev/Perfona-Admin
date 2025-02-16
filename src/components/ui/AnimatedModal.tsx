"use client";
import React from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "../ui/animated-modal";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { BiSolidSelectMultiple } from "react-icons/bi";

export function AnimatedModalDemo({ collapsed }) {
  const links = [
    { to: "/selectCloseChanel", name: "Yopiq kanal qo'shish" },
    { to: "/selectCourses", name: "Kurs qo'shish" },
  ];
  return (
    <div className="flex items-center justify-center ">
      <Modal>
        <ModalTrigger
          className={`bg-black dark:bg-white dark:text-black text-white flex justify-center group/modal-btn w-full ${
            collapsed ? "h-[30px]" : ""
          }`}
        >
          <span
            className={`group-hover/modal-btn:translate-x-60 text-center transition duration-500 ${
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
            <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
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
                    to={link.to}
                    className="w-[200px] h-[130px] flex items-center justify-center rounded-md bg-gradient-to-t  from-[#0230C7] to-[#0097FF] text-white gap-2 hover:text-white"
                  >
                    <BiSolidSelectMultiple />
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
            <div className="py-10 flex flex-wrap gap-x-4 gap-y-6 items-start justify-start max-w-md mx-auto">
              <div className="flex  items-center justify-center">
                🎯
                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                  Shaxsiylashtirilgan Kontent
                </span>
              </div>
              <div className="flex items-center justify-center">
                💰
                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                  Qulay Toʻlov Tizimi
                </span>
              </div>
              <div className="flex items-center justify-center">
                🎮
                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                  Interaktiv Imkoniyatlar
                </span>
              </div>
              <div className="flex  items-center justify-center">
                📥
                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                  Materiallarni Yuklab Olish Imkoniyati
                </span>
              </div>
              <div className="flex items-center justify-center">
                📊
                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                  Progressni Kuzatish
                </span>
              </div>
              <div className="flex items-center justify-center">
                🛠️
                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                  Qoʻllab-quvvatlash va Konsultatsiya
                </span>
              </div>
            </div>
          </ModalContent>
        </ModalBody>
      </Modal>
    </div>
  );
}
