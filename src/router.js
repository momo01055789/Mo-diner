import { createRouter, createWebHistory } from 'vue-router'
import AboutUs from './components/Links/AboutUs'
import Recipes from './components/Links/Recipes'

const routes = 
[
    {
        name:'aboutus',
        component:AboutUs,
        path:'/aboutus',
    },
    {
        name:'recipes',
        component:Recipes,
        path:'/recipes',
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to,from,savedPosition){
        if (savedPosition) {
            return savedPosition;
        }else if(to.hash){
            const options = {
                top: document.querySelector(to.hash).offsetTop,behavior: 'smooth',
            };
            window.scrollTo(options)
        }else{
            return{x: 0,y: 0};
        }
    }
})

export default router;