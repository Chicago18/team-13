import { HomePage } from './pages/home'
import { DocumentDetailsPage } from './pages/documents/details';
import { DocumentListPage } from './pages/documents/list';

const TODO = () => 'TODO!!!'

export const routes = [
  {
    path: "/",
    text: "Home",
    icon: "home",
    exact: true,
    main: HomePage,
  },
  {
    path: "/documents",
    text: "Documents",
    icon: "home",
    exact: true,
    main: DocumentListPage,
    routes: [
      {
        path: "/documents/create",
        text: "Documents",
        main: TODO,
      },
      {
        path: "/documents/:id",
        text: "Documents",
        main: DocumentDetailsPage
      },
    ]
  },
]