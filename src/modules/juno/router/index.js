export default {
    name: 'juno',
    path: '/',
    component: () => import(/* webpackChunkName: "JunoView" */ '@/modules/juno/layouts/JunoLayout.vue'),
    children: [
        {
            name: 'juno',
            path: '',
            component: () => import(/* webpackChunkName: "JunoView" */ '@/modules/juno/views/JunoView.vue')
        },
        {
            name: 'wallet',
            path: 'juno/:wallet?',
            component: () => import(/* webpackChunkName: "WalletView" */ '@/modules/juno/views/WalletView.vue')
        },
        {
            name: 'hashtag',
            path: 'juno/ht/:hashtag?',
            component: () => import(/* webpackChunkName: "HashtagView" */ '@/modules/juno/views/HashtagView.vue')
        },
        {
            name: 'post',
            path: 'juno/p/:key?',
            component: () => import(/* webpackChunkName: "PostView" */ '@/modules/juno/views/PostView.vue')
        }
    ]
}