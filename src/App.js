import React, { Fragment, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Navbar from './components/Navbar';

const items = [
  {
    title: 'What is React?',
    content: 'React is a front end javascript framework',
  },
  {
    title: 'Why use React?',
    content: 'React is a favorite JS library among engineers',
  },
  {
    title: 'How do you use React?',
    content: 'You use React by creating components',
  },
];

const options = [
  {
    label: 'The Color Red',
    value: 'red',
  },
  {
    label: 'The Color Green',
    value: 'green',
  },
  {
    label: 'A Shade of Blue',
    value: 'blue',
  },
];

const App = () => {
  const [selected, setSelected] = useState(options[0]);
  return (
    <Fragment>
      <Navbar />
      <Routes>
        <Route path="/" index element={<Accordion items={items} />} />
        <Route path="/list" element={<Search />} />
        <Route
          path="/dropdown"
          element={
            <Dropdown
              label="Select a color"
              options={options}
              selected={selected}
              onSelectedChange={setSelected}
            />
          }
        />
        <Route path="/translate" element={<Translate />} />
      </Routes>
    </Fragment>
  );
};
export default App;
