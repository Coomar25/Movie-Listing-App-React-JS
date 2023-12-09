import Cookies from "js-cookie";

export const setTokenInCookie = (token, user) => {
  const userString = JSON.stringify(user);

  // cookie lai 4 din samma store garam hai tw
  const expirationDate = new Date();
  expirationDate.setDate(expirationDate.getDate() + 1);
  Cookies.set("token", token, { expires: expirationDate, path: "/" });
  Cookies.set("user", userString, { expires: expirationDate, path: "/" });
};

export const getTokenFromCookie = () => {
    try{
        const token = Cookies.get("token");
        const userString = Cookies.get("user");
        if(!token || !userString){
          throw new Error('No token found');
        }
        const user = userString ? JSON.parse(userString) : null;
        return { token, user };
    }catch(error){
        console.error('Error while getting token from cookies:', error.message);
        return {token: null, user: null};
    }
};

export const removeTokenFromCookie = () => {
  Cookies.remove("token", { path: "/" });
  Cookies.remove("user", { path: "/" });
};
