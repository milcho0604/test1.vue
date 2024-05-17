<template>
    <div id="BookEditView">
        <h1>도서 {{ book.id > 0 ? "수정" : "등록" }}</h1>
        <div>
            <label>제목:</label>
            <input type="text" v-model="book.title" />
        </div>
        <div>
            <label>저자:</label>
            <input type="text" v-model="book.author" />
        </div>
        <div>
            <label>가격:</label>
            <input type="number" v-model="book.price" />
        </div>
        <div>
            <button type="button" @click="save">저장</button>
            <button type="button" @click="remove" v-show="book.id > 0">삭제</button>
            <button type="button" @click="goList">취소</button>
        </div>
    </div>
</template>

<script>
import { loadBook, updateBook, insertBook, deleteBook } from '../bookService';

export default {
    name: "BookEditView",
    data() {
        return {
            book: {}
        };
    },
    async mounted() {
        const id = this.$route.params.id;
        if (id > 0)
            this.book = await loadBook(id);
        else
            this.book = { id: 0, title: "", author: "", price: 0 };
    },
    methods: {
        async save() {
            if (this.book.id > 0)
                await updateBook(this.book);
            else
                await insertBook(this.book);
            this.goList();
        },
        goList() {
            this.$router.push("/book/");
        },
        async remove() {
            if (confirm("삭제하시겠습니까?")) {
                await deleteBook(this.book.id);
                this.goList();
            }
        }
    }
}
</script>

<style>
label { margin-right: 15px; }
input[type=text] { padding: 6px; width: 200px; }
input[type=number] { padding: 6px; width: 200px; }
button { padding: 5px 20px; margin-right: 10px; }
</style>
