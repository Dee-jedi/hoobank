import { useState } from 'react';

import { Navbar, Hero, Stats, Business } from './components';

function App() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="bg-primary">
      <Navbar toggle={toggle} setToggle={setToggle} />
      <div
        className={
          toggle ? 'opacity-40 transition-all ease-linear duration-200' : ''
        }
      >
        <Hero />
        <Stats />
        <Business />
      </div>
    </div>
  );
}

export default App;
