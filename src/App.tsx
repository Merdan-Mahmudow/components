import { ProductCardNew, ProductItem } from "./components/ProductCardNew";
import { ColorModeButton } from "./components/ui/color-mode";
import { MotionBox, MotionGrid } from "./motion";
import MargaritaIMG from "./assets/pizza.png";
import { useState } from "react";
import { AnimatePresence} from "framer-motion";
import { ProductDetail } from "./components/Details";
import { Box} from "@chakra-ui/react";

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
// const item = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//         y: 0,
//         opacity: 1
//     }
// };
export function App() {
    const [index, setIndex] = useState<string | boolean>(false);
    const productItems: ProductItem[] = [
        {
            id: "1",
            name: "Pepperoni",
            price: 685,
            imageUrl: {
                base: "https://static.gorpom.ru/images/common/discounts/logos/5cd3801a106cba94d77b0d21d909b5c7.jpg",
                details: "https://myasorubka-kuban.ru/wp-content/uploads/2024/07/1617152635_17-p-pitstsa-pepperoni-krasivo-20.jpg"
            },
            description: "A classic pizza topped with pepperoni slices and mozzarella cheese.",
            weight: "500g",
            category: "Pizza"
        },
        {
            id: "2",
            name: "Margherita",
            price: 650,
            imageUrl: {
                base: MargaritaIMG,
                details: "https://i.ytimg.com/vi/4VSW29yWPlA/maxresdefault.jpg"
            },
            // imageUrl: MargaritaIMG,
            description: "A simple yet delicious pizza with fresh tomatoes, mozzarella, and basil.",
            weight: "450g",
            category: "Pizza"
        },
        {
            id: "3",
            name: "BBQ Chicken",
            price: 720,
            imageUrl: {
                base: "https://i.pinimg.com/originals/55/8b/32/558b329cf5e385ce3d1095941d3edb7f.jpg",
                details: "https://i.ytimg.com/vi/RaFtvmP8qhc/maxresdefault.jpg"
            },
            // imageUrl: "https://i.pinimg.com/originals/55/8b/32/558b329cf5e385ce3d1095941d3edb7f.jpg",
            description: "Pizza topped with BBQ chicken, red onions, and cilantro.",
            weight: "550g",
            category: "Pizza"
        },
        {
            id: "4",
            name: "Veggie Delight",
            price: 600,
            imageUrl: {
                base: "https://i.pinimg.com/originals/ce/54/0f/ce540fc3ae87bc55401545ba3dcc3d6e.jpg",
                details: "https://s.yimg.com/ny/api/res/1.2/RoihFlvRPuFK6AHMEG4aYg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02NzQ-/https://media.zenfs.com/en/the_daily_meal_185/45175fecbcba540fd8dcf9ed7e1d878f"
            },
            // imageUrl: "https://i.pinimg.com/originals/ce/54/0f/ce540fc3ae87bc55401545ba3dcc3d6e.jpg",
            description: "A healthy pizza loaded with fresh vegetables and mozzarella cheese.",
            weight: "480g",
            category: "Pizza"
        },
        {
            id: "5",
            name: "Hawaiian",
            price: 700,
            imageUrl: {
                base: "https://i.pinimg.com/236x/12/d4/70/12d4709f0f82f47ccfd39c67b09948f9--privacy-policy-hawaiian-chicken.jpg?nii=t",
                details: "https://avatars.mds.yandex.net/i?id=3b96464769a7ad80abc023c228b7bf9e_l-9056011-images-thumbs&n=13"
            },
            description: "A sweet and savory pizza with ham and pineapple toppings.",
            weight: "520g",
            category: "Pizza"
        },
        {
            id: "6",
            name: "Four Cheese",
            price: 750,
            imageUrl: {
                base: "https://static.tildacdn.info/tild3132-3936-4566-a230-326532353663/-4---.jpg",
                details: "https://static-actual-production.chibbis.ru/bd7b2cae75664c6f40c4cf5f029f09f1.jpeg"
            },
            description: "A rich pizza with a blend of mozzarella, cheddar, parmesan, and blue cheese.",
            weight: "500g",
            category: "Pizza"
        },
        {
            id: "7",
            name: "Spicy Sausage",
            price: 730,
            imageUrl: {
                base: "https://i.pinimg.com/originals/fb/73/f5/fb73f58e66106e52f2af3511ae9255b3.jpg",
                details: "https://thumbs.dreamstime.com/b/ку-рявая-пицца-tortilla-masa-с-сосиской-choriso-79355824.jpg"
            },
            description: "Pizza with spicy sausage, jalapeños, and mozzarella cheese.",
            weight: "530g",
            category: "Pizza"
        },
        {
            id: "8",
            name: "Mushroom Pizza",
            price: 670,
            imageUrl: {
                base: "https://i.pinimg.com/736x/f0/46/3f/f0463f6165015d8e01608be58247507f.jpg",
                details: "https://avatars.mds.yandex.net/get-altay/6159907/2a00000190586f4967bfaefdda69957108c6/XXXL"
            },
            description: "A flavorful pizza with sautéed mushrooms and garlic.",
            weight: "490g",
            category: "Pizza"
        },
        {
            id: "9",
            name: "Buffalo Chicken",
            price: 740,
            imageUrl: {
                base: "https://i.pinimg.com/736x/fe/bf/40/febf40e62f533baf94be32394fd29211.jpg",
                details: "https://www.stonefire.com/wp-content/uploads/2021/07/Stonefire_Pizza_SalamiBuffaloMozzarella1_2017.jpg"
            },
            description: "Pizza topped with spicy buffalo chicken and ranch dressing.",
            weight: "540g",
            category: "Pizza"
        },
        {
            id: "10",
            name: "Mediterranean",
            price: 710,
            imageUrl: {
                base: "https://i.pinimg.com/originals/de/64/40/de644042ac19f9e016f77bb900546a80.jpg",
                details: "https://s1.1zoom.ru/big7/961/Fast_food_Pizza_Closeup_470634.jpg"
            },
            description: "A pizza with olives, feta cheese, sun-dried tomatoes, and spinach.",
            weight: "500g",
            category: "Pizza"
        }
    ];
    return (
        <Box >
            <ColorModeButton />
        <MotionGrid
            templateColumns={{ lg: "repeat(auto-fill, minmax(300px, 1fr))", base: "repeat(2, 1fr)" }}
            placeItems={"center"}
            gap={4}
            pt={10}
            variants={container}
            initial="hidden"
            animate="visible">
            
            {productItems.map((item) => (
                <ProductCardNew key={item.id} variants={item} item={item} setIndex={setIndex} />
            ))}
        </MotionGrid>
            <AnimatePresence>
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
                        item={productItems.find((item) => item.id === index) as ProductItem} />
                )}
            </AnimatePresence>
        </Box>
    )
}


// export const DraggablePizza = ({ item, onDropToCart, reff }: any) => {
//     const controls = useAnimation();
//     const cartRef = useRef<HTMLDivElement>(null);
    
//     const [dragged, setDragged] = useState(false);

//     useEffect(() => {
//         controls.start({ opacity: dragged ? 0 : 1 });
//     }, [dragged]);

//     const checkIsInCart = (x: number, y: number) => {
//         const cartBox = cartRef.current?.getBoundingClientRect();
//         if (!cartBox) return false;

//         return (
//             x >= cartBox.left &&
//             x <= cartBox.right &&
//             y >= cartBox.top &&
//             y <= cartBox.bottom
//         );
//     };

//     const handleDrag = (_: any, info: any) => {
//         const isInCart = checkIsInCart(info.point.x, info.point.y);
//         setDragged(isInCart);
//         controls.start({opacity: dragged ? 0 : 1 });
        
//     };

//     const handleDragEnd = (_: any, info: any) => {
//         const isInCart = checkIsInCart(info.point.x, info.point.y);

//         if (isInCart) {
//             onDropToCart(item);
//         }

//         // Сброс
//         setDragged(false);
//         controls.start({ x: 0, y: 0 });
//     };
    

//     return (
//         <>
//             <motion.div
//                 drag
//                 dragElastic={0.5}
//                 dragConstraints={reff}
//                 animate={controls}
//                 onDrag={handleDrag}
//                 onDragEnd={handleDragEnd}
//                 style={{
//                     width: "150px",
//                     cursor: "grab",
//                     background: item,
//                 }}
//             >
//                 <motion.img
//                     src={item.imageUrl.base}
//                     style={{ borderRadius: 16, height: dragged ? "100px" : "auto" }}
//                     draggable={false}
//                 />
//             </motion.div>

//             <Box
//                 ref={cartRef}
//                 position="fixed"
//                 bottom="2em"
//                 left={"50%"}
//                 zIndex={1000}
//                 bg={dragged ? "teal.100" : "whiteAlpha.800"}
//                 p={4}
//                 rounded="full"
//                 boxShadow="lg"
//             >
//                 {dragged && (<Image src={item.imageUrl.base} alt={item.name} boxSize="50px" rounded="2xl" />)}
//                 {!dragged && <Icon as={FaShoppingCart} boxSize={8} color={"teal.500"}
//                 />}
//             </Box>
//         </>
//     );
// };
