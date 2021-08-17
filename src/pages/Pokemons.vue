<template>
  <div class="row">
    <div class="col-md-3">
      <div
        v-if="showOverLay"
        class="spinner-border justify-content-center"
        role="status">
        <span class="sr-only">Loading...</span>
      </div>
      <div
        class="btn-group d-flex justify-content-center"
        role="group">
        <button
          v-if="previous"
          title="Previous page"
          type="button"
          class="btn btn-secondary"
          @click="loadPokemons(previous)"
        >
          <span class="ti-arrow-left"></span>
        </button>
        <button
          v-if="next"
          title="Next page"
          type="button"
          class="btn btn-secondary"
          @click="loadPokemons(next)"
        >
          <span class="ti-arrow-right"></span>
        </button>
      </div>
      <table class="table table-hover text-center">
        <thead>
        <tr>
          <td>
            <h3>Name</h3>
          </td>
        </tr>
        </thead>
        <tbody>
        <tr v-for="pokeItem in pokemons">
          <td>
            <a
              @click="showPokemon(pokeItem)"
              href="#"
            >
              {{pokeItem.name}}
            </a>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
    <div
      v-if="pokemon"
      class="col-md-9"
    >
      <poke-card :pokemon="pokemon"></poke-card>
    </div>
  </div>

</template>
<script>
const axios = require('axios');

export default {
  name: 'PokeList',
  components: {
    PokeCard: () => import('./Pokemon'),
  },
  created () {
      this.loadPokemons(this.allPokemonsUrl)
    },
  data() {
    return {
      allPokemonsUrl: 'https://pokeapi.co/api/v2/pokemon?',
      showOverLay: false,
      pokemons: [],
      pokemon: null,
      next: null,
      previous: null,
    };
  },
  methods: {
    showPokemon(pokemon) {
      this.showOverLay = true
      axios.get(pokemon.url).then(({data}) => {
        console.log(data)
        this.pokemon = data
        this.showOverLay = false
      });
    },
    loadPokemons (url) {
      this.showOverLay = true
      axios.get(url).then(({data}) => {
        console.log(data)
        this.pokemons = data.results
        this.next = data.next
        this.previous = data.previous
        this.showOverLay = false
      });
    }
  }
};



</script>
<style>
</style>
