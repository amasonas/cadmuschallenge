<template>
  <card class="card-user">
    <div slot="image">
      <img src="@/assets/img/background.png" alt="...">
    </div>
    <div>
      <div class="author">
        <img class="avatar border-white" :src="pokemon.sprites.front_default">
        <h2 class="title">
          {{pokemon.name}}
        </h2>
      </div>
      <p class="description text-center">
        weight: {{pokemon.weight}}
      </p>
    </div>
    <hr>
    <div class="text-center">
      <div class="row">
        <table class="table table-striped table-hover">
          <thead>
          <tr>
            <td><h3>Abilities</h3></td>
          </tr>
          </thead>
          <tbody>
          <tr
            v-for="ability in pokemon.abilities"
          >
            <td>{{ability.ability.name}}</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
    <hr>
  </card>
</template>
<script>
 export default {
    name: 'Pokemon',
    props: {
      pokemon: Object,
    },
  }
</script>
