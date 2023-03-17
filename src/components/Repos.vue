<template>
    <div class="header">
      <h1>My GitHub Repositories</h1>
      <ul class="links">
        <li v-for="repo in repos" :key="repo.id">
          <router-link :to="'/repo/' + repo.name">{{ repo.name }}</router-link>
        </li>
        <li>
          <button @click="loadMore">Load More</button>
        </li>
      </ul>
    </div>

  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        repos: [],
        page: 1,
        perPage: 10,
      }
    },
    created() {
      this.loadRepos();
    },
    methods: {
      loadRepos() {
        axios.get(`https://api.github.com/users/adebami7/repos?page=${this.page}&per_page=${this.perPage}`)
          .then(response => {
            console.log({response})
            this.repos = [...this.repos, ...response.data];
          })
          .catch(error => {
            console.log(error);
          });
      },
      loadMore() {
        this.page++;
        this.loadRepos();
      }
    }
  }
  </script>


<style >
    .header {
        background-image: linear-gradient(rgba(1, 11, 53, 0.916), rgba(25, 69, 246, 0.916)) ;
        padding-bottom: 20px;
    }
    .header h1{
        color:#ffffff;
        text-align: center;
        font-size: 22px;
        font-weight: bold;
        padding-top: 20px;
        padding-left: 20px;
        margin-bottom: 10px;
    }
   .links{
        color: rgb(16, 3, 90);
        margin: 0 300px 0 300px;
        padding: 10px 0 10px 0;
        background-color: lightgrey;
        border-radius: 8px;
      
    }
    li{
        display: flex;
        justify-content: center;
        margin-top: 20px;
        border-radius: 20%;
        
    }
    
    a{
        padding: 5px 10px;
        border-radius: 5px;
        margin: 0 5px;
        text-decoration: none;
    }
    .display-4 {
    font-size: 2.5rem;
    font-weight: 500;
  }
  
  .mt-4 {
    margin-top: 1.5rem;
  }
  
  .card {
    border: none;
  }
  
  .card-header {
    background-color: #007bff;
    color: #fff;
  }
  
  .card-body {
    padding: 1.25rem;
  }
  
  .card-title {
    font-weight: 500;
  }
  
  .card-text {
    font-size: 90%;
  }
  
button {
  margin-top: 10px;
  background-color: #007bff;
  color: #fff;
  font-size: 15px;
  border: none;
  border-radius: 2px;
  padding: 10px 20px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}

.page-links{
  color: rgb(16, 3, 90);
  margin: 0 300px 0 300px;
  padding: 10px 0 10px 0;
  background-color: lightgrey;
  border-radius: 8px;
}

button:hover {
  background-color: #011a35;
}

button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
  
</style>

 