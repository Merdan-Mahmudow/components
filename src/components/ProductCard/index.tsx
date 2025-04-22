import { Card, Image, Text, For, Box, Icon } from "@chakra-ui/react";
import {  MotionButton, MotionCard } from "../../motion";
import { useState } from "react";
import { CardFooter } from "./footer";
import { FaCartShopping } from "react-icons/fa6";

export function ProductCard({variants}: {variants: any}) {
  const [count, setCount] = useState(0)
  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => Math.max(0, prev - 1));
  return (

    <For each={["1", "2"]}>
      {(index) => (
        <MotionCard
          key={index}
          size={"sm"}
          w={["13em", "16em", "17em"]}
          maxW="24em"
          h={"auto"}
          overflow="hidden"
          rounded="2xl"
          shadow="md"
          display="flex"
          flexDirection="column"
          variants={variants}
        >
          <Box position="relative" h={["10em", "12em", "15em"]}>
            <Image
              src="https://blizko.by/system/notes/imagefbs/000/038/951/original/kupon.jpg?1668422754"
              alt="Green double couch with wooden legs"
              objectFit="cover"
              w="100%"
              h="100%"
            />
          </Box>

          <Card.Body p="4" gap="2" flex="1">
            <Text
              fontSize={["md", "lg", "xl"]}
              fontWeight="bold"
              letterSpacing={"1px"}
            >
              450₽
            </Text>
            <Card.Title fontSize={["md", "lg", "xl"]} fontWeight={"400"} letterSpacing={".5px"}>Баскет Дуэт Оригинальный</Card.Title>
            <Card.Title fontSize={["xs", "sm", "md"]} fontWeight={"300"} letterSpacing={".5px"} color={"gray.500"}>256 г</Card.Title>
          </Card.Body>

          <Card.Footer
            gap="2"
            justifyContent="space-between"
            alignItems="center"
            colorScheme="teal"
          >
            {count !== 0 &&
              <CardFooter
                increment={increment}
                decrement={decrement}
                count={count} />}

            {count === 0 &&
              <MotionButton
                size="sm"
                color={"white"}
                w={"full"}
                bg={"teal.500"}
                rounded={"xl"}
                onClick={increment}>
                <Icon as={FaCartShopping} /> В корзину
              </MotionButton>}

          </Card.Footer>
        </MotionCard>
      )}
    </For>

  )
}