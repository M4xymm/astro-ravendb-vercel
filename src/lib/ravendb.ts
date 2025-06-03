import { DocumentStore } from "ravendb";

const store = new DocumentStore(
  "http://live-test.ravendb.net/", // Change to your RavenDB server URL
  "test123123"       // Change to your database name
);
store.initialize();

export function openSession() {
  return store.openSession();
}
