<template>
  <div>
    <editQuestion v-if="editting" :question="question"></editQuestion>
    <div v-else>
      <SingleQuestion v-if="question" :question="question" class="mt-2 mb-2"></SingleQuestion>
      <replies v-if="question" :question="question"></replies>
      <div v-if="loggedIn">
        <createReply v-if="question" :questionSlug="question.slug"></createReply>
      </div>
      <div v-else class="ml-12">
        <router-link to="/login">Login to reply</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import SingleQuestion from "./SingleQuestion";
import editQuestion from "./editQuestion";
import replies from "../reply/replies.vue";
import createReply from "../reply/createReply.vue";
export default {
  data: () => {
    return {
      question: null,
      editting: false
    };
  },
  components: {
    SingleQuestion,
    editQuestion,
    replies,
    createReply
  },
  created() {
    this.listen();
    this.getQuestions();
  },
  computed: {
    loggedIn() {
      return User.loggedIn();
    }
  },
  methods: {
    listen() {
      EventBuss.$on("starteditting", () => {
        this.editting = true;
      });
      EventBuss.$on("canceleditting", () => {
        this.editting = false;
      });
    },
    getQuestions() {
      axios
        .get(`/question/${this.$route.params.slug}`)
        .then(res => (this.question = res.data.data))
        .catch(errors => console.log(errors));
    }
  }
};
</script>

<style>
</style>