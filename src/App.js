/** @jsxImportSource @emotion/react */

import { Route, Routes } from "react-router-dom";
import Login from "./pages/user/login/Login";
import Register from "./pages/user/register/Register";
import AuthRoute from "./routes/authRoute/AuthRoute";
import Main from "./pages/main/Main";
import Write from "./pages/write/Write";
import ViewPost from "./pages/viewPost/ViewPost";
import Modify from "./pages/modify/Modify";
import FindEmail from "./pages/user/findUser/findEmail/FindEmail";
import FindEmailResult from "./pages/user/findUser/findEmail/findEmailResult/FindEmailResult";
import FindPassword from "./pages/user/findUser/findPassword/FindPassword";
import ResetPassword from "./pages/user/findUser/findPassword/resetPassword/ResetPassword";


function App() {
  return (
    <Routes>
      <Route path="/auth/login" element={<AuthRoute path="/auth/login" element={<Login/>}/>}/>
      <Route path="/auth/register" element={<AuthRoute path="/auth/register" element={<Register/>}/>}/>
      <Route path="/auth/findemail" element={<AuthRoute path="/auth/findemail" element={<FindEmail/>}/>}/>
      <Route path="/auth/findemail/result/:email" element={<AuthRoute path="/auth/findemail/result" element={<FindEmailResult/>}/>}/>
      <Route path="/auth/findpassword" element={<AuthRoute path="/auth/findpassword" element={<FindPassword/>}/>}/>
      <Route path="/auth/resetpassword/:userid" element={<AuthRoute path="/auth/resetpassword" element={<ResetPassword/>}/>}/>
      <Route path="/" element={<AuthRoute path="/" element={<Main/>}/>}/>
      <Route path="/board/write" element={<AuthRoute path="/board/write" element={<Write/>}/>}/>
      <Route path="/board/view/:boardId" element={<AuthRoute path="/board/view/:boardId" element={<ViewPost/>}/>}/>
      <Route path="/board/modify/:boardId" element={<AuthRoute path="/board/modify/:boardId" element={<Modify/>}/>}/>
    </Routes>
  );
}

export default App;
