// context/ContextApi.tsx
import React, { createContext, useState, ReactNode, useEffect } from "react";
import {
  useInfiniteQuery,
  useMutation,
  useQueries,
  useQuery,
  useQueryClient,
} from "react-query";
import { useLocation, Location } from "react-router-dom";
import { PerfonaAdmin } from "../feature/queries";
import { message } from "antd";

// Tipni aniqlash
interface category {
  id: number;
  name: string;
  is_active: boolean;
}

interface Channel {
  id: number;
  name: string;
  about_video: string;
  author: number;
  categories: category[];
  channel_link: string;
  created_at: string;
  description: string;
  is_active: boolean;
  photo: string;
  updated_at: string;
}

interface ModalContextType {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  collapsed: boolean;
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
  channels: Channel[];
}

// Kontekstni yaratish
export const ModalContext = createContext<ModalContextType | undefined>(
  undefined
);

// ModalProvider komponenti
export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [channels, setChannels] = useState([]);
  // const [courses, setCourses] = useState([]);
  const location = useLocation();
  console.log(channels);

  // console.log(collapsed);

  const allowedPathname = ["/admin/select_channel", "/admin/select_course"];

  const queryClient = useQueryClient();
  const isHaveContent = useMutation(() => PerfonaAdmin.isHaveContent(), {
    onSuccess: (data) => {
      queryClient.invalidateQueries();
      console.log(data);

      if (data.status !== "OK") {
        message.error("Content borligiga tekshirish operatsiyasida xatolik!");
      } else if (
        data?.data?.channels.length === 0 &&
        data?.data?.courses.length === 0
      ) {
        setOpen(true);
      } else {
        console.log(data?.data?.channels);
        setChannels(data?.data?.channels);
        setOpen(false);
      }
      // console.log(data);
    },
    onError: () => {
      console.log("Mutation isHaveContentda xatolik!");
    },
  });

  useEffect(() => {
    if (allowedPathname.includes(location.pathname)) {
      console.log("Siz kanal qo'shish bo'limidasiz!");
    } else {
      console.log("Kanal qo'shish bo'limiga o'ting!");
      isHaveContent.mutate();
    }
  }, [location.pathname]);

  return (
    <ModalContext.Provider
      value={{ open, setOpen, collapsed, setCollapsed, channels }}
    >
      {children}
    </ModalContext.Provider>
  );
};
