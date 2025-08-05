import axios from "axios";

export async function fetchBooks() {
  const booksRes = await axios.get("/data/books.json");
  return booksRes.data;
}
