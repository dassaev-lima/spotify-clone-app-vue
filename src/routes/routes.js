/* Importando funções para usar o vue router */
import {createRouter, createWebHistory} from "vue-router";
/* Importando os componentes de páginas */
import Home from "../pages/Home.vue";

/* Criando as rotas e apontando para os componentes */
const routes = [
    { path: '/', component: Home},
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
