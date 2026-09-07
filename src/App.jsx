import { useState } from "react";
import { CORE_CONCEPTS } from "./data.js";
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept.jsx";
import TabButton from "./components/TabButton.jsx";
import React from "react";
import { EXAMPLES } from "./data.js";

function App() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handlecelect(selectButton) {
    setSelectedTopic(selectButton);
    // console.log(selectedTopic);
  }

  let tabContent = <p>ple select a topic.</p>;
  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>
            {EXAMPLES[selectedTopic].code}
          </code>
        </pre>
      </div>
    )
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Cencepts</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem) => (
              <CoreConcept key={conceptItem.title} {...conceptItem} />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={selectedTopic === 'components'} onSelect={() => handlecelect('components')}>components</TabButton>
            <TabButton isSelected={selectedTopic === 'jsx'} onSelect={() => handlecelect('jsx')}>jsx</TabButton>
            <TabButton isSelected={selectedTopic === 'props'} onSelect={() => handlecelect('props')}>props</TabButton>
            <TabButton isSelected={selectedTopic === 'state'} onSelect={() => handlecelect('state')}>state</TabButton>
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App
