import React from 'react';
import Header from './Header';
import Footer from './Footer';
import TaskList from './TaskList';

const Main = ({ tasks }) => {
  return (
    <main>
      <Header />
      <TaskList tasks={tasks} />
      <Footer />
    </main>
  );
};

export default Main;
