import { createFileRoute } from '@tanstack/react-router'
import { AnimatedRouteWrapper } from '../../components/AnimatedRouteWrapper'
import { productItems } from '../../db'
import { Box } from '@chakra-ui/react'
import { ProductDetail } from '../../components/Details'
import { ProductItem } from '../../components/ProductCardNew'

export const Route = createFileRoute('/details/$id')({
  component: RouteComponent,
})

function RouteComponent() {
  const params = Route.useParams()
  const item = productItems.find((el) => el.id === params.id)

  return (
    <AnimatedRouteWrapper>
      <Box >
        <ProductDetail item={item as ProductItem}/>
      </Box>
    </AnimatedRouteWrapper>
  )
}
