import { Box, Button, Card, Grid, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

export const MotionBox = motion.create(Box)
export const MotionButton = motion.create(Button)
export const MotionText = motion.create(Text);
export const MotionGrid = motion.create(Grid)
export const MotionCard = motion.create(Card.Root)