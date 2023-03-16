<template>
    <div>
      <h1>{{ repo.name }}</h1>
      <p>{{ repo.description }}</p>
      <p>{{ repo.language }}</p>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        repo: null,
      }
    },
    created() {
      axios.get(`https://api.github.com/repos/adebami7/${this.$route.params.name}`)
        .then(response => {
          console.log({response:response.data})
          this.repo = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
  </script>
