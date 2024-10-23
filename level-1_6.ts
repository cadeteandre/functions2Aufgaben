type Monster = {
    name: string,
    type: string,
    health: number,
    strength: number,
    speed: number
}

const createMonster = (name: string, type: string, health?: number, strength?: number, speed?: number): Monster => {
    const newMonster: Monster = {
        name: name,
        type: type,
        health: health ?? 100,
        strength: strength ?? 50,
        speed: speed ?? 25
    }
    return newMonster;
}
console.log(createMonster('Dracula', 'Vampire'));
console.log(createMonster('Frankenstein', 'Artificial Being', 300));
console.log(createMonster('Mummy', 'Undead', 200, 60));
console.log(createMonster('Werewolf', 'Lycanthrope', 150, 80, 50));