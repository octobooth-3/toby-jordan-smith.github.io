export interface Game {
  id: string;
  title: string;
  category: string;
  publisher: string;
  description: string;
  rating: number;
}

export const games: Game[] = [
  {
    id: "code-quest-odyssey",
    title: "Code Quest Odyssey",
    category: "Adventure",
    publisher: "CodeForge Studios",
    description:
      "Code Quest Odyssey launches you on an epic journey through enchanted digital realms where every line of code you write shapes the world around you. Solve ancient algorithmic puzzles, befriend quirky NPC companions, and uncover the secrets of the legendary Source Code.",
    rating: 4.9,
  },
  {
    id: "script-strike",
    title: "Script Strike",
    category: "Action",
    publisher: "CodeForge Studios",
    description:
      "Script Strike propels you into a fast-paced coding battleground where every keystroke could change the tide of battle. Compete against rival developers in real-time challenges, deploy powerful script combos, and climb the leaderboards to become the ultimate code warrior.",
    rating: 4.7,
  },
  {
    id: "binary-frontier",
    title: "Binary Frontier",
    category: "Adventure",
    publisher: "DevMasters Inc.",
    description:
      "Binary Frontier transports you into an uncharted cyber-world where every innovative code unlock opens new possibilities. Explore vast procedurally generated landscapes, decode mysterious binary transmissions, and build alliances with other digital pioneers.",
    rating: 4.8,
  },
  {
    id: "pixel-debugger",
    title: "Pixel Debugger",
    category: "Puzzle",
    publisher: "PixelPrime Games",
    description:
      "Pixel Debugger challenges you to find and fix bugs hidden within beautifully crafted pixel-art worlds. Each level presents a broken program that you must debug by rearranging code blocks, fixing logic errors, and optimizing algorithms before time runs out.",
    rating: 4.6,
  },
  {
    id: "syntax-wars",
    title: "Syntax Wars",
    category: "Strategy",
    publisher: "ByteCraft Entertainment",
    description:
      "Syntax Wars puts you in command of a code army battling for control of the Server Realm. Deploy functions as units, chain methods for devastating combos, and outmaneuver your opponents with superior architectural strategies in this tactical coding masterpiece.",
    rating: 4.5,
  },
  {
    id: "recursion-realm",
    title: "Recursion Realm",
    category: "RPG",
    publisher: "DevMasters Inc.",
    description:
      "Recursion Realm is a sprawling RPG where your character grows stronger by mastering recursive algorithms. Dive into dungeons that loop back on themselves, defeat bosses by finding their base case, and level up your skills across multiple programming paradigms.",
    rating: 4.8,
  },
  {
    id: "compile-kingdom",
    title: "Compile Kingdom",
    category: "Strategy",
    publisher: "CodeForge Studios",
    description:
      "Compile Kingdom tasks you with building and managing a thriving digital civilization. Gather resources by writing efficient code, construct buildings using design patterns, and defend your kingdom from runtime errors that threaten to crash your entire empire.",
    rating: 4.4,
  },
  {
    id: "loop-legends",
    title: "Loop Legends",
    category: "Action",
    publisher: "PixelPrime Games",
    description:
      "Loop Legends traps you in a time-loop action game where each cycle gives you a chance to write better code. Master iteration patterns, break free from infinite loops, and use your programming prowess to defeat the Clock Daemon and escape the eternal cycle.",
    rating: 4.3,
  },
  {
    id: "algorithm-arena",
    title: "Algorithm Arena",
    category: "Puzzle",
    publisher: "ByteCraft Entertainment",
    description:
      "Algorithm Arena drops you into competitive puzzle chambers where only the most efficient solutions survive. Race against the clock to implement sorting algorithms, optimize graph traversals, and prove that your code is faster than everyone else's.",
    rating: 4.7,
  },
  {
    id: "stack-overflow-saga",
    title: "Stack Overflow Saga",
    category: "RPG",
    publisher: "DevMasters Inc.",
    description:
      "Stack Overflow Saga is an epic RPG adventure through the treacherous Stack Mountains. Manage your call stack carefully as you navigate recursive dungeons, avoid stack overflow traps, and collect powerful exception-handling artifacts to save the digital kingdom.",
    rating: 4.6,
  },
  {
    id: "null-pointer-nightmare",
    title: "Null Pointer Nightmare",
    category: "Adventure",
    publisher: "ByteCraft Entertainment",
    description:
      "Null Pointer Nightmare plunges you into a horror-themed adventure where dereferenced pointers unleash digital monsters. Navigate through corrupted memory spaces, track down null references, and restore order before the entire system crashes into oblivion.",
    rating: 4.2,
  },
  {
    id: "function-fury",
    title: "Function Fury",
    category: "Action",
    publisher: "PixelPrime Games",
    description:
      "Function Fury is an adrenaline-pumping action game where every function call triggers explosive chain reactions. Compose higher-order attacks, curry your abilities for maximum damage, and prove that functional programming is the ultimate weapon.",
    rating: 4.5,
  },
];

export const categories = [...new Set(games.map((g) => g.category))].sort();
export const publishers = [...new Set(games.map((g) => g.publisher))].sort();
