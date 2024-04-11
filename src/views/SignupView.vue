<template>
    <form id="form">
        <h1>註冊</h1>
        <input type="text" placeholder="請輸入會員名稱" v-model="name"/>
        <input type="email" placeholder="請輸入電子郵件" v-model="email"/>
        <input type="password" placeholder="請輸入密碼" v-model="password" />

        <button type="submit" @click.prevent="" @click="signup">註冊</button>
    </form>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router';
import axios from 'axios'

const router = useRouter()
let name = ref('')
let email = ref('')
let password = ref('')

function signup() {
    axios.post("http://localhost:8000/user?email=${this.email}&password=${this.password}", {
        name: name.value,
        email: email.value, 
        password: password.value
    })
    .then((res)=>{
        console.log("success");
        console.log(res);
        localStorage.setItem("login-user", JSON.stringify(res.data))
        router.push({ path: '/' });
    })
    .catch((err)=> {
        console.log(err);
    })
}
</script>

<!-- <script>
import axios from 'axios'

export default {
    data() {
        return {
            name: "",
            email: "", 
            password: ""
        }
    },
    methods: {
        signup() {
            axios.post("http://localhost:8000/user?email=${this.email}&password=${this.password}", {
                name: this.name,
                email: this.email, 
                password: this.password
            })
            .then((res)=>{
                console.log("success");
                console.log(res);
                localStorage.setItem("login-user", JSON.stringify(res.data))
                this.$router.push("/");
            })
            .catch((err)=> {
                console.log(err);
            })
        }
    }
}
</script> -->