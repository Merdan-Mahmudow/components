import { createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import { Box } from '@chakra-ui/react';
import Layout from '../components/Layout';
import { useBackButton } from '../hooks/useBackButton';

export const Route = createRootRoute({
  component: () => {
    useBackButton()
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