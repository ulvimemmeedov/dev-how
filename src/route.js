import VueRouter from 'vue-router';
import Home from './components/Home';
import NotFound from './components/NotFound';
import Profile from './components/Profile';
import Lists from './components/Lists';
import Article from './components/ArticleSingle'
const router = new VueRouter({
    routes: [
        {
            path: '/',
            component: Home,
        },
        {
            path: '/profile',
            component: Profile,
            props: {
                user:
                    {
                        username:"ulvimemmeedov",
                        followers:"555",
                        following:"44",
                        posts:"159",
                        bio:
                        "limit 113 Lorem elit. dicta ratione sapiente. Modi ea namdignissimos doloremque repellendus sint quasi saepe odio",
                        notification:[]
                    }
            }
        },
        {
            path: '/list',
            component: Lists,
        },
        {
            path: '/article',
            component: Article,
        },
        {
            path: '/*',
            component: NotFound,
        }
    ],
    mode: 'history'
})
export default router