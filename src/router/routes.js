import logado from './middleware/logado'

const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/Index.vue')
      }
    ]
  },
  {
    path: '/pss/:id',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        name: 'pss',
        path: '',
        component: () => import('pages/pss/Detalhe')
      }
    ]
  },
  {
    path: '/inscricao/vaga/:id',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        name: 'inscricao',
        path: '',
        component: () => import('pages/inscricao/Cadastro'),
        beforeEnter: logado
      }
    ]
  },
  {
    path: '/inscricao/usuario',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        name: 'inscricaoUsuario',
        path: '',
        component: () => import('pages/inscricao/Usuario'),
        beforeEnter: logado
      }
    ]
  },
  {
    path: '/login',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        name: 'login',
        path: '',
        component: () => import('pages/usuario/Login')
      }
    ]
  },
  {
    path: '/usuario/cadastro',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        name: 'cadastro',
        path: '',
        component: () => import('pages/usuario/Cadastro')
      }
    ]
  },
  {
    path: '/usuario/resetsenha',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        name: 'resetsenha',
        path: '',
        component: () => import('pages/usuario/ResetSenha')
      }
    ]
  },
  {
    path: '/usuario/alterarsenha/:token',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        name: 'alterarsenha',
        path: '',
        component: () => import('pages/usuario/AlterarSenha')
      }
    ]
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
