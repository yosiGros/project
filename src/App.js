import React from 'react';
import MyHome from './myhome';
import LogIn from './logIn';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Info from './info';
import Todos from './todos'
import Posts from './posts';
import Albums from './albums';
import Comments from './comments';
import Photos from './photos';

const App = () => {

  return (
    <div>
      <BrowserRouter>
        <Routes> 
          <Route path="/" element={<LogIn />}/>
            <Route index element={<LogIn />} />
            <Route path="MyHome" element={<MyHome />} >
            <Route path="info" element={<Info />} />
            <Route path="todos" element={<Todos />} />
            <Route path="posts" element={<Posts />} >
            <Route path="Comments" element={<Comments />} />
            </Route>
            <Route path="albums" element={<Albums />} >
            <Route path="photos" element={<Photos />} >
            </Route>
            </Route>
            </Route>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
