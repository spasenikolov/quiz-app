<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      При одговарање на следните прашања, ве молиме обрнете внимание на вашето мечтаење во
      последниот месец. Одберете ја опцијата што најдобро одговара на вашето искуство.
      Пример: Некои луѓе се толку внесени во нивното мечтаење што многу често забораваат каде се
      наоѓаат. Колку често го губите чувството за простор и време кога мечтаете? Во овој пример, се
      одбира точката 20%.
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
