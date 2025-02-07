import { useState } from 'react';
import './App.css';


const App = () => {
  const [teamFighters, setTeamFighters] = useState([]);
  const [money, setMoney] = useState(100);
  const [zombieFighters, setZombieFighters] = useState([
    {
      id: 1,
      name: 'Survivor',
      price: 12,
      strength: 6,
      agility: 4,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/0c2d6b.png',
    },
    {
      id: 2,
      name: 'Scavenger',
      price: 10,
      strength: 5,
      agility: 5,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/033a16.png',
    },
    {
      id: 3,
      name: 'Shadow',
      price: 18,
      strength: 7,
      agility: 8,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/262c36.png',
    },
    {
      id: 4,
      name: 'Tracker',
      price: 14,
      strength: 7,
      agility: 6,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/3c1e70.png',
    },
    {
      id: 5,
      name: 'Sharpshooter',
      price: 20,
      strength: 6,
      agility: 8,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/4b2900.png',
    },
    {
      id: 6,
      name: 'Medic',
      price: 15,
      strength: 5,
      agility: 7,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5a1e02.png',
    },
    {
      id: 7,
      name: 'Engineer',
      price: 16,
      strength: 6,
      agility: 5,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5e103e.png',
    },
    {
      id: 8,
      name: 'Brawler',
      price: 11,
      strength: 8,
      agility: 3,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/67060c.png',
    },
    {
      id: 9,
      name: 'Infiltrator',
      price: 17,
      strength: 5,
      agility: 9,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/ac3220.png',
    },
    {
      id: 10,
      name: 'Leader',
      price: 22,
      strength: 7,
      agility: 6,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/e41f26.png',
    }
  ]);

  let totalStrength = teamFighters.reduce((total, fighter) => total + fighter.strength, 0);
  let totalAgility = teamFighters.reduce((total, fighter) => total + fighter.agility, 0);

  const handleAddFighter = (fighter) => {
    setTeamFighters([fighter, ...teamFighters])
    setZombieFighters(zombieFighters.filter(zombieFighter => zombieFighter.id !== fighter.id))

    if (money < fighter.price) {
      console.log('Not enought money!')
      return;
    } else {
      setMoney(money - fighter.price)
    }

  }

  const handleRemoveFighter = (fighter) => {
    const updatedTeam = teamFighters.filter(teamFighter => teamFighter.id !== fighter.id)

    const updatedZombieFighters = [...zombieFighters, fighter];

    setMoney(prevMoney => prevMoney + fighter.price);

    setZombieFighters(updatedZombieFighters);
    setTeamFighters(updatedTeam);

  }



  const ZombieFighterListItem = ({ fighter }) => {

    return (
      <li >
        <img src={fighter.img} alt={fighter.name} />
        <h3>Hello, I'm <strong>{fighter.name}</strong>, the Zombie Fighter!</h3>
        <p>price: {fighter.price}</p>
        <p>strength: {fighter.strength}</p>
        <p>agility: {fighter.agility}</p>
        <button onClick={() => handleAddFighter(fighter)}>Add to Team</button>
      </li>
    )
  }

  const TeamFighterListItem = ({ fighter }) => {

    return (
      <li >
        <img src={fighter.img} alt={fighter.name} />
        <h3>Hello, I'm <strong>{fighter.name}</strong>, the Zombie Fighter!</h3>
        <p>price: {fighter.price}</p>
        <p>strength: {fighter.strength}</p>
        <p>agility: {fighter.agility}</p>
        <button onClick={() => handleRemoveFighter(fighter)}>Remove From Team</button>
      </li>
    )
  }

  return (
    <>
      <h1>Zombie Fighters</h1>
      <p>Money: {money}</p>
      <h2>My Team</h2>
      <p>add team members</p>
      <p>Total Strength: {totalStrength}</p>
      <p>Total Agility: {totalAgility}</p>
      <ul>
        {teamFighters.length > 0 ? teamFighters.map((fighter) => (
          <TeamFighterListItem
            key={fighter.id}
            fighter={fighter}
            />
          ))
          :
          'Pick some team members!'}
      </ul>
          <hr />
      <ul>

        {zombieFighters.map((fighter) => (
          <ZombieFighterListItem
            key={fighter.id}
            fighter={fighter}
          />
        ))}
      </ul>


    </>
  );
};


export default App