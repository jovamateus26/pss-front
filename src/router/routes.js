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

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
