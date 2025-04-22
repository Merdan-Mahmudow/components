import { ProductItem } from "../ProductCardNew";
import "./index.css";
import { Box, Card, CloseButton, Float, Heading, Icon, Image, SegmentGroup, Text, VStack } from "@chakra-ui/react";
import { MotionButton, MotionCard } from "../../motion";
import { useState } from "react";
import { FaPlus } from "react-icons/fa6";

export function ProductDetail({ item, setIndex }: { item: ProductItem, setIndex: (index: any) => void }) {
    const [selectedDiameter, setSelectedDiameter] = useState<string | null>("30 см")


    return (
        <Box
            w="full"
            h="full"
            display="flex"
            alignItems="center"
            justifyContent="center"
            position="fixed"
            top={0}
            left={0}
            bottom={0}
            right={0}
            pt={"2em"}
            pointerEvents="none"
            backdropBlur="2xl"
            px={4} // адаптивный отступ по краям
        >

            <MotionCard
                layoutId={item.id}
                maxW="50em"
                w={{ base: "100%", sm: "90%", md: "75%", lg: "60%" }}
                h="95%"
                rounded="2xl"
                pointerEvents="auto"
                overflow="hidden"
                display="flex"
                flexDirection="column"
            >
                <Float offset={"6"}>
                    <CloseButton
                        size={"2xs"}
                        rounded={"full"}
                        bg={"whiteAlpha.300"}
                        color={"bg.inverted"}
                        onClick={() => setIndex(false)}
                    />
                </Float>
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
                        roundedTop={{ base: "xl", md: "2xl" }}
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
        </Box>

    );
}