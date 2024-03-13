import React, { useState, useEffect } from 'react';

const QuizManagement = () => {
  const [quizzes, setQuizzes] = useState([
    { id: 1, title: 'Quiz 1', questions: [{ id: 1, questionText: 'Question 1' }, { id: 2, questionText: 'Question 2' }] },
    { id: 2, title: 'Quiz 2', questions: [{ id: 3, questionText: 'Question 3' }, { id: 4, questionText: 'Question 4' }] },
    // Add more static quiz data as needed
    { id: 3, title: 'Quiz 3', questions: [{ id: 5, questionText: 'Question 5' }, { id: 6, questionText: 'Question 6' }] },
    { id: 4, title: 'Quiz 4', questions: [{ id: 7, questionText: 'Question 7' }, { id: 8, questionText: 'Question 8' }] },
  ]);

  useEffect(() => {
    // If fetching data from the backend:
    // fetch('/api/admin/quizzes')
    //   .then(response => response.json())
    //   .then(data => setQuizzes(data));
  }, []);

  return (
    <div>
      <h2>Quiz Management</h2>
      <h1>hello quiz</h1>
      {/* Display quiz data in a table */}
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Questions Count</th>
            {/* Add more columns based on your quiz data */}
          </tr>
        </thead>
        <tbody>
          {quizzes.map(quiz => (
            <tr key={quiz.id}>
              <td>{quiz.id}</td>
              <td>{quiz.title}</td>
              <td>{quiz.questions.length}</td>
              {/* Add more cells based on your quiz data */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default QuizManagement;
