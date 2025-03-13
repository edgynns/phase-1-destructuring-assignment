// Strings

const farmAnimals = 'cow horse sheep pig chicken';
const [moo, neigh, baa, oink, cluck] = farmAnimals.split(' ');

// 1. Use destructuring to assign appropriate variables based on the sounds animals make.
const [bessie, , dolly, babe, little] = farmAnimals.split(' ');

// 2. Bolt the horse wandered off, so just give us four animals
const [blackAndWhite, , black, pink] = farmAnimals.split(' ');

// Arrays
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

// 3. Use destructuring to assign appropriate variables using the color names.
const [red, orange, yellow, green, blue, indigo, violet] = colors;

// 4. Some people have a hard time picking out indigo, so let's leave that one out, using initials.
const [r, o, y, g, b, , v] = colors;

// 5. But wait! Indigo is now feeling *super* left out. Let's only assign indigo using indg.
const [, , , , , indg] = colors;

// Objects
const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
};

// 6. Use destructuring to assign all variables using the keys as variable names.
const { muppetName, color, song, job, partner } = muppet;

const nestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};

// 7. Use destructuring to assign songs 2 and 4, and Kermit's job and partner
const {
  album: {
    theMuppetMovie: { song2, song4 }
  },
  nestedJob,
  nestedPartner
} = nestedMuppet;
