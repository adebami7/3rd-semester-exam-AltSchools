<template>
    <div>
      <h1>My GitHub Repositories</h1>
      <ul>
        <li v-for="repo in repos" :key="repo.id">
          <router-link :to="'/repo/' + repo.name">{{ repo.name }}</router-link>
        </li>
      </ul>
      <button @click="loadMore">Load More</button>
    </div>
    <div>
      <div class="row">
        <div class="col-md-8">
          <h1 class="display-4 mb-4">My Repositories</h1>
        </div>
        <div class="col-md-4">
          <input type="text" class="form-control" placeholder="Search by name" v-model="search">
        </div>
      </div>
      <hr>
      <div class="row">
        <div class="col-md-12">
          <ul class="list-group">
            <li class="list-group-item" v-for="repo in paginatedRepos" :key="repo.id">
              <router-link :to="'/repo/' + repo.name">{{ repo.name }}</router-link>
              <p class="mt-2">{{ repo.description }}</p>
              <div class="d-flex justify-content-between align-items-center">
                <p><b-badge variant="primary">{{ repo.language }}</b-badge></p>
                <p><b-badge variant="secondary">{{ repo.stargazers_count }} Stars</b-badge></p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <nav aria-label="Page navigation">
            <ul class="pagination justify-content-center mt-4">
              <li class="page-item" :class="{ disabled: currentPage === 1 }">
                <a class="page-link" href="#" aria-label="Previous" @click.prevent="prevPage">
                  <span aria-hidden="true">&laquo;</span>
                  <span class="sr-only">Previous</span>
                </a>
              </li>
              <li class="page-item" v-for="page in pages" :key="page" :class="{ active: page === currentPage }">
                <a class="page-link" href="#" @click.prevent="changePage(page)">{{ page }}</a>
              </li>
              <li class="page-item" :class="{ disabled: currentPage === totalPages }">
                <a class="page-link" href="#" aria-label="Next" @click.prevent="nextPage">
                  <span aria-hidden="true">&raquo;</span>
                  <span class="sr-only">Next</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
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