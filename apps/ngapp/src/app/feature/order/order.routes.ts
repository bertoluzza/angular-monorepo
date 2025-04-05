import { Routes } from '@angular/router';

export default <Routes>[
  {
    path: '',
    providers: [],
    children: [
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
