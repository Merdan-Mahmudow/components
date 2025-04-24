import { ReactNode } from "react";
import { MotionBox } from "../../motion";

const variants = {
  initial: { x: "100%", opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: "-100%", opacity: 0 },
};

export const AnimatedRouteWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <MotionBox
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.4, ease: "easeInOut" }}
      style={{ position: "absolute", width: "100%" }}
    >
      {children}
    </MotionBox>
  );
};
