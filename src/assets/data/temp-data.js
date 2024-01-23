const metaData = [
  { id: 1, dates: [-5, -19], status: "solved" },
  { id: 2, dates: [-4, -18], status: "probing" },
  { id: 3, dates: [0, 0], status: "unsolved" },
  { id: 4, dates: [-27, -29], status: "probing" },
  { id: 5, dates: [0, -8], status: "unsolved" },
  { id: 6, dates: [-15, -29], status: "solved" },
  { id: 7, dates: [-28, -30], status: "false" },
  { id: 8, dates: [-15, -15], status: "false" },
  { id: 9, dates: [-6, -22], status: "solved" },
  { id: 10, dates: [-19, -27], status: "unsolved" },
  { id: 11, dates: [-7, -20], status: "unsolved" },
  { id: 12, dates: [-9, -9], status: "false" },
  { id: 13, dates: [-14, -26], status: "probing" },
  { id: 14, dates: [-3, -30], status: "unsolved" },
  { id: 15, dates: [-18, -20], status: "probing" },
  { id: 16, dates: [-10, -23], status: "unrelated" },
  { id: 17, dates: [-2, -30], status: "unsolved" },
  { id: 18, dates: [-7, -10], status: "probing" },
  { id: 19, dates: [-13, -13], status: "false" },
  { id: 20, dates: [-6, -20], status: "false" },
  { id: 21, dates: [-4, -13], status: "probing" },
  { id: 22, dates: [0, -5], status: "unsolved" },
  { id: 23, dates: [-7, -7], status: "false" },
  { id: 24, dates: [-7, -11], status: "unrelated" },
  { id: 25, dates: [-16, -25], status: "false" },
  { id: 26, dates: [0, -24], status: "unsolved" },
  { id: 27, dates: [-8, -12], status: "solved" },
  { id: 28, dates: [-16, -28], status: "solved" },
  { id: 29, dates: [-26, -29], status: "probing" },
  { id: 30, dates: [-12, -23], status: "false" },
  { id: 31, dates: [-1, -30], status: "unsolved" },
  { id: 32, dates: [-17, -21], status: "unsolved" },
  { id: 33, dates: [-24, -24], status: "false" },
  { id: 34, dates: [0, -13], status: "unsolved" },
  { id: 35, dates: [-17, -30], status: "unsolved" },
];

// THE SHIT BELOW IS JUST MADE UP CODE AND MAY CONTAIN SOME BS LOGIC, BUT IT IS WRITTEN THAT WAY JUST FOR UNDERSTANDING PURPOSES.
// DO NOT TAKE IT TOO SERIOUSLY, JUST USE IT TO GET A BRIEF IDEA OF HOW THE STRUCTURE OF THE OBJECTS THAT WILL BE CREATED WILL LOOK LIKE.

// Some thing to keep in mind:
function importantConsiderations() {
  const consideration1 = metaData.dates.at(0) >= metaData.dates.at(1);

  const OtherStatuses =
    "unsolved" || "solved" || "probing" || "unrelated" || "false";
  const consideration2 =
    metaData.dates.at(0) >= -5 && !metaData.dates.at(0) > 0
      ? (metaData.status = "unsolved")
      : (metaData.status = OtherStatuses.random());

  return { consideration1, consideration2 };
}

const metaData2 = [
  { id: 1, dates: [-15, -57], status: "solved" },
  { id: 2, dates: [-12, -54], status: "probing" },
  { id: 3, dates: [0, 0], status: "unsolved" },
  { id: 4, dates: [-81, -87], status: "probing" },
  { id: 5, dates: [0, -24], status: "unsolved" },
  { id: 6, dates: [-45, -87], status: "solved" },
  { id: 7, dates: [-84, -90], status: "false" },
  { id: 8, dates: [-45, -45], status: "false" },
  { id: 9, dates: [-18, -66], status: "solved" },
  { id: 10, dates: [-57, -81], status: "unsolved" },
  { id: 11, dates: [-21, -60], status: "unsolved" },
  { id: 12, dates: [-27, -27], status: "false" },
  { id: 13, dates: [-42, -78], status: "probing" },
  { id: 14, dates: [-9, -90], status: "unsolved" },
  { id: 15, dates: [-54, -60], status: "probing" },
  { id: 16, dates: [-30, -69], status: "unrelated" },
  { id: 17, dates: [-6, -90], status: "unsolved" },
  { id: 18, dates: [-21, -30], status: "probing" },
  { id: 19, dates: [-39, -39], status: "false" },
  { id: 20, dates: [-18, -60], status: "false" },
  { id: 21, dates: [-12, -39], status: "probing" },
  { id: 22, dates: [0, -15], status: "unsolved" },
  { id: 23, dates: [-21, -21], status: "false" },
  { id: 24, dates: [-21, -33], status: "unrelated" },
  { id: 25, dates: [-48, -75], status: "false" },
  { id: 26, dates: [0, -72], status: "unsolved" },
  { id: 27, dates: [-24, -36], status: "solved" },
  { id: 28, dates: [-48, -84], status: "solved" },
  { id: 29, dates: [-78, -87], status: "probing" },
  { id: 30, dates: [-36, -69], status: "false" },
  { id: 31, dates: [-3, -90], status: "unsolved" },
  { id: 32, dates: [-51, -63], status: "unsolved" },
  { id: 33, dates: [-72, -72], status: "false" },
  { id: 34, dates: [0, -39], status: "unsolved" },
  { id: 35, dates: [-51, -90], status: "unsolved" },
];
