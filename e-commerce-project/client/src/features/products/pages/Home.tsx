import {
  Badge,
  Box,
  Card,
  Container,
  Group,
  Image,
  SimpleGrid,
  Text,
  Title,
} from "@mantine/core";

import HomeInfoSection from "../../../components/home/HomeInfoSection";
import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../api";
import { Spinner } from "../../../components/ui/Spinner";

const Home = () => {
  return (
    <Container size="xl" py="xl">
      <Box mb="xl" ta="center">
        <Title order={1} mb="md">
          Welcome to E-Commerce Store
        </Title>
        <Text size="lg" c="dimmed">
          Discover amazing products across all categories
        </Text>
      </Box>

      <Recommendations />

      <HomeInfoSection />
    </Container>
  );
};

const Recommendations = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["products"],
    // you can use any data fetching method, you can use fetch, axios, or just promise
    queryFn: fetchProducts,
  });

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <Text>{error.message} </Text>;
  }

  return (
    <Box mb="xl">
      <Title order={2} mb="md">
        ✨ Recommended for You
      </Title>
      <SimpleGrid cols={{ base: 1, sm: 2, md: 4 }} spacing="md">
        {data?.products.slice(0, 4).map((product) => (
          <Card
            key={product.id}
            shadow="sm"
            padding="lg"
            radius="md"
            withBorder
            style={{ cursor: "pointer", height: "100%" }}
          >
            <Card.Section>
              <Image
                src={product.thumbnail}
                height={160}
                alt="Essence Mascara Lash Princess"
              />
            </Card.Section>

            <Group justify="space-between" mt="md" mb="xs">
              <Text fw={500} lineClamp={1}>
                Essence Mascara Lash Princess
              </Text>
            </Group>

            <Group justify="space-between">
              <Text size="xl" fw={700} c="blue">
                ${product.price}
              </Text>
              <Badge color="red" variant="filled">
                -10%
              </Badge>
            </Group>

            <Group gap={4} mt="xs">
              <Text size="sm" c="dimmed">
                ⭐ 2.56
              </Text>
              <Text size="sm" c="dimmed">
                • 99 in stock
              </Text>
            </Group>
          </Card>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Home;
