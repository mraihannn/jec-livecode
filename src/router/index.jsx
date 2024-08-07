import { createBrowserRouter } from "react-router-dom";
import LayoutEMR from "../components/LayoutEMR";
import PatientReviewPage from "../pages/PatientReviewPage";
import LayoutExamSetup from "../components/LayoutExamSetup";
import ExamToRoomPage from "../pages/ExamToRoomPage";

const router = createBrowserRouter([
  {
    element: <LayoutEMR />,
    children: [
      {
        path: "/",
        element: <PatientReviewPage />,
      },
    ],
  },
  {
    element: <LayoutExamSetup />,
    children: [
      {
        path: "/examtoroom",
        element: <ExamToRoomPage />,
      },
    ],
  },
]);

export default router;
