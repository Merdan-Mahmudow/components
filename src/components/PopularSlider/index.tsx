import { Swiper, SwiperSlide, useSwiperSlide } from 'swiper/react';
// @ts-ignore
import 'swiper/css';
import { Box, chakra, Heading } from '@chakra-ui/react';
import { EffectCoverflow } from 'swiper/modules';
import { ProductItem } from '../ProductCardNew';
import { ProductCard } from '../ProductCard';

type SlideProps = {
} & React.ComponentPropsWithoutRef<'div'>;

function Slide({ item, ...props }: SlideProps & { item: ProductItem }) {
  const { isActive } = useSwiperSlide()
  return (
    <Box {...props} scale={isActive ? "1" : ".83"} transition={"all .3s"} textAlign={"center"}>

      <ProductCard item={item} />
    </Box>
  );
}

const ChakraSlide = chakra(Slide);

export function PopularSlider({ products }: { products: ProductItem[] }) {

  const middleIndex = (): number => {
    const arr = [...Array(products.length)].map((_, i) => i + 1)
    const id = Math.floor(arr.length / 2)
    console.log(arr)
    return arr[id];
  }

  const index: number = middleIndex()

  return (
    <Box w={"full"} textAlign={'center'}>
      <Heading w={"full"} mt={"2em"} mb={"1em"} size={"4xl"}>Популярное</Heading>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={2}
        initialSlide={index}
        coverflowEffect={{
          rotate: 0,
          modifier: 1,
          depth: 0,
          slideShadows: false
        }}
        modules={[EffectCoverflow]}
      >

        {products.map((item, index) => (
          <SwiperSlide><ChakraSlide key={index} item={item}></ChakraSlide></SwiperSlide>
        ))}

      </Swiper>
    </Box>
  );
}
