/* Your workouts and look. Edit this file, or ask Claude for a new one, then upload it again. */
window.WB_CONFIG={
 "appName": "Workout Board",
 "units": "lb",
 "density": "comfortable",
 "radius": 14,
 "fonts": {
  "display": "condensed",
  "body": "clean"
 },
 "palette": {
  "light": {
   "bg": "#FFFFFF",
   "surface": "#FFFFFF",
   "surface2": "#FBF1F0",
   "fg": "#2A0F12",
   "muted": "#7A5A5E",
   "line": "#EBD9D9",
   "accent": "#C8102E",
   "gold": "#C9A227",
   "good": "#1E9B54",
   "body": "#FBEFEE",
   "muscle": "#F0D6D6",
   "muscle-line": "#D8B4B6"
  },
  "dark": {
   "bg": "#170B0D",
   "surface": "#221215",
   "surface2": "#2B171B",
   "fg": "#FFF4F2",
   "muted": "#C9A9AB",
   "line": "#43262B",
   "accent": "#E8334A",
   "gold": "#E3B94A",
   "good": "#3DDC84",
   "body": "#2B171B",
   "muscle": "#4A2A2F",
   "muscle-line": "#6A3F45"
  }
 },
 "labels": {
  "rest": "Rest",
  "restDay": "Rest day",
  "open": "Tap for workout",
  "targets": "Today's targets",
  "tracker": "Progress Tracker"
 },
 "calendar": {
  "weekStart": "sun"
 },
 "sections": [
  {
   "type": "day",
   "visible": true
  }
 ],
 "customCss": ""
};
window.WB_PLAN={
 "isExample": false,
 "days": {
  "mon": {
   "name": "Chest and Shoulders",
   "focus": "Chest and shoulders",
   "groups": [
    "chest",
    "shoulders"
   ],
   "exercises": [
    {
     "id": "mon-1",
     "name": "Barbell Bench",
     "sets": 4,
     "reps": "15 / 8 / 8 / 15",
     "muscles": [
      "chest"
     ],
     "secondary": [
      "shoulders",
      "triceps"
     ],
     "demo": "bench"
    },
    {
     "id": "mon-2",
     "name": "Pec Deck Flys",
     "sets": 3,
     "reps": "10",
     "muscles": [
      "chest"
     ],
     "secondary": [
      "shoulders"
     ],
     "demo": "raise"
    },
    {
     "id": "mon-3",
     "name": "Barbell Incline",
     "sets": 3,
     "reps": "8",
     "muscles": [
      "chest",
      "shoulders"
     ],
     "secondary": [
      "triceps"
     ],
     "demo": "incline"
    },
    {
     "id": "mon-4",
     "name": "Incline Flys",
     "sets": 2,
     "reps": "10",
     "muscles": [
      "chest"
     ],
     "secondary": [
      "shoulders"
     ],
     "demo": "raise"
    },
    {
     "id": "mon-5",
     "name": "Dumbbell Lateral Raises",
     "sets": 3,
     "reps": "10",
     "muscles": [
      "shoulders"
     ],
     "secondary": [
      "traps"
     ],
     "demo": "raise"
    },
    {
     "id": "mon-6",
     "name": "Shoulder Press",
     "sets": 3,
     "reps": "8",
     "muscles": [
      "shoulders"
     ],
     "secondary": [
      "triceps",
      "traps"
     ],
     "demo": "ohp"
    },
    {
     "id": "mon-7",
     "name": "Rear Delt Lateral Raises",
     "sets": 3,
     "reps": "10",
     "muscles": [
      "shoulders"
     ],
     "secondary": [
      "traps"
     ],
     "demo": "raise"
    },
    {
     "id": "mon-8",
     "name": "Forearm Curls",
     "sets": 3,
     "reps": "10",
     "muscles": [
      "forearms"
     ],
     "secondary": [],
     "demo": "curl",
     "note": "Sets and reps were not given, so this is a placeholder. Tell me the real numbers."
    }
   ]
  },
  "tue": {
   "name": "Back, Biceps and Triceps",
   "focus": "Back, biceps and triceps",
   "groups": [
    "lats",
    "biceps",
    "triceps"
   ],
   "exercises": [
    {
     "id": "tue-1",
     "name": "Lat Pulldowns",
     "sets": 3,
     "reps": "10",
     "muscles": [
      "lats"
     ],
     "secondary": [
      "biceps",
      "traps",
      "forearms"
     ],
     "demo": "pullup"
    },
    {
     "id": "tue-2",
     "name": "Single Arm",
     "sets": 3,
     "reps": "10 each arm",
     "muscles": [
      "lats"
     ],
     "secondary": [
      "biceps",
      "traps"
     ],
     "demo": "row"
    },
    {
     "id": "tue-3",
     "name": "T-Bar",
     "sets": 3,
     "reps": "10",
     "muscles": [
      "lats",
      "traps"
     ],
     "secondary": [
      "biceps",
      "lowerback"
     ],
     "demo": "row"
    },
    {
     "id": "tue-4",
     "name": "Rope Pull Downs",
     "sets": 3,
     "reps": "10",
     "muscles": [
      "triceps"
     ],
     "secondary": [
      "forearms"
     ],
     "demo": "pushdown"
    },
    {
     "id": "tue-5",
     "name": "Hammer and Regular Curl Preacher",
     "sets": 3,
     "reps": "8",
     "muscles": [
      "biceps"
     ],
     "secondary": [
      "forearms"
     ],
     "demo": "curl"
    },
    {
     "id": "tue-6",
     "name": "Regular Barbell Curl",
     "sets": 3,
     "reps": "8",
     "muscles": [
      "biceps"
     ],
     "secondary": [
      "forearms"
     ],
     "demo": "curl"
    },
    {
     "id": "tue-7",
     "name": "Straight Bar Push Downs",
     "sets": 3,
     "reps": "8",
     "muscles": [
      "triceps"
     ],
     "secondary": [
      "forearms"
     ],
     "demo": "pushdown"
    },
    {
     "id": "tue-8",
     "name": "Overhead Extensions",
     "sets": 3,
     "reps": "8",
     "muscles": [
      "triceps"
     ],
     "secondary": [
      "shoulders"
     ],
     "demo": "pushdown"
    },
    {
     "id": "tue-9",
     "name": "Forearm Curls",
     "sets": 3,
     "reps": "10",
     "muscles": [
      "forearms"
     ],
     "secondary": [],
     "demo": "curl",
     "note": "Sets and reps were not given, so this is a placeholder. Tell me the real numbers."
    }
   ]
  },
  "wed": {
   "name": "Legs",
   "focus": "Quads, hamstrings and calves",
   "groups": [
    "quads",
    "hamstrings",
    "calves"
   ],
   "exercises": [
    {
     "id": "wed-1",
     "name": "Leg Press",
     "sets": 4,
     "reps": "10-12",
     "muscles": [
      "quads"
     ],
     "secondary": [
      "glutes",
      "hamstrings"
     ],
     "demo": "squat"
    },
    {
     "id": "wed-2",
     "name": "Leg Extensions",
     "sets": 4,
     "reps": "10-12",
     "muscles": [
      "quads"
     ],
     "secondary": [],
     "demo": "squat"
    },
    {
     "id": "wed-3",
     "name": "Leg Curls",
     "sets": 4,
     "reps": "10-12",
     "muscles": [
      "hamstrings"
     ],
     "secondary": [
      "calves"
     ],
     "demo": "hinge"
    },
    {
     "id": "wed-4",
     "name": "Calf Raises",
     "sets": 4,
     "reps": "10-12",
     "muscles": [
      "calves"
     ],
     "secondary": [],
     "demo": "calf"
    }
   ]
  },
  "thu": {
   "name": "Chest and Shoulders",
   "focus": "Chest and shoulders",
   "groups": [
    "chest",
    "shoulders"
   ],
   "exercises": [
    {
     "id": "thu-1",
     "name": "Incline Dumbbell Bench",
     "sets": 3,
     "reps": "8",
     "muscles": [
      "chest",
      "shoulders"
     ],
     "secondary": [
      "triceps"
     ],
     "demo": "incline"
    },
    {
     "id": "thu-2",
     "name": "Incline Dumbbell Flys",
     "sets": 3,
     "reps": "10",
     "muscles": [
      "chest"
     ],
     "secondary": [
      "shoulders"
     ],
     "demo": "raise"
    },
    {
     "id": "thu-3",
     "name": "Flat Dumbbell Bench",
     "sets": 3,
     "reps": "8",
     "muscles": [
      "chest"
     ],
     "secondary": [
      "shoulders",
      "triceps"
     ],
     "demo": "bench"
    },
    {
     "id": "thu-4",
     "name": "Flat Dumbbell Flys",
     "sets": 3,
     "reps": "10",
     "muscles": [
      "chest"
     ],
     "secondary": [
      "shoulders"
     ],
     "demo": "raise"
    },
    {
     "id": "thu-5",
     "name": "Dumbbell Shoulder Press",
     "sets": 3,
     "reps": "8",
     "muscles": [
      "shoulders"
     ],
     "secondary": [
      "triceps",
      "traps"
     ],
     "demo": "ohp"
    },
    {
     "id": "thu-6",
     "name": "Cable Lateral Raises",
     "sets": 3,
     "reps": "10",
     "muscles": [
      "shoulders"
     ],
     "secondary": [
      "traps"
     ],
     "demo": "raise"
    },
    {
     "id": "thu-7",
     "name": "Rear Delt Lateral Raises",
     "sets": 3,
     "reps": "10",
     "muscles": [
      "shoulders"
     ],
     "secondary": [
      "traps"
     ],
     "demo": "raise"
    },
    {
     "id": "thu-8",
     "name": "Forearm Curls",
     "sets": 3,
     "reps": "10",
     "muscles": [
      "forearms"
     ],
     "secondary": [],
     "demo": "curl",
     "note": "Sets and reps were not given, so this is a placeholder. Tell me the real numbers."
    }
   ]
  },
  "fri": {
   "name": "Back, Biceps and Triceps",
   "focus": "Back, biceps and triceps",
   "groups": [
    "lats",
    "biceps",
    "triceps"
   ],
   "exercises": [
    {
     "id": "fri-1",
     "name": "Close and Wide Grip Pulldowns",
     "sets": 3,
     "reps": "10",
     "muscles": [
      "lats"
     ],
     "secondary": [
      "biceps",
      "traps",
      "forearms"
     ],
     "demo": "pullup"
    },
    {
     "id": "fri-2",
     "name": "Close Grip Rows",
     "sets": 3,
     "reps": "10",
     "muscles": [
      "lats",
      "traps"
     ],
     "secondary": [
      "biceps"
     ],
     "demo": "row"
    },
    {
     "id": "fri-3",
     "name": "Bent Over Rows Dumbbell",
     "sets": 3,
     "reps": "10",
     "muscles": [
      "lats",
      "traps"
     ],
     "secondary": [
      "biceps",
      "lowerback"
     ],
     "demo": "row"
    },
    {
     "id": "fri-4",
     "name": "Lower Back Pushes Machine",
     "sets": 3,
     "reps": "10",
     "muscles": [
      "lowerback"
     ],
     "secondary": [
      "glutes",
      "hamstrings"
     ],
     "demo": "hinge"
    },
    {
     "id": "fri-5",
     "name": "Decline Dumbbell Curls",
     "sets": 3,
     "reps": "8",
     "muscles": [
      "biceps"
     ],
     "secondary": [
      "forearms"
     ],
     "demo": "curl"
    },
    {
     "id": "fri-6",
     "name": "Spider Curls",
     "sets": 3,
     "reps": "8",
     "muscles": [
      "biceps"
     ],
     "secondary": [
      "forearms"
     ],
     "demo": "curl"
    },
    {
     "id": "fri-7",
     "name": "Single Arm Push Downs",
     "sets": 3,
     "reps": "10 each arm",
     "muscles": [
      "triceps"
     ],
     "secondary": [
      "forearms"
     ],
     "demo": "pushdown"
    },
    {
     "id": "fri-8",
     "name": "Dips",
     "sets": 3,
     "reps": "10",
     "muscles": [
      "chest",
      "triceps"
     ],
     "secondary": [
      "shoulders"
     ],
     "demo": "dip"
    },
    {
     "id": "fri-9",
     "name": "Overhead Extensions",
     "sets": 3,
     "reps": "8",
     "muscles": [
      "triceps"
     ],
     "secondary": [
      "shoulders"
     ],
     "demo": "pushdown"
    },
    {
     "id": "fri-10",
     "name": "Forearm Curls",
     "sets": 3,
     "reps": "10",
     "muscles": [
      "forearms"
     ],
     "secondary": [],
     "demo": "curl",
     "note": "Sets and reps were not given, so this is a placeholder. Tell me the real numbers."
    }
   ]
  },
  "sat": {
   "name": "Rest day",
   "rest": true,
   "note": "No workout planned. Recover and come back stronger."
  },
  "sun": {
   "name": "Rest day",
   "rest": true,
   "note": "No workout planned. Recover and come back stronger."
  }
 }
};
