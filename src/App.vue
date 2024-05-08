<script setup>
import { ref } from 'vue'

// use var = ref() to initiate reactive vars
let loginUser = ref(JSON.parse(localStorage.getItem('login-user')))
let showUser = ref(loginUser.value ? true : false)

function logout() {
  // use var.value to update reactive vars
  localStorage.removeItem("login-user")
  loginUser.value = JSON.parse(localStorage.getItem('login-user'))
  showUser.value = false
}
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <nav>
        <!-- v-if in template can't accept null. give a true/false -->
        <p v-if="showUser">{{ loginUser.name }} 的電影間</p> 
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/topic">Topic</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/signup">Sign up</RouterLink>
        <RouterLink to="/login"  v-if="loginUser===null">Log in</RouterLink>
        <a v-show="showUser" @click="logout">Logout</a>
      </nav>
    </div>
  </header>
  <RouterView />
</template>

<style scoped>
[v-cloak] {
  display: none;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
