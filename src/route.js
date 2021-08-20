import VueRouter from 'vue-router';
import Home from './components/Home';
import NotFound from './components/NotFound';
import Profile from './components/Profile';
import Lists from './components/Lists';
import Article from './components/ArticleSingle';
import Login from './components/Login';
import Register from './components/Register';
import Settings from './components/Settings';
import Editor from './components/Editor';
import PasswordReset from './components/PasswordReset';
import Notification from "./components/Notifications";

const router = new VueRouter({
    routes: [
        {
            path: '/',
            component: Home,
        },
        {
            path: '/profile',
            component: Profile,
            
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
            path: '/login',
            component: Login,
        },
        {
            path: '/register',
            component: Register,
        },
        {
            path: '/settings',
            component: Settings,
        },
        
        {
            path: '/newpost',
            component: Editor,
        },
        {
            path: '/passwordreset',
            component: PasswordReset,
        },
        {
            path: '/notification',
            component: Notification,
        },
        {
            path: '/*',
            component: NotFound,
        }
    ],
    mode: 'history'
})
export default router