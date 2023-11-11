const adjective = [
  "Scandanavian",
  "Polish",
  "Czechian",
  "Austrian",
  "Slovenian",
  "Croatian",
  "Bosnian",
  "Albanian",
  "Serbian",
  "Bulgarian",
  "Romanian",
  "Slovakian",
  "Lithuanian",
  "Latvian",
  "Estonian",
  "Russian"
];

const muscle = [
  "hamstring",
  "pectoral",
  "chest",
  "shoulder",
  "calf",
  "thigh",
  "glute",
  "leg",
  "core",
  "abdominal",
  "quadricep",
  "bicep",
  "tricep",
  "arm",
  "back",
  "spine",
  "knee",
  "elbow",
  "deltoid",
  "toe",
  "pinky",
  "finger",
  "thumb",
  "wrist",
  "grip",
  "ankle",
  "foot",
  "palm",
  "hand",
  "shin",
  "neck",
  "cranial",
  "pelvic",
  "hip",
  "chin",
  "knuckle"
];

const motion = [
  "hinge",
  "lift",
  "stretch",
  "cross",
  "raise",
  "press",
  "crunch",
  "roll",
  "twist",
  "curl",
  "row",
  "squat",
  "fly",
  "lunge",
  "push",
  "pull",
  "rotation",
  "squeeze",
  "dip",
  "drop",
  "slide",
  "lower",
  "kneel",
  "bend",
  "arch",
  "flex"
];

function random(array) {
  return array[Math.floor(Math.random()*array.length)];
}

function generate() {
  return `${random(adjective)} ${random(muscle)} ${random(motion)}`
}
