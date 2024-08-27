import React from 'react';
import Header from './components/Header';
import Section from './components/Section';
import './index.css';

function App() {
  return (
    <div className="app-container">
      <Header />

      <Section title="What is React?">
        <p>
          React is a JavaScript library for building user interfaces. It allows developers to create single-page applications with a component-based architecture. React efficiently updates and renders the right components when data changes, using a virtual DOM to improve performance. Its declarative nature makes it easier to design interactive UIs, and its ecosystem supports various tools and libraries to enhance development.
        </p>
      </Section>

      <Section title="Benefits of React">
        <ul>
          <li>Component-Based Architecture: React's component-based architecture promotes reusable and modular code.</li>
          <li>Virtual DOM: React uses a virtual DOM to efficiently update and render only the parts of the UI that change.</li>
          <li>Declarative Syntax: React's declarative syntax makes it easier to design and manage complex UIs.</li>
          <li>Strong Community: React has a large and active community, providing extensive support and a rich ecosystem of tools and libraries.</li>
          <li>Performance Optimization: React's performance optimizations and efficient rendering strategies improve application speed and responsiveness.</li>
        </ul>
      </Section>
    </div>
  );
}

export default App;