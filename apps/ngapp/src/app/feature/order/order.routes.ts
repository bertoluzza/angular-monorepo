import { Routes } from '@angular/router';

export default <Routes>[
  {
    path: '',
    providers: [],
    children: [
      {
        path: ':id',
        loadComponent: () =>
          import('./order-detail/order-detail.component').then(
            (m) => m.OrderDetailComponent
          ),
      },
      {
        path: '',
        loadComponent: () =>
          import('./order-dashboard/order-dashboard.component').then(
            (m) => m.OrderDashboardComponent
          ),
      },
    ],
  },
];
