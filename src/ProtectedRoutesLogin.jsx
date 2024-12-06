import { useSelector } from 'react-redux'
import { Outlet, Navigate } from 'react-router-dom'

const ProtectedRoutesLogin = () => {
    const { isLoggedIn } = useSelector((state) => state.auth)

    return (
        !isLoggedIn ? <Outlet /> : <Navigate to="/articles" />
    )
}

export default ProtectedRoutesLogin