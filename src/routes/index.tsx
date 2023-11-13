import AuthRoutes from "./auth.routes"
import AppRoutes from "./app.routes"

const Routes = () => {
    const isAuthenticated = false
    const loading = false

    return(
        isAuthenticated 
        ? <AppRoutes/>
        : <AuthRoutes/>
    )
}

export default Routes