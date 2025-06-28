import React, { useMemo, useId } from 'react';
import { BeamProps, GridAutoFlow, GridAlignment, GridJustification } from './types';

export const Beam: React.FC<BeamProps> = ({
  children,
  columns,
  gap,
  minWidth = '200px',
  responsive = true,
  rows,
  columnGap,
  rowGap,
  alignItems,
  justifyItems,
  alignContent,
  justifyContent,
  autoFlow,
  autoRows,
  autoColumns,
  className = '',
  style = {},
  containerQuery = false,
  breakpoints = {
    mobile: '320px',
    tablet: '768px', 
    desktop: '1024px',
    wide: '1440px'
  },
}) => {
  const childrenArray = React.Children.toArray(children);
  const childCount = childrenArray.length;

  const componentId = useId();
  
  const smartColumns = useMemo(() => {
    if (columns) return columns;
    
    if (responsive && minWidth) {
      return `repeat(auto-fit, minmax(${minWidth}, 1fr))`;
    }
    
    // Smart detection based on child count with enhanced algorithm
    if (childCount <= 1) return 1;
    if (childCount <= 2) return 2;
    if (childCount <= 4) return 2;
    if (childCount <= 6) return 3;
    if (childCount <= 9) return 3;
    if (childCount <= 12) return 4;
    if (childCount <= 16) return 4;
    return Math.min(Math.ceil(Math.sqrt(childCount)), 6); // Cap at 6 columns for readability
  }, [columns, responsive, minWidth, childCount]);

  const smartRows = useMemo(() => {
    if (rows) return rows;
    if (autoRows) return undefined;
    
    const cols = typeof smartColumns === 'number' ? smartColumns : 
                 smartColumns.includes('auto-fit') ? 1 : 
                 parseInt(smartColumns.toString()) || 1;
    
    return Math.ceil(childCount / cols);
  }, [rows, autoRows, smartColumns, childCount]);

  // Generate dynamic CSS for container queries and responsive behavior
  const dynamicCSS = useMemo(() => {
    if (!containerQuery && !responsive) return '';
    
    const containerId = `beam-${componentId.replace(/:/g, '')}`;
    let css = '';
    
    if (containerQuery) {
      css += `
        .${containerId} {
          container-type: inline-size;
          container-name: grid-container;
        }
        
        @container grid-container (max-width: ${breakpoints.mobile}) {
          .${containerId} {
            grid-template-columns: 1fr !important;
            gap: 0.75rem !important;
          }
        }
        
        @container grid-container (min-width: ${breakpoints.mobile}) and (max-width: ${breakpoints.tablet}) {
          .${containerId} {
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)) !important;
            gap: 1rem !important;
          }
        }
        
        @container grid-container (min-width: ${breakpoints.tablet}) and (max-width: ${breakpoints.desktop}) {
          .${containerId} {
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)) !important;
            gap: 1.25rem !important;
          }
        }
        
        @container grid-container (min-width: ${breakpoints.desktop}) {
          .${containerId} {
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)) !important;
            gap: 1.5rem !important;
          }
        }
      `;
    } else if (responsive) {
      css += `
        @media (max-width: ${breakpoints.mobile}) {
          .${containerId} {
            grid-template-columns: 1fr !important;
            gap: 0.75rem !important;
          }
        }
        
        @media (min-width: ${breakpoints.mobile}) and (max-width: ${breakpoints.tablet}) {
          .${containerId} {
            grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)) !important;
          }
        }
        
        @media (min-width: ${breakpoints.tablet}) and (max-width: ${breakpoints.desktop}) {
          .${containerId} {
            grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)) !important;
          }
        }
      `;
    }
    
    return css;
  }, [containerQuery, responsive, breakpoints, componentId]);

  const gridStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: smartColumns.toString(),
    ...(smartRows && { gridTemplateRows: typeof smartRows === 'number' ? `repeat(${smartRows}, 1fr)` : smartRows }),
    ...(gap && { gap: typeof gap === 'number' ? `${gap}px` : gap }),
    ...(columnGap && { columnGap: typeof columnGap === 'number' ? `${columnGap}px` : columnGap }),
    ...(rowGap && { rowGap: typeof rowGap === 'number' ? `${rowGap}px` : rowGap }),
    ...(alignItems && { alignItems }),
    ...(justifyItems && { justifyItems }),
    ...(alignContent && { alignContent }),
    ...(justifyContent && { justifyContent }),
    ...(autoFlow && { gridAutoFlow: autoFlow }),
    ...(autoRows && { gridAutoRows: autoRows }),
    ...(autoColumns && { gridAutoColumns: autoColumns }),
    ...style,
  };

  const containerId = `beam-${componentId.replace(/:/g, '')}`;
  const finalClassName = containerQuery || responsive ? 
    `${className} ${containerId}`.trim() : className;

  return (
    <>
      {dynamicCSS && (
        <style dangerouslySetInnerHTML={{ __html: dynamicCSS }} />
      )}
      <div className={finalClassName} style={gridStyle}>
        {children}
      </div>
    </>
  );
};