import { Outlet, useNavigate, useRouter } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { Box } from "@chakra-ui/react";
import { useAuth } from "../../hooks/useAuth";
import { useEffect } from "react";

export default function Layout() {
  const { state } = useRouter();
  const key = state.location.pathname + state.location.search;
  const {isLogged} = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (!isLogged) navigate({to: "/login"})
  })

  const isHomePage = state.location.pathname === "/";

  return (
    <Box>

      <AnimatePresence mode="wait">
        {!isHomePage ? (
          <motion.div
            key={key}
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Outlet />
          </motion.div>
        ) : (
          <Outlet />
        )}
      </AnimatePresence>
    </Box>
  );
}
