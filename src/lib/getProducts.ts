import store from "./ravendb";

export async function getProducts() {
  const session = store.openSession();
  return await session.query({collection: "Pages"}).all();
}
