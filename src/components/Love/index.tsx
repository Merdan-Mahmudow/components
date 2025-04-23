// LoveHearts.tsx
import { Box, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const MotionBox = motion(Box);

// Генерация случайного сердечка
const Heart = ({ i }: { i: number }) => {
  const x = Math.random() * 100 - 50;
  const delay = i * 0.2;

  return (
    <MotionBox
      position="absolute"
      left="50%"
      bottom="0"
      transform={`translateX(${x}px)`}
      fontSize="2xl"
      color="pink.400"
      animate={{
        y: [-10, -window.innerHeight - 100],
        opacity: [1, 0],
        rotate: [0, 360],
      }}
      transition={{ duration: 4, ease: "easeOut", delay }}
      pointerEvents="none"
    >
      💖
    </MotionBox>
  );
};

export const LoveHearts = () => {
  const [hearts, setHearts] = useState<number[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setHearts((h) => [...h, h.length]);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box position="relative" overflow="hidden" w="100%" h="100vh" bg="pink.50">
      <Text
        fontSize="4xl"
        fontWeight="bold"
        textAlign="center"
        mt="20"
        color="pink.600"
      >
        Я люблю Настю 💘
      </Text>

      {hearts.map((_, i) => (
        <Heart key={i} i={i} />
      ))}
    </Box>
  );
};
