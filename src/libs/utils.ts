import { Route } from 'vue-router';
export const subTitle = (route: Route) => {
  const meta = route.meta || {};
  const title = process.env.VUE_APP_DOCUMENT_TITLE;
  window.document.title = meta.title
    ? `${meta.title} - ${title}`
    : title;
};
