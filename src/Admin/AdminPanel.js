import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import UserManagement from './UserManagement';
import QuizManagement from './QuizManagement';

const AdminPanel = () => {
  return (
    <div>
      <nav>
        <NavLink to="/admin/users">User Management</NavLink>
        <NavLink to="/admin/quizzes">Quiz Management</NavLink>
      </nav>

     <Routes>
        <Route path="/admin/users" component={UserManagement} />
        <Route path="/admin/quizzes" component={QuizManagement} />
        </Routes>
    </div>
  );
};

export default AdminPanel;
