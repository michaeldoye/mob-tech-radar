import {RadarConfig} from "./radar";

export const radarConfig: RadarConfig = {
  svg_id: "radar",
      width: 1450,
      height: 1000,
      colors: {
    background: "#fff",
        grid: "#bbb",
        inactive: "#ddd"
  },
  title: "My Radar",
      quadrants: [
    { name: "Languages" },
    { name: "Infrastructure" },
    { name: "Frameworks" },
    { name: "Data Management" }
  ],
      rings: [
    { name: "ADOPT", color: "#93c47d" },
    { name: "TRIAL", color: "#93d2c2" },
    { name: "ASSESS", color: "#fbdb84" },
    { name: "HOLD", color: "#efafa9" }
  ],
      print_layout: true,
      entries: [
    {
      label: "Angular",
      quadrant: 2,          // 0,1,2,3 (counting clockwise, starting from bottom right)
      ring: 0,              // 0,1,2,3 (starting from inside)
      moved: 0,
    },
    {
      label: "React.js",
      quadrant: 2,
      ring: 0,
      moved: 1,
    },
    {
      label: "Vue.js",
      quadrant: 2,
      ring: 1,
      moved: 0,
    },
    {
      label: "Next.js",
      quadrant: 2,
      ring: 2,
      moved: 0,
    },
    {
      label: "jQuery",
      quadrant: 2,
      ring: 3,
      moved: -1,
    },
    {
      label: "Angular.js",
      quadrant: 2,
      ring: 3,
      moved: -1,
    },
  ]
};
