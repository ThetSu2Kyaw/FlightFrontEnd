import React from 'react';

function App() {
  return (
    <>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#books">Books</a></li>
          <li><a href="#create">Create Book</a></li>
          <li><a href="#update">Update Book</a></li>
          <li><a href="#delete">Delete Book</a></li>
          <li><button id="mode-toggle">Toggle Mode</button></li>
        </ul>
      </nav>
      <main>
        <section id="home">
          <h1>Welcome to the Library Blog</h1>
        </section>
        <section id="books">
          <h2>List of Books</h2>
          <ul>
            <li><a href="#book1">Book 1</a></li>
            <li><a href="#book2">Book 2</a></li>
            <li><a href="#book3">Book 3</a></li>
          </ul>
        </section>
        <section id="book-detail">
          <h2>Book Detail</h2>
          <p id="book-info">Select a book to see details.</p>
        </section>
        <section id="create">
          <h2>Create Book</h2>
          <form id="create-form">
            <label htmlFor="create-title">Title:</label>
            <input type="text" id="create-title" name="title" />
            <label htmlFor="create-author">Author:</label>
            <input type="text" id="create-author" name="author" />
            <button type="submit">Create</button>
          </form>
        </section>
        <section id="update">
          <h2>Update Book</h2>
          <form id="update-form">
            <label htmlFor="update-id">Book ID:</label>
            <input type="text" id="update-id" name="id" />
            <label htmlFor="update-title">New Title:</label>
            <input type="text" id="update-title" name="title" />
            <label htmlFor="update-author">New Author:</label>
            <input type="text" id="update-author" name="author" />
            <button type="submit">Update</button>
          </form>
        </section>
        <section id="delete">
          <h2>Delete Book</h2>
          <form id="delete-form">
            <label htmlFor="delete-id">Book ID:</label>
            <input type="text" id="delete-id" name="id" />
            <button type="submit">Delete</button>
          </form>
        </section>
      </main>
    </>
  );
}

export default App;
