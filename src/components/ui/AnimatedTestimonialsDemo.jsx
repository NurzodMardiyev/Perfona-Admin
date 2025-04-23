import { AnimatedTestimonials } from "./animated-testimonials";
import img1 from "../../../public/images/login/1.jpeg";
import img2 from "../../../public/images/login/2.jpeg";
import img3 from "../../../public/images/login/3.jpeg";
import img4 from "../../../public/images/login/4.jpeg";
import img5 from "../../../public/images/login/5.jpeg";

export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      name: "Sarah Chen",
      src: img1,
    },
    {
      name: "Michael Rodriguez",
      src: img2,
    },
    {
      name: "Emily Watson",
      src: img3,
    },
    {
      name: "James Kim",
      src: img4,
    },
    {
      name: "Lisa Thompson",
      src: img5,
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
