const OCC = [
  { key: "birthday", k: "Birthday", hello: n => "Happy birthday, " + n + ".", ph: "Write your birthday message…", theme: { bg: "#2a1240", panel: "#3d1c5c", acc: "#ffd166", acc2: "#ff8fab" } },
  { key: "welcome-back", k: "Welcome back", hello: n => "Welcome back, " + n + ".", ph: "Tell them what you missed…", theme: { bg: "#0f1d2e", panel: "#17304a", acc: "#8ff0c8", acc2: "#7cc4ff" } },
  { key: "sorry", k: "Sorry", hello: n => n + ", I have something to say.", ph: "Say what you mean, plainly…", theme: { bg: "#1b1f2a", panel: "#2a3040", acc: "#cfd8ff", acc2: "#9aa7d6" } },
  { key: "thank-you", k: "Thank you", hello: n => "Thank you, " + n + ".", ph: "Say what you’re thankful for…", theme: { bg: "#12261f", panel: "#1b3a2f", acc: "#ffe08a", acc2: "#9be3b1" } },
  { key: "congratulations", k: "Congratulations", hello: n => "Congratulations, " + n + "!", ph: "Say what you’re proud of…", theme: { bg: "#1f1410", panel: "#382318", acc: "#ffc24b", acc2: "#ff7a59" } },
  { key: "just-because", k: "Just because", hello: n => n + ", someone left you something.", ph: "Write whatever you want them to read…", theme: { bg: "#0f1530", panel: "#19214a", acc: "#8ff0c8", acc2: "#b9a7ff" } }
];
const LEVELS = [
  { key: "easy", k: "Easy (3x3)", n: 3, free: 2 },
  { key: "medium", k: "Medium (4x4)", n: 4, free: 3 },
  { key: "hard", k: "Hard (5x5)", n: 5, free: 4 }
];
