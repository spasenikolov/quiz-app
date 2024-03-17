
<script>
import { quizQuestions } from "@/views/questions.js";
import AdditionalSurvey from "@/components/AdditionalSurvey.vue";
export default {
  data() {
    return {
      AdditionalSurvey,
      quizStarted: false,
      quizFinished: false,
      questions: quizQuestions,
      currentQuestionIndex: 0,
      score: 0,
      selectedAnswerIndex: null,
      userAnswers: new Map()
    };
  },
  components: {
    AdditionalSurvey
  },
  computed: {
    currentQuestion() {
      return this.questions[this.currentQuestionIndex];
    }
  },
  methods: {
    selectAnswer(questionIndex, optionIndex) {
      this.userAnswers.set(questionIndex, optionIndex);
    },
    isSelected(questionIndex, optionIndex) {
      return this.userAnswers.get(questionIndex) === optionIndex;
    },
    finishQuiz() {
      this.quizFinished = true;
      this.score = 0;
      for (let value of this.userAnswers.values()) {
        this.score += value * 10;
      }
    },
    saveAnswers() {
      for (let key of this.userAnswers.keys()) {
        console.log('key:' + this.questions.at(key).question + ' value:' + (parseInt(this.userAnswers.get(key)) * 10));
      }
      alert('Answers saved successfully');
      console.log(`Score: ${this.score}`)
    },
    clientHasMaladaptiveDaydreaming() {
      console.log(quizQuestions.length + " <- length")
      console.log(`score: ${this.score} / questions: ${quizQuestions.length} = ${this.score/quizQuestions.length}`)
      return this.score/quizQuestions.length > 40
    }
  }
};
</script>

<template>
  <div class="container mt-5">
    <header class="text-center mb-4">
      <h1 class="green">{{quizFinished ? 'Вашите резултати: ' : ''}}</h1>
      <p v-if="!quizFinished">You can answer the questions one by one</p>
    </header>
    <div v-if="!quizFinished" class="m-5">
      <div class="question-list">
        <div class="question-item mb-4 border-bottom pb-4" v-for="(question, index) in questions" :key="index">
          <div class="question-indicator text-center mb-2">Question {{ index + 1 }} of {{ questions.length }}</div>
          <h2 class="mb-3">{{ question.question }}</h2>
          <div class="row">
            <ul class="list-unstyled">
              <li v-for="(option, optionIndex) in question.options" :key="optionIndex"
                  @click="selectAnswer(index, optionIndex)"
                  :class="{ 'bg-dark text-light': isSelected(index, optionIndex) }"
                  class="bg-light p-2 mb-2 rounded cursor-pointer text-center">
                {{ option }}0%
              </li>
            </ul>
          </div>
        </div>
      </div>
      <button @click="finishQuiz" class="btn btn-success d-block mx-auto mb-3">Finish</button>
    </div>
    <div v-else>
      <h2 class="center">{{ !clientHasMaladaptiveDaydreaming() ? "Вие немате маладаптивно мечтаење. Ви благодариме за одвоеното време." : "Вие имате маладаптивно мечтаење. Ве замолуваме доколку имате време да ги одговорите следните незадолжителни прашања."}}</h2>
      <button @click="saveAnswers" class="btn btn-primary d-block mx-auto">Save Answers</button>
      <additional-survey v-if="clientHasMaladaptiveDaydreaming()"></additional-survey>
    </div>
  </div>
</template>



