import { ProductItem } from "../ProductCardNew";
import "./index.css";
import { Card, Heading, Icon, Image, SegmentGroup, Text, VStack } from "@chakra-ui/react";
import { MotionButton, MotionCard } from "../../motion";
import { useState } from "react";
import { FaPlus } from "react-icons/fa6";

export function ProductDetail({ item }: { item: ProductItem }) {
    const [selectedDiameter, setSelectedDiameter] = useState<string | null>("30 см")


    return (

            <MotionCard
                layoutId={item.id}
                h={"100vh"}
                pos={"relative"}
                pointerEvents="auto"
                overflow="hidden"
                display="flex"
                flexDirection="column"
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
                        draggable={false}
                        w="full"
                        h={{ base: "14em", sm: "18em", md: "22em", lg: "26em" }}
                        objectFit="cover"
                    />
                </Card.Header>

                <Card.Body px={{ base: 4, md: 6 }} py={{ base: 3, md: 5 }}>
                    <Heading
                        size={{ base: "lg", sm: "xl", md: "2xl", lg: "3xl" }}
                        mb={2}
                    >
                        {item.name}
                    </Heading>
                    <Text fontSize={{ base: "sm", sm: "md", md: "lg" }}>
                        {item.description}
                    </Text>
                </Card.Body>
                <VStack>
                    <SegmentGroup.Root size={"lg"} defaultValue={selectedDiameter} rounded={"full"} onValueChange={(e) => setSelectedDiameter(e.value)}>
                        <SegmentGroup.Indicator rounded={"full"} />
                        <SegmentGroup.Items items={["25 см", "30 см", "35 см"]} />
                    </SegmentGroup.Root>
                </VStack>
                <Card.Footer

                    m={{ base: 3, md: 5 }}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    py={4}
                >
                    <MotionButton
                        rounded="full"
                        fontSize={{ base: "14pt" }}
                        px={"2em"}>
                        <Icon as={FaPlus} w={"10pt"} h={"10pt"} />
                        <Text >
                            {selectedDiameter == "25 см" && item.price.small}
                            {selectedDiameter == "30 см" && item.price.medium}
                            {selectedDiameter == "35 см" && item.price.large}
                            {" ₽"}
                        </Text>
                    </MotionButton>

                </Card.Footer>

            </MotionCard>
    );
}