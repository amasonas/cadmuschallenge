import DashboardLayout from "@/layout/dashboard/DashboardLayout.vue";

import Pokemons from "@/pages/Pokemons.vue";

const routes = [
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/pokemons",
    children: [
      {
              path: "pokemons",
              name: "Pokemóns",
              component: Pokemons
      }
    ]
  }
];

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes;
