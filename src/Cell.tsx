import React from 'react';
import { CellProps } from './types';

export const Cell: React.FC<CellProps> = ({
  children,
  column,
  row,
  columnSpan,
  rowSpan,
  alignSelf,
  justifySelf,
  className = '',
  style = {},
}) => {
  const cellStyle: React.CSSProperties = {
    ...style,
    ...(column && { gridColumn: typeof column === 'number' ? `${column}` : column }),
    ...(row && { gridRow: typeof row === 'number' ? `${row}` : row }),
    ...(columnSpan && { gridColumn: `span ${columnSpan}` }),
    ...(rowSpan && { gridRow: `span ${rowSpan}` }),
    ...(alignSelf && { alignSelf }),
    ...(justifySelf && { justifySelf }),
  };

  return (
    <div className={className} style={cellStyle}>
      {children}
    </div>
  );
};