<template>
  <div class="wrapper">
    <div class="header">YOUR SKILL</div>
    <div class="holder">
      <form @submit.prevent="handleAddSkill">
        <input
          type="text"
          v-model="skill"
          v-validate="'min:5'"
          name="skill"
          placeholder="Enter your skill"
          autocomplete="off"
        >
        <transition name="alert-in">
          <p class="alert" v-if="errors.has('skill')">{{ errors.first('skill') }}</p>
        </transition>
      </form>

      <ul>
        <transition-group
          name="item-skill-in"
          enter-active-class="animated bounceInDown"
          leave-active-class="animated bounceOutRight"
        >
          <li v-for="(data, index) in skills" :key="data.skill">
            <span>{{ data.skill }}.</span>
            <button v-on:click="handleDelete(index)" class="btn-delete">&times;</button>
          </li>
        </transition-group>
      </ul>

      <p class="footer">These are the skills that you possess.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Skills",
  data() {
    return {
      skill: "",
      name: "Ninh",
      skills: [{ skill: "Vuejs" }, { skill: "Frontend Developer" }]
    };
  },
  beforeMount() {
    window.addEventListener("beforeunload", this.handleUnmount);
    const skills = JSON.parse(localStorage.getItem("skills"));
    if (skills) {
      this.skills = skills;
    } else {
      return;
    }
  },
  beforeDestroy() {
    window.removeEventListener("unload", this.handleUnmount);
  },

  methods: {
    handleUnmount() {
      localStorage.setItem("skills", JSON.stringify(this.skills));
    },
    handleAddSkill() {
      this.$validator.validateAll().then(res => {
        if (res && this.skill) {
          this.skills.push({ skill: this.skill });
          this.skill = "";
        }
      });
    },
    handleDelete(i) {
      const skills = this.skills.filter((item, index) => index !== i);
      this.skills = skills;
    }
  }
};
</script>

<style lang="scss" src="./styles/Skills.scss" scoped>
</style>



