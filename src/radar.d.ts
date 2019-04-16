interface RadarConfig {
  svg_id: string;
  width: number;
  height: number;
  colors: RadarColor;
  title: string;
  quadrants: RadarQuadrants[];
  rings: RadarRing[];
  print_layout: boolean;
  entries: RadarEntries[];
}

interface RadarQuadrants {
  name: string;
}

interface RadarRing {
  name: string;
  color: string;
}

interface RadarColor {
  background: string;
  grid: string;
  inactive: string;
}

interface RadarEntries {
  label: string;
  quadrant: number;
  ring: number;
  moved: number;
  link?: string;
  active?: boolean;
}

export declare function radar_visualization(config: RadarConfig): void;
