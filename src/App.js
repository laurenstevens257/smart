// src/App.js
import React, { useState } from 'react';
import './styles.css';

function IntroLetter({ projectName }) {
  return (
    <section>
      <h2>Introduction Letter</h2>
      <p>
        Thank you for the opportunity to provide an estimated cost for the proposed
        project at <strong>{projectName}</strong>. This proposal includes building
        descriptions, optional features, scheduling, and cost breakdowns.
      </p>
    </section>
  );
}

function BuildingSpecs() {
  return (
    <section>
      <h2>Building Specifications</h2>
      <ul>
        <li>Building Size: 32' x 40'</li>
        <li>Square Footage: 1,280 sq ft</li>
        <li>Floor Load: 50 PSF</li>
        <li>Wind Load: 110 MPH</li>
        <li>Roof Load: 20 PSF</li>
        <li>Occupancy Type: E (Classroom)</li>
        <li>Construction Type: V-B</li>
        <li>Seismic Rating: High</li>
      </ul>
    </section>
  );
}

function LongLeadItems() {
  const items = [
    { name: 'HVAC Units', leadTime: '14 to 16 Weeks' },
    { name: 'Vinyl Covered Tackboard (Koroseal)', leadTime: '6 to 12 Weeks' },
    { name: 'Windows', leadTime: '4 to 8 Weeks' },
  ];

  return (
    <section>
      <h2>Long Lead Items</h2>
      <table>
        <thead>
          <tr><th>Item</th><th>Lead Time</th></tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}><td>{item.name}</td><td>{item.leadTime}</td></tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

function App() {
  const [sections, setSections] = useState([]);
  const [projectName, setProjectName] = useState('Example School Site');

  const addSection = (name) => {
    if (!sections.includes(name)) {
      setSections([...sections, name]);
    }
  };

  return (
    <div className="App">
      <h1>Proposal Builder</h1>
      <input 
        type="text" 
        placeholder="Enter Project Name" 
        value={projectName} 
        onChange={(e) => setProjectName(e.target.value)}
      />

      <div className="section-buttons">
        <button onClick={() => addSection('IntroLetter')}>Add Intro Letter</button>
        <button onClick={() => addSection('BuildingSpecs')}>Add Building Specs</button>
        <button onClick={() => addSection('LongLeadItems')}>Add Long Lead Items</button>
      </div>

      <div className="proposal-preview">
        {sections.includes('IntroLetter') && <IntroLetter projectName={projectName} />}
        {sections.includes('BuildingSpecs') && <BuildingSpecs />}
        {sections.includes('LongLeadItems') && <LongLeadItems />}
      </div>
    </div>
  );
}

export default App;

