import { Card, Flex, Icon, Image, Span, Text } from "@chakra-ui/react";
import { MotionBox, MotionButton, MotionCard } from "../../motion";
import { FaAngleRight } from "react-icons/fa6";
import { useNavigate } from "@tanstack/react-router";

export interface ImageURL {
    base: string
    details: string
}

export interface PizzaPrice {
    small: number
    medium: number
    large: number
}
export interface ProductItem {
    id: string;
    name: string;
    price: PizzaPrice;
    imageUrl: ImageURL;
    description: string;
    weight: string;
    category: string;

}

export function ProductCardNew({ variants, item }: { variants: any, item: ProductItem }) {
    const navigate = useNavigate()
    return (
        <MotionCard
            key={item.id}
            size={"sm"}
            w={["10em", "10em", "12em"]}
            maxW="24em"
            h={["13em", "13em", "16em"]}
            overflow="hidden"
            rounded="2xl"
            shadow="md"
            display="flex"
            flexDirection="column"
            variants={variants}
            onClick={() => {
                navigate({ to: `/details/${item.id}` })
            }}
            cursor={"pointer"}>

            <Image
                src={item.imageUrl.base} />


            <Card.Footer
                pos={"absolute"}
                h={"12em"}
                bottom={0}
                w={"full"}
                gradientFrom={"transparent"}
                gradientTo={"black"}
                bgGradient={"to-b"}
                roundedBottom={"2xl"}
                display={"flex"}
                flexDir={"column"}
                alignItems={"start"}
                justifyContent={"end"}>


                <Text
                    fontSize={["sm", "md", "lg"]}
                    fontWeight="bold"
                    letterSpacing={"1.5px"}
                    color={"white"}
                    className="roboto"
                >{item.name}</Text>


                <Flex
                    alignItems={"center"}
                    justifyContent={"space-between"}
                    w={"full"}>

                    <Text fontSize={["xs", "sm", "md"]}
                        fontWeight="bold"
                        letterSpacing={"1.5px"}
                        color={"white"}
                        className="roboto"
                    >от {item.price.small} ₽</Text>

                    <MotionButton
                        bg={"transparent"}>
                        <Icon as={FaAngleRight} color={"white"} fontSize={"1.5rem"} size={"sm"} />
                    </MotionButton>
                </Flex>

            </Card.Footer>
        </MotionCard>
    )
}
export function ProductCardNewColumn({ variants, item }: { variants: any, item: ProductItem }) {
    const navigate = useNavigate()
    return (
        <MotionBox
            key={item.id}
            w={"full"}
            overflow="hidden"
            borderBottom={{ _dark: "0.03em solid rgba(255, 255, 255, 0.2)", _light: "0.03em solid rgba(0, 0, 0, 0.2)" }}
            display="flex"
            variants={variants}
            onClick={() => {
                navigate({ to: `/details/${item.id}` })
            }}
            cursor={"pointer"}
            p={"1em"}>

            <Image
                src={item.imageUrl.base}
                w={"5em"}
                h={"6em"}
                aspectRatio={"golden"}
                rounded={"2xl"} />


            <MotionBox
                pl={"1em"}>


                <Text
                    fontSize={["md", "lg", "xl"]}
                    fontWeight="bold"
                    letterSpacing={"1.5px"}
                    color={{ _dark: "white" }}
                    className="roboto"
                >{item.name}</Text>
                <Text
                    fontSize={["sm", "md", "lg"]}
                    color={{ _dark: "whiteAlpha.700" }}
                    className="montserrat"
                    lineClamp={"2"}
                >{item.description}</Text>


                <Flex
                    alignItems={"center"}
                    justifyContent={"space-between"}
                    w={"full"}>

                    <Text fontSize={["xs", "sm", "md"]}
                        fontWeight="bold"
                        letterSpacing={"1.5px"}
                        color={{_dark: "white"}}
                        className="roboto"

                    >от <Span>{item.price.small}</Span> ₽</Text>

                    <MotionButton
                        bg={"transparent"}>
                        <Icon as={FaAngleRight} color={{_dark: "white", _light: "black"}} fontSize={"1.5rem"} size={"sm"} />
                    </MotionButton>
                </Flex>

            </MotionBox>
        </MotionBox>
    )
}