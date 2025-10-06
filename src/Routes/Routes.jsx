import { createBrowserRouter } from "react-router";
import Products from "../Pages/Products/Products";
import Home from "../Pages/Home/Home";
import Root from "../Layouts/Root";
import ErrorPage from "../Pages/Error/ErrorPage";
import WishList from "../Pages/WishList/WishList";
 const router = createBrowserRouter([
  {
  path:'/',
  element:<Root></Root>,
  errorElement:<ErrorPage></ErrorPage>, 
  hydrateFallbackElement:<p>loading...</p>,
  children:[
     {
  path:'/home',
  element:<Home></Home>,
  loader:() =>   fetch('./data.json'),
  
},
 {
  path:'/products',
  element:<Products></Products>
},
 {
  path:'/wishList',
  element:<WishList></WishList>
}
  ]
  },
  {
    path:'*',
    element:<ErrorPage></ErrorPage>

  }
 
])
export default router
