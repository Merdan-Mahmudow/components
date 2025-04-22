import { Card, Flex, Icon, Image, Text } from "@chakra-ui/react";
import { MotionButton, MotionCard } from "../../motion";
import { FaAngleRight } from "react-icons/fa6";

export interface ImageURL {
    base: string
    details: string
}
export interface ProductItem {
    id: string;
    name: string;
    price: number;
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
            w={["12em", "15em", "16em"]}
            maxW="24em"
            h={["16em", "18em", "20em"]}
            overflow="hidden"
            rounded="2xl"
            shadow="md"
            display="flex"
            flexDirection="column"
            variants={variants}
            onClick={() => setIndex(item.id)}
            layoutId={item.id}
            cursor={"pointer"}
            whileHover={{ scale: 1.05 }}>
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
                <Text fontSize={["md", "lg", "xl"]}
                    fontWeight="medium"
                    letterSpacing={"1px"}
                    color={"white"}
                >{item.name}</Text>
                <Flex
                    alignItems={"center"}
                    justifyContent={"space-between"}
                    w={"full"}>

                    <Text fontSize={["md", "lg", "xl"]}
                        fontWeight="medium"
                        letterSpacing={"1px"}
                        color={"white"}
                    >от {item.price} ₽</Text>

                    <MotionButton
                        bg={"transparent"}>
                        <Icon as={FaAngleRight} color={"white"} fontSize={"1.5rem"} />
                    </MotionButton>
                </Flex>

            </Card.Footer>
        </MotionCard>
    )
}