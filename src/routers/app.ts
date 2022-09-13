export interface Route {
  code?: string;
  name: string;
  path: string;
  isProtected: boolean;
  tFile: string;
}

interface AppRoutes {
  [path: string]: Route;
}

export const appRoutes: AppRoutes = {
  home: {
    code: 'home.page',
    name: 'home',
    path: '/',
    isProtected: false,
    tFile: 'page',
  },
  dashboard: {
    code: 'dashboard.page',
    name: 'dashboard',
    path: '/dashboard',
    isProtected: false,
    tFile: 'page',
  },
};
