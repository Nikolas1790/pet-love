import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { PrivateRoute } from "./PrivateRoute";
import { RestrictedRoute } from "./RestrictedRoute";
import { lazy, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAuth } from "hooks/useAyth";
import Loader from "./Loader/Loader";
import { refreshUser } from "../redux/auth/operationsAuth";
import { selectToken } from "../redux/auth/selectorAuth";

const Register = lazy(() => import("../pages/RegisterPage"));
const Login = lazy(() => import("../pages/LoginPage"));
const News = lazy(() => import("../pages/NewsPage"));
const Notices = lazy(() => import("../pages/NoticesPage"));
const Friends = lazy(() => import("../pages/FriendsPage"));
const Profile = lazy(() => import("../pages/ProfilePage"));
const Home = lazy(() => import("../pages/HomePage"));
const AddPet = lazy(() => import("../pages/AddPetPage"));

const NotFoundPage = lazy(() => import('./NotFoundPage/NotFoundPage'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();
  const token = useSelector(selectToken);

  useEffect(() => {
    if (token) {
      dispatch(refreshUser());
    }
  }, [dispatch, token ]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate replace to="/login" />} />
          <Route path="/register" element={<RestrictedRoute redirectTo='/home' component={<Register/>} />} />
          <Route path="/login" element={<RestrictedRoute redirectTo="/home" component={<Login />} />} />
          <Route path="/home" element={<RestrictedRoute redirectTo="/home" component={<Home />} />} />
          <Route path="/news" element={<News />} />
          <Route path="/notices" element={<Notices />} />
          <Route path="/friends" element={<Friends />}  />
          
          <Route path="/profile" element={<PrivateRoute redirectTo="/profile" component={<Profile />} />} />
          <Route path="/add-pet" element={<PrivateRoute redirectTo="/add-pet" component={<AddPet />} />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
      <ToastContainer autoClose={1500} />
    </div>
  );
};