<template>
  <div class="additional-survey container mt-5">
    <div>
      <div v-for="(question, index) in additionalQuestions" :key="index" class="mb-4">
        <label>{{ question }}</label>
        <textarea v-model="answers[index]" class="form-control" rows="3"></textarea>
      </div>
      <button @click="submitSurvey" class="btn btn-primary d-block mx-auto">Submit</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      additionalQuestions: [
        'Што за тебе преставува маладаптивно мечтаење (ММ*)?',
        'Што знаеш за маладаптивно мечтаење?',
        'Дали ти (или твои пријатели/познаници) искусиле вакво нешто? (ММ)',
        'Дали ова преставува некаков проблем за тебе (или твои пријатели/познаници)?',
        'Ако да, што всушност е проблематично?',
        'На кој начин сметаш дека другите (родители, наставници, членови од семејството...) би го дефинирале како проблематично?',
        'За што треба да истражуваме? Кои се клучни прашања/теми за дискусија и проблематики?',
        'На кој начин можеме да ги прашуваме младите за ММ?',
        'На кој начин можеме најдобро да ги вклучиме во нашето истражување?'
      ],
      answers: []
    };
  },
  methods: {
    submitSurvey() {
      const surveyData = {};
      this.additionalQuestions.forEach((question, index) => {
        surveyData[question] = this.answers[index];
      });
      console.log('Survey data:', surveyData);
      // You can send the survey data to your backend or process it further as needed
      // For now, let's assume it's just logging the data
    }
  }
};
</script>

<style scoped>
/* Add any custom styles here */
</style>
