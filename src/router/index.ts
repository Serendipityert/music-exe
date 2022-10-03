import { createRouter, createWebHashHistory } from 'vue-router'


const publicRoutes = [
    {
        path: '/',
        name: 'Index',
        meta: {},
        component: () => import( '@/layout/index.vue' ),
        children: [ {
            path: '/',
            name: 'Recommend',
            meta: { isLogin: true },
            component: () => import( '@/view/recommend/index.vue' )
        }, {
            path: '/music-hall',
            name: 'MusicHall',
            meta: { isLogin: false },
            component: () => import( '@/view/music-hall/index.vue' )
        },
        {
            path: '/video',
            name: 'Video',
            meta: { isLogin: false },
            component: () => import( '@/view/video/index.vue' )
        },
        {
            path: '/radio-station',
            name: 'RadioStation',
            meta: { isLogin: false },
            component: () => import( '@/view/radio-station/index.vue' )
        },
        {
            path: '/i-like',
            name: 'ILike',
            meta: { isLogin: true },
            component: () => import( '@/view/i-like/index.vue' )
        },
        {
            path: '/local-download',
            name: 'LocalDownload',
            meta: { isLogin: false },
            component: () => import( '@/view/local-download/index.vue' )
        },
        {
            path: '/recently-played',
            name: 'RecentlyPlayed',
            meta: { isLogin: false },
            component: () => import( '@/view/recently-played/index.vue' )
        },
        {
            path: '/audition-list',
            name: 'AuditionList',
            meta: { isLogin: false },
            component: () => import( '@/view/audition-list/index.vue' )
        },
        {
            path: '/purchased-music',
            name: 'PurchasedMusic',
            meta: { isLogin: true },
            component: () => import( '@/view/purchased-music/index.vue' )
        },
        {
            path: '/play-mv',
            name: 'PlayMv',
            meta: { isLogin: false },
            component: () => import( '@/view/mv/index.vue' )
        },
        {
            path: '/music-comment',
            name: 'MusicComment',
            meta: { isLogin: false },
            component: () => import( '@/view/music-comment/index.vue' )
        },
        {
            path: '/theme',
            name: 'Theme',
            meta: { isLogin: false },
            component: () => import( '@/view/theme/index.vue' )
        },
        {
            path: '/user-main',
            name: 'UserMain',
            meta: { isLogin: true },
            component: () => import( '@/view/user-main/index.vue' )
        },
        {
            path: '/songer-detail',
            name: 'SongerDetail',
            meta: { isLogin: false },
            component: () => import( '@/components/songer/index.vue' )
        },
        {
            path: '/songer-album-detail',
            name: 'AlbumDetail',
            meta: { isLogin: false },
            component: () => import( '@/components/songer/album/album-detail/index.vue' )
        },
        {
            path: '/user-level-detail',
            name: 'UserLevelDetail',
            meta: { isLogin: true },
            component: () => import( '@/view/user-main/level/index.vue' )
        },
        {
            path: '/user-follow',
            name: 'UserFollow',
            meta: { isLogin: true },
            component: () => import( '@/view/user-main/follows/index.vue' )
        },
        {
            path: '/user-followeds',
            name: 'UserFolloweds',
            meta: { isLogin: true },
            component: () => import( '@/view/user-main/followeds/index.vue' )
        },
        ]
    }
]

const router = createRouter( {
    history: createWebHashHistory(),
    routes: publicRoutes
} )

export default router
