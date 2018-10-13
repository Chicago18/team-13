import { HomePage } from './pages/home'
import { DocumentDetailsPage } from './pages/documents/details';
import { DocumentListPage } from './pages/documents/list';
import { ProfileDetailsPage } from './pages/profiles/details';
import { ProfileListPage } from './pages/profiles/list';
import { RegisterPage } from './pages/register';

const TODO = () => 'TODO!!!'

export const routes = [
  {
    path: "/",
    text: "Home",
    exact: true,
    main: HomePage,
  },
  {
    path: "register",
    text: "Register",
    icon: "home",
    exact: true,
    main: ProfileListPage,
    routes: [
      {
        path: "/register",
        text: "Register",
        main: RegisterPage,
      },
    ]
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
  {
    path: "/profiles",
    text: "Profiles",
    icon: "home",
    exact: true,
    main: ProfileListPage,
    routes: [
      {
        path: "/profiles/create",
        text: "Profile",
        main: TODO,
      },
      {
        path: "/profiles/:id",
        text: "Profile",
        main: ProfileDetailsPage
      },
    ]
  },
]
