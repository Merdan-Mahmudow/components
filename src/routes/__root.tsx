import { createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import { Box } from '@chakra-ui/react';
import Layout from '../components/Layout';

export const Route = createRootRoute({
  component: () => {
    return (
      <>
        <Box>
          <Layout />
        </Box>
        <TanStackRouterDevtools />
      </>
    )
  },
})