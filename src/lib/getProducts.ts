import {openSession} from "./ravendb";

export async function getProducts() {
  const session = openSession();
  return await session.query({collection: "Pages"}).all();
}
