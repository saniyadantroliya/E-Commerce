import { createBrowserRouter } from "react-router-dom";
import { Login, Ragister, ForgotPassword, ResetPassword } from "../pages/auth";
import AppLayout from "./AppLayout";
import ProductCart from "../pages/products/list/common/ProductCart";

const router = createBrowserRouter([{
    path: "/auth",
    element: <AppLayout></AppLayout>,
    children: [{
        path: "login",
        element: <Login></Login>,
    },
    {


        path: "ragister",
        element: <Ragister></Ragister>,
    },
    {

        path: "forgotpassword",
        element: <ForgotPassword></ForgotPassword>,
    },
    {
        path: "resetpassword",
        element: <ResetPassword></ResetPassword>
    }

    ]


},
{
    path: "product/list",
    element: <ProductCart></ProductCart>
}
]);

export default router