<template>
    <div>
      <h1 class="reps">{{ repo.name }}</h1>
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
    
<style>
    .rep{
        text-align: center;
        color: rgba(2, 2, 63, 0.916);
        font-size: 22px;
        font-weight: bolder;
        padding-top: 20px;
        padding-left: 10px;
        margin-bottom: 30px;
    }

    p{
        font-size: 20px;
        margin-bottom: 10px;
    }

    /* repository description */
    .repo-description {
    font-size: 14px;
    margin-bottom: 10px;
    }

    /* repository language */
    .repo-language {
    font-size: 12px;
    color: #888;
    }

    @media (max-width: 768px) {
  .rep {
    font-size: 18px;
    padding-top: 10px;
    margin-bottom: 20px;
  }

  p {
    font-size: 16px;
    margin-bottom: 5px;
  }

  .repo-description {
    font-size: 12px;
    margin-bottom: 5px;
  }

  .repo-language {
    font-size: 10px;
  }
}




</style>