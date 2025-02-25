import { useNavigate } from "react-router-dom";

export const checkToken = (event) => {
   const navigate = useNavigate();
   if (localStorage.getItem('accessToken')) {
      navigate("/profile");
   } else {
      event.preventDefault();
      let register = confirm("Войдите в аккаунт");
      register ? openModal("register") : null;
   }
};