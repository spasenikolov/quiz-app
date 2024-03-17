<script setup>
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
import QuizView from "@/views/QuizView.vue";
</script>

<template>
  <header class="navbar navbar-expand-lg navbar-dark bg-primary-subtle py-4 shadow-sm justify-content-center">
    <RouterLink to="/" class="navbar-brand text-dark">
      <h1 class="font-logo mb-0">Тест за заносно мечтаење</h1>
    </RouterLink>
  </header>
  <div class="bg-lighter py-5">
    <div class="container">
          <p class="text-center ">
            При одговарање на следните прашања, ве молиме обрнете внимание на вашето мечтаење во последниот месец.
            Одберете ја опцијата што најдобро одговара на вашето искуство.
          </p>
    </div>
  </div>
  <div class="gradient-border"></div>
  <quiz-view></quiz-view>
</template>

<style scoped>
.font-logo {
  font-family: 'Pacifico', cursive;
}

.navbar-brand:hover {
  text-decoration: none;
}

.bg-lighter {
  background-color: #f0f0f0;
}

.gradient-border {
  height: 2rem;
  background: linear-gradient(to bottom, #f0f0f0, transparent);
}
</style>
