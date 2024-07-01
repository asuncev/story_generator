/*Story generator

Characters: family, teenagers priest, scientist, writer
Setting: in an old house, in an abandoned hospital, in the woods, walking through a secret passageway
Conflict: haunted by, chased by, murdered by, abducted by
Villian: demons, ghosts, clowns, group of vampires

"Today's story: ..."

*/


//Generate random number
const generateRandomNumber = num => {
    return Math.floor(Math.random() * num)
}

//All story versions
const collectiveStory = {
    characters: ['Family', 'Teenagers priest', 'Scientist', 'Writer'],
    settings: ['in an old house', 'in an abandoned hospital', 'in the woods', 'walking through a secret passageway'],
    conflict: ['haunted by', 'chased by', 'murdered by', 'abducted by'],
    villian: ['demons', 'ghosts', 'clowns', 'group of vampires']
}

//Loop through the story versions and push to a new array
let todayStory = [];

for (let prop in collectiveStory) {
    let optionIdx = generateRandomNumber(collectiveStory[prop].length);
    switch (prop) {
        case 'characters': 
            todayStory.push('Today\'s story: ' + collectiveStory[prop][optionIdx]); 
            break;
        case 'settings': 
            todayStory.push(collectiveStory[prop][optionIdx]);
            break;
        case 'conflict': 
            todayStory.push(collectiveStory[prop][optionIdx]);
            break;
        case 'villian': 
            todayStory.push(collectiveStory[prop][optionIdx] + '.');
            break;
        default:
            console.log("Error");
    }
}

let finalStory = todayStory.join(' ');

console.log(finalStory);



