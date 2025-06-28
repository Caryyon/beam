export enum GridAlignment {
  START = 'start',
  END = 'end',
  CENTER = 'center',
  STRETCH = 'stretch',
}

export enum GridJustification {
  START = 'start',
  END = 'end',
  CENTER = 'center',
  STRETCH = 'stretch',
  SPACE_AROUND = 'space-around',
  SPACE_BETWEEN = 'space-between',
  SPACE_EVENLY = 'space-evenly',
}

export enum GridAutoFlow {
  ROW = 'row',
  COLUMN = 'column',
  ROW_DENSE = 'row dense',
  COLUMN_DENSE = 'column dense',
}

export interface BeamProps {
  children: React.ReactNode;
  // Core layout props (most commonly used)
  columns?: number | string;
  gap?: string | number;
  
  // Simple responsive props
  minWidth?: string; // Simplified from minColumnWidth
  responsive?: boolean;
  
  // Optional advanced props (tree-shakeable)
  rows?: number | string;
  columnGap?: string | number;
  rowGap?: string | number;
  alignItems?: GridAlignment;
  justifyItems?: GridJustification;
  alignContent?: GridAlignment;
  justifyContent?: GridJustification;
  autoFlow?: GridAutoFlow;
  autoRows?: string;
  autoColumns?: string;
  className?: string;
  style?: React.CSSProperties;
  
  // Advanced features (optional)
  containerQuery?: boolean;
  breakpoints?: {
    mobile?: string;
    tablet?: string;
    desktop?: string;
    wide?: string;
  };
}

export interface CellProps {
  children: React.ReactNode;
  column?: number | string;
  row?: number | string;
  columnSpan?: number;
  rowSpan?: number;
  alignSelf?: GridAlignment;
  justifySelf?: GridJustification;
  className?: string;
  style?: React.CSSProperties;
}