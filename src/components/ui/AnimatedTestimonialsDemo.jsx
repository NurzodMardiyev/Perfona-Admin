import { AnimatedTestimonials } from "./animated-testimonials";
import img1 from "../../../public/images/login/11.png";
import img2 from "../../../public/images/login/12.png";
import img3 from "../../../public/images/login/13.png";
import img4 from "../../../public/images/login/14.png";
import img5 from "../../../public/images/login/15.png";

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
