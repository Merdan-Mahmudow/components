import { Card, Flex, Icon, Image, Text } from "@chakra-ui/react";
import { MotionButton, MotionCard } from "../../motion";
import { FaAngleRight } from "react-icons/fa6";

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

export function ProductCardNew({ variants, item, setIndex }: { variants: any, item: ProductItem, setIndex: (index: string) => void }) {
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
            onClick={() => setIndex(item.id)}
            layoutId={item.id}
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
                    className="montserrat"
                >{item.name}</Text>


                <Flex
                    alignItems={"center"}
                    justifyContent={"space-between"}
                    w={"full"}>

                    <Text fontSize={["xs", "sm", "md"]}
                        fontWeight="bold"
                        letterSpacing={"1.5px"}
                        color={"white"}
                        className="merriweather"
                    >от {item.price.small} ₽</Text>

                    <MotionButton
                        bg={"transparent"}>
                        <Icon as={FaAngleRight} color={"white"} fontSize={"1.5rem"} size={"sm"}/>
                    </MotionButton>
                </Flex>

            </Card.Footer>
        </MotionCard>
    )
}