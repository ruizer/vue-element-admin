import { Route } from 'vue-router';
export const subTitle = (route: Route) => {
  const meta = route.meta || {};
  window.document.title = meta.title
    ? `${meta.title} - 后台管理系统`
    : '后台管理系统';
};
