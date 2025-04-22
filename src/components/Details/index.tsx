import { ProductItem } from "../ProductCardNew";
import "./index.css";
import { Box, Card, Heading, Image, Text } from "@chakra-ui/react";
import { MotionCard } from "../../motion";

export function ProductDetail({ item }: { item: ProductItem }) {
    return (
        <Box w={"full"}
            h={"full"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            position={"fixed"}
            top={0} left={0} bottom={0} right={0}
            pointerEvents={"none"}
            backdropBlur={"2xl"}>
            <MotionCard
                layoutId={item.id}
                maxW={"50em"}
                w={["90%", "75%", "60%"]} h={"95%"}
                rounded={"2xl"}
            >
                <Card.Header
                    p={0}
                    overflow="hidden"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Image
                        src={item.imageUrl.details}
                        alt={item.name}
                        w="full"
                        h={{ base: "12em", sm: "16em", md: "20em", lg: "24em" }}
                        objectFit="cover"
                        roundedTop={{ base: "xl", md: "2xl" }}
                    />
                </Card.Header>
                <Card.Body>
                    <Heading size={"4xl"}>{item.name}</Heading>
                    <Text>{item.description}</Text>
                </Card.Body>
                <Card.Footer
                    bg={"whiteAlpha.300"}
                    rounded={"full"}
                    m={"1em"}
                    display={"flex"}
                    alignItems={"center"}>
                    <Text fontSize={"xl"} fontWeight={"bold"} maxH={"20px"}>{item.price} ₽</Text>
                </Card.Footer>
            </MotionCard>
        </Box>
    );
}