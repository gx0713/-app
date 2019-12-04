import Vue from 'vue';
import VuerRouter from 'vue-router';

import Goods from '@/components/goods/goods.vue'
import Ratings from '@/components/ratings/ratings.vue'
import Seller from '@/components/seller/seller.vue'

Vue.use(VuerRouter);

export default new VuerRouter({
    mode: 'history',
    routes:[
        {path:'/',redirect:'/goods'},
        {path:'/goods',component:Goods},
        {path:'/ratings',component:Ratings},
        {path:'/seller',component:Seller},
    ],

    
    linkExactActiveClass:"avtive",
    linkActiveClass:"active",
})