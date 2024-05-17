// BookListView.vue
<template>
  <div id="BookListView">
    <h1>책 목록</h1>
    <button type="button" @click="goEdit(0)">등록</button>
    <table>
      <tr>
        <td>id</td>
        <td>이름</td>
        <td>저자</td>
        <td>가격</td>
      </tr>
      <tr v-for="book in books" :key="book.id" @click="goEdit(book.id)">
        <td>{{ book.id }}</td>
        <td>{{ book.title }}</td>
        <td>{{ book.author }}</td>
        <td>{{ book.price }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import { loadBooks } from '../bookService';

export default {
    name: "BookListView",
    data() {
      return {
        books: [ ]
      }
    },
    async mounted() {
      this.books = await loadBooks();
    },
    methods: {
      async reload(){
        this.books = await loadBooks();
      },
      goEdit(id) {
        this.$router.push("/book/edit/" + id);
      }
    }
  };
</script>

<style scoped>
h1 { border-bottom: 1px solid gray; }
table { border-collapse: collapse; margin: 20px 0; width: 100%; }
tr:nth-child(1) { background-color: #eee; text-align: center; }
td { border: 1px solid gray; padding: 6px; }
td:nth-child(1) { text-align: center; width: 30px; }
tr:hover { background-color: #ffd; cursor: pointer; }
</style>
