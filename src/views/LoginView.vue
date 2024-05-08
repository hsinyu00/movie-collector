<template>
    <form id="form">
        <h1>登入</h1>
        <input type="email" placeholder="請輸入電子郵件" v-model="email"/>
        <input type="password" placeholder="請輸入密碼" v-model="password" />

        <button type="submit" @click.prevent="" @click="login">登入</button>
    </form>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'

let email = ref('')
let password = ref('')

const emit = defineEmits(['click', 'updateUser']);

function login() {
    axios.get("http://localhost:8000/user")
        .then((res) => {
            let foundUser = res.data.filter((user) => user.email === email.value && user.password === password.value);
            if(foundUser.length === 1) {
                localStorage.setItem("login-user", JSON.stringify({
                    "name": foundUser[0].name,
                    "email": foundUser[0].email
                }))
                emit('updateUser')
            }
            else {
                alert("登入失敗");
            }
        })
        .catch((err) => {
            console.log(err);
            alert("有error");
        });
    }

</script>



<!-- <script>
import axios from 'axios'

export default {
    data() {
        return {
            email: "", 
            password: ""
        }
    },
    methods: {
        login() {
            axios.get("http://localhost:8000/user")
            .then((res) => {
                // console.log(res.data);

                let foundUser = res.data.filter((user) => user.email === this.email && user.password === this.password);
                // console.log(foundUser);
                if(foundUser.length === 1) {
                    // alert("登入成功");
                    localStorage.setItem("login-user", JSON.stringify({
                        "name": foundUser[0].name,
                        "email": foundUser[0].email
                    }))
                    this.$router.push("/");
                }
                else {
                    alert("登入失敗");
                }
            })
            .catch((err) => {
                console.log(err);
                alert("有error");
            });
        }
    }
}
</script> -->