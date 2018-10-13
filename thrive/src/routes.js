import { DocumentDetailsPage } from './pages/documents/details';
import { DocumentListPage } from './pages/documents/list';
import { ProfileDetailsPage } from './pages/profiles/details';
import { ProfileListPage } from './pages/profiles/list';
import { RegisterPage } from './pages/register';
import { CompanyRegisterPage } from './pages/companyregister';

const TODO = () => 'TODO!!!'

export const routes = [
  {
    path: "/register",
    text: "Register",
    icon: "home",
    exact: true,
    main: RegisterPage
  },
  {
    path: "/companyregister",
    text: "Company Register",
    icon: "home",
    exact: true,
    main: CompanyRegisterPage
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
