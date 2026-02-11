import { GitHubBanner, Refine } from "@refinedev/core";
import { DevtoolsPanel, DevtoolsProvider } from "@refinedev/devtools";
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";

import routerProvider, { DocumentTitleHandler, UnsavedChangesNotifier } from "@refinedev/react-router";

import { BrowserRouter, Route, Routes } from "react-router";
import { dataProvider } from "./providers/refineFirebase/dataProvider";
import { authProvider } from "./providers/refineFirebase/authProvider";
import { UserList } from "./pages/UserList";
import { UserCreate } from "./pages/UserCreate";
import UserEdit from "./pages/UserEdit";
import { UserShow } from "./pages/UserShow";
import HomePage from "./pages/HomePage";
import { PageLayout } from "./components/layout/PageLayout";

function App() {
  return (
    <BrowserRouter>
      <RefineKbarProvider>
        <DevtoolsProvider>
          <Refine
            routerProvider={routerProvider}
            authProvider={authProvider}
            dataProvider={{
              default: dataProvider,
            }}
            resources={[
              {
                name: "users",
                list: "/users",
                create: "/users/create",
                edit: "/users/edit/:id",
                show: "/users/show/:id",
              },
            ]}           
            options={{
              syncWithLocation: true,
              warnWhenUnsavedChanges: true,
              projectId: "EAHcBS-YkA0Mw-0QhN8v",
            }}
          >
            <Routes>
              <Route element={<PageLayout />}>
                <Route path="/">
                  <Route index element={<HomePage />} />
                </Route>
                <Route path="/users">
                  <Route index element={<UserList />} />
                  <Route path="create" element={<UserCreate />} />
                  <Route path="edit/:id" element={<UserEdit />} />
                  <Route path="show/:id" element={<UserShow />} />
                </Route>
              </Route>
            </Routes>
            <RefineKbar />
            <UnsavedChangesNotifier />
            <DocumentTitleHandler />
          </Refine>
          <DevtoolsPanel />
        </DevtoolsProvider>
      </RefineKbarProvider>
    </BrowserRouter>
  );
}

export default App;
