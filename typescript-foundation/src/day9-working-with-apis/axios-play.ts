import axios from "axios";

// https://www.npmjs.com/package/axios
async function createProduct() {
  try {
    const { data } = await axios.post("https://dummyjson.com/products/add", {
      title: "laptop",
    });
    console.log(data);
  } catch (err) {}
}

async function main() {
  //   try {
  //     const {data} = await axios.get("https://dummyjson.com/products");
  //     console.log(data);
  //   } catch (err) {}

  await createProduct();
}

main();
