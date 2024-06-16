import { createRouter, createWebHistory } from 'vue-router';
import Home from 'src/pages/Home.vue';
import Sobre from 'src/pages/Sobre.vue';
import Servicos from 'src/pages/Servicos.vue';
import Videos from 'src/pages/Videos.vue';
import Faq from 'src/pages/Faq.vue';
import PrivacyPolicy from 'src/pages/PrivacyPolicy.vue';
import TermsAndConditions from 'src/pages/TermsAndConditions.vue';
import Contato from 'src/pages/Contato.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/sobre', component: Sobre },  
  { path: '/servicos/:slug', component: Servicos },  
  { path: '/servicos', component: Servicos },  
  { path: '/recursos/videos', component: Videos },  
  { path: '/perguntas-frequentes', component: Faq },  
  { path: '/politica-de-privacidade', component: PrivacyPolicy },  
  { path: '/termos-e-condicoes', component: TermsAndConditions },
  { path: '/contato', component: Contato },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
