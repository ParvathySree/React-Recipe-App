import Header from './components/Header/Header';
import Body from './components/Body/Body';
import Recipe from './components/Recipe/Recipe';
import { createBrowserRouter, Outlet } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header/>
      <Outlet/>
    </div>
  );
}

export const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:'/',
        element:<Body/>
      },
      {
        path:'/recipe',
        element:<Recipe/>
      }
    ]
  }]
)

export default App;
