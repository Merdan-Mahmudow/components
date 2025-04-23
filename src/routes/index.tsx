import { ProductCardNew, ProductCardNewColumn } from "../components/ProductCardNew";
import { ColorModeButton } from "../components/ui/color-mode";
import { MotionBox, MotionGrid } from "../motion";
import { useMemo, useRef, useState } from "react";
import { productItems } from "../db";
import { Avatar, Box, CloseButton, Heading, Input, InputGroup, SegmentGroup } from "@chakra-ui/react";
import { createFileRoute } from "@tanstack/react-router";
import { LuGrid2X2, LuList } from "react-icons/lu";

export const Route = createFileRoute("/")({
    component: App
})

const container = {
    hidden: { opacity: 1 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delayChildren: 0.1,
            staggerChildren: 0.1
        }
    }
};
const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1
    }
};

type ProductsView = "board" | "list";

export function App() {
    const [value, setValue] = useState("")
    const inputRef = useRef<HTMLInputElement | null>(null)
    const [view, setView] = useState<ProductsView>("list")


    // Фильтрация по названию
    const filteredPizzas = useMemo(() => {
        return productItems.filter(item =>
            item.name.toLowerCase().includes(value.toLowerCase())
        )
    }, [value])

    const endElement = value ? (
        <CloseButton
            size="xs"
            onClick={() => {
                setValue("")
                inputRef.current?.focus()
            }}
            me="-2"
        />
    ) : undefined

    return (
        <MotionBox
            overflow={"hidden"} pt={"7"}>
            <MotionBox
                display={"flex"}
                justifyContent={"space-between"}
                px={["4"]}>
                <MotionBox>
                    <Heading
                        letterSpacing={"3px"}
                        className="montserrat">PIZZETTO</Heading>
                </MotionBox>

                <MotionBox display={"flex"} gap={4} alignItems={"center"}>
                    <ColorModeButton size={"sm"} />
                    <Avatar.Root shape="full" size="xs">
                        <Avatar.Fallback name="Random User" />
                        <Avatar.Image src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04" />
                    </Avatar.Root>

                </MotionBox>

            </MotionBox>

            <MotionBox
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                flexDir={"column"}
                pt={10}
                px={["4"]}>
                <InputGroup endElement={endElement}>
                    <Input
                        ref={inputRef}
                        placeholder="Поиск"
                        value={value}
                        type={"search"}
                        rounded={"xl"}
                        bg={{ _dark: "whiteAlpha.200", _light: "blackAlpha.200" }}
                        onChange={(e) => {
                            setValue(e.currentTarget.value)
                        }}
                    />
                </InputGroup>
                <MotionBox
                    as="h1"
                    fontSize={["2xl", "3xl", "4xl"]}
                    fontWeight="bold"
                    pt={5}
                    letterSpacing={"1.5px"}
                    className="montserrat"
                >Меню
                </MotionBox>
            </MotionBox>
            <Box w={"full"} display={"flex"} justifyContent={"end"} px={4}>
                <SegmentGroup.Root
                    defaultValue={view}
                    size={"xs"}
                    bg={{ _dark: "whiteAlpha.100", _light: "blackAlpha.100" }}
                    border={"none"}
                    onValueChange={() => setView(view === "board" ? "list" : "board")}>

                    <SegmentGroup.Indicator />
                    <SegmentGroup.Items cursor={"pointer"}
                        items={[

                            {
                                value: "board",
                                label: (
                                    <LuGrid2X2 />
                                ),
                            },
                            {
                                value: "list",
                                label: (
                                    <LuList />
                                ),
                            },
                        ]}
                    />
                </SegmentGroup.Root>
            </Box>

            {view == "list" &&
                <MotionGrid
                    pt={5}
                    variants={container}
                    initial="hidden"
                    animate="visible">

                    {filteredPizzas.map((el) => (
                        <>
                            <ProductCardNewColumn key={el.id} variants={item} item={el} />
                        </>

                    ))}
                </MotionGrid> }
                {view == "board" && <MotionGrid
                    templateColumns={{ lg: "repeat(auto-fill, minmax(300px, 1fr))", base: "repeat(2, 1fr)" }}
                    placeItems={"center"}
                    gap={4}
                    pt={5}
                    variants={container}
                    initial="hidden"
                    animate="visible">

                    {filteredPizzas.map((el) => (
                        <>
                            <ProductCardNew key={el.id} variants={item} item={el} />
                        </>

                    ))}
                    </MotionGrid>}
            {/* <AnimatePresence>
                {index !== false && (
                    <MotionBox
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.6 }}
                        exit={{ opacity: 0 }}
                        key="overlay"
                        className="overlay"
                        onClick={() => setIndex(false)}
                        blur={"2xl"}
                    />
                )}

                {index !== false && (
                    <ProductDetail
                        item={productItems.find((item) => item.id === index) as ProductItem} setIndex={setIndex} />
                )}
            </AnimatePresence> */}
        </MotionBox>
    )
}
