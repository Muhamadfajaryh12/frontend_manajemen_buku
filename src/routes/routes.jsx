import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import BookPage from "../page/BookPage";
import FormBookPage from "../page/FormBookPage";
import BookDetailPage from "../page/BookDetailPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <BookPage />,
      },
      {
        path: "/:id",
        element: <BookDetailPage />,
      },
      {
        path: "form/:id?",
        element: <FormBookPage />,
      },
    ],
  },
]);

export default router;
