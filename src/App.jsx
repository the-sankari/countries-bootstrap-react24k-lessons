import { BrowserRouter, Route, Routes } from "react-router-dom";
import Countries from "./components/Countries";
import ErrorPage from "./components/ErrorPage";
import Home from "./components/Home";
import Layout from "./pages/Layout";
import CountrySingle from "./components/CountrySingle";
import Register from "./components/Register";
import Login from "./components/Login";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./auth/firebase";
import ProtectedRoute from "./auth/ProtectedRoute";

const App = () => {
  const [user] = useAuthState(auth);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route>
            {/* This is where other routes will go to allow Layout to be visible everywhere */}
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route element={<ProtectedRoute user={user} />}>
              <Route path="/countries" element={<Countries />} />
              <Route path="/countries/:single" element={<CountrySingle />} />
              <Route path="*" element={<ErrorPage />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
