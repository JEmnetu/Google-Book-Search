import axios from "axios";

export default {
  getBooks: () => {
    return axios.get("/api/books");
  },

  getbook: id => {
    return axios.get("/api/books/" + id);
  },

  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },

  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  },
  queryBooks: function(bookSearch) {
    return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + bookSearch)
  }
};
