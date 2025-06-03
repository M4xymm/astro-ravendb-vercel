import { DocumentStore } from "ravendb";

const store = new DocumentStore(
  import.meta.env.STRIFE_DATABASE_URLS,
  import.meta.env.STRIFE_DATABASE
);
store.initialize();

export function openSession() {
  return store.openSession();
}
