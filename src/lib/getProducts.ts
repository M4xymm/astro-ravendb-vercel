import { openSession } from "./ravendb";

export async function getProducts() {
  const session = openSession();
  const products = await session
    .query({ collection: "Products" })
    .all();
  return products;
}
