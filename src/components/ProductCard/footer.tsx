import { HStack } from "@chakra-ui/react";
import { MotionButton, MotionText } from "../../motion";
import { AnimatePresence } from "framer-motion";

export function CardFooter({
    increment,
    decrement,
    count,
}: {
    increment: () => void;
    decrement: () => void;
    count: number;
}) {

    return (
        <HStack w="full" justifyContent="space-between" alignItems="center" bg={"teal.500"} rounded={"xl"}>
            <MotionButton
                size={"sm"}
                fontSize={["xs", "sm", "md"]}
                bg="teal.500"
                rounded="full"
                onClick={decrement}
                px="3"
                py="2"
                color={"white"}
            >
                -
            </MotionButton>
            <AnimatePresence mode="wait">
                <MotionText
                    key={count}
                    initial={{ opacity: 0, scale: 0.7 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0.5, scale: 0.9 }}
                    transition={{ duration: 0.09 }}
                    fontSize="1rem"
                    fontWeight="bold"
                    width="2rem"
                    textAlign="center"

                >
                    {count}
                </MotionText>
            </AnimatePresence>

            <MotionButton
                bg="teal.500"
                rounded="full"
                onClick={increment}
                px="3"
                py="2"
                size={"sm"}
                fontSize={["xs", "sm", "md"]}
                color={"white"}
            >
                +
            </MotionButton>

        </HStack>
    );
}
