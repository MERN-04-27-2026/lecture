import {
  Badge,
  Box,
  Button,
  Card,
  Container,
  Flex,
  Group,
  Image,
  Text,
  Title,
} from "@mantine/core";
import { useQuery } from "@tanstack/react-query";
import { Spinner } from "../../../components/ui/Spinner";
import { fetchProducts } from "../api";
import { useSearchParams } from "react-router-dom";

const Products = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["products"],
    // you can use any data fetching method, you can use fetch, axios, or just promise
    queryFn: fetchProducts,
  });

  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get("category"))
  console.log(searchParams.get("minRating"))

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <Text>{error.message} </Text>;
  }

  return (
    <Container size="xl" py="xl">
      <Title order={1} mb="xl">
        Our Products
      </Title>
      <Text size="lg">Products page - add your products here</Text>
      <Flex wrap="wrap" gap={12}>
        {data?.products.map((product) => {
          const { id, title, price, rating, stock, thumbnail, description } =
            product;
          return (
            <Card key={id} shadow="sm" padding="lg" withBorder w={300}>
              <Card.Section>
                <Image src={thumbnail} height={160} alt={title} />
              </Card.Section>

              <Group justify="space-between" mt="md" mb="xs">
                <Text fw={500}>{title}</Text>
                <Badge color="pink">{price}</Badge>
              </Group>

              <Text size="sm" c="dimmed">
                {description}
              </Text>

              <Button color="blue" fullWidth mt="md">
                View Details
              </Button>
            </Card>
          );
        })}
      </Flex>
    </Container>
  );
};

export default Products;

