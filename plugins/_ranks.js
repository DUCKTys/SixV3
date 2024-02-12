
global.rpg = {
	
  role(level) {
    level = parseInt(level)
    if (isNaN(level)) return { name: '', level: '' }
    
    const role = [
      { name: "Warrior", level: 0 }, 
      { name: "Elite", level: 5 }, 
      { name: "Master", level: 10 }, 
      { name: "Grandmaster", level: 15 }, 
      { name: "Epic", level: 30 }, 
      { name: "Legend", level: 40 }, 
      { name: "Mythic", level: 55 }, 
      { name: "Mythical Honor", level: 300 }
      { name: "Mythical Glory", level: 500 }
      { name: "Mythical Immortal", level: 1000 }
    ];

    return role.reverse().find(role => level >= role.level)
  }
}
