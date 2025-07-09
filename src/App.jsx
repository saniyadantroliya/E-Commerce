import { RouterProvider } from "react-router-dom"
import router from "./router/AppRouter"

const App = () => {
    return (
        <div>
            <RouterProvider router={router} />
        </div>
    )
}

export default App
