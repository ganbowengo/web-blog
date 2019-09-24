import Front from '@system/blog-front/Front'
import FrontHome from '@system/blog-front/Home'
import FrontPage from '@system/blog-front/PagesShow'
import Content from '@system/blog-front/components/Content'

import Manage from '@system/blog-manager/Manage'
import ManageHome from '@system/blog-manager/Home'

const router = [
    {
        path: '/front',
        component: Front,
        children: [
            {
                path: 'home',
                component: FrontHome,
                children: [
                    {
                        path: '',
                        component: Content
                    },
                    {
                        path: 'page/:id',
                        component: FrontPage
                    }
                ]
            },
            {
                path: '',
                redirect: '/front/home'
            }
        ]
    },
    {
        path: '/manage/',
        component: Manage,
        children: [{
            path: 'home',
            component: ManageHome
        },
        {
            path: '',
            component: ManageHome
        }
        ]
    },
    {
        path: '/',
        redirect: '/front'
    }
]

export default router