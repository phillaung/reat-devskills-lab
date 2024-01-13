import './App.css';
import SkillList from './SkillList';
import NewSkillForm from './NewSkillForm';
import { useState } from 'react';

function App() {
  const [skills, setSkills] = useState([
      { name: 'HTML', level: 5 },
      { name: 'CSS', level: 3 },
      { name: 'JavaScript', level: 4 },
      { name: 'Python', level: 2 },
  ]);
  function addNewSkill(skill) {
    const newSkills = [...skills, skill]
    setSkills(newSkills)
  }
  return (
      <div className='App'>
          <h1>React Dev Skills</h1>
          {skills && <SkillList skills={skills} />}
          <hr />
          <NewSkillForm addNewSkill={addNewSkill} />
      </div>
  );
}

export default App;
