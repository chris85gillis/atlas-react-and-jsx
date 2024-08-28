import React from 'react';
import Header from './components/Header';
import Section from './components/Section';
import HelpfulResource from './components/HelpfulResource';
import './index.css';
import AboutMe from './components/AboutMe';

function App() {
  return (
    <div>
      <Header />

      <Section title="What is React?">
        <p>
        React is a JavaScript library for building user interfaces. It allows developers to create single-page applications with a component-based architecture. React efficiently updates and renders the right components when data changes, using a virtual DOM to improve performance. Its declarative nature makes it easier to design interactive UIs, and its ecosystem supports various tools and libraries to enhance development.        </p>
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

      <Section title="Helpful Resources">
        <HelpfulResource
          link="https://reactjs.org/docs/getting-started.html"
          label="React Documentation"
        />
        <HelpfulResource
          link="https://www.youtube.com/watch?v=w7ejDZ8SWv8"
          label="React Crash Course"
        />
        <HelpfulResource
          link="https://egghead.io/courses/the-beginner-s-guide-to-react"
          label="Beginner's Guide to React"
        />
      </Section>

      <Section>
        <AboutMe />
      </Section>
    </div>
  );
}

export default App;