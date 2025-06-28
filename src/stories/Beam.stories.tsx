import type { Meta, StoryObj } from '@storybook/react';
import { Beam } from '../Beam';
import { GridAlignment, GridJustification, GridAutoFlow } from '../types';

const meta: Meta<typeof Beam> = {
  title: 'Beam/Beam',
  component: Beam,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Ultra-lightweight React grid component. Just 2 props for responsive layouts: minWidth + gap.',
      },
    },
  },
  argTypes: {
    children: {
      control: false,
      description: 'Grid items to be laid out',
    },
    columns: {
      control: 'text',
      description: 'Number of columns or CSS grid-template-columns value',
    },
    rows: {
      control: 'text',
      description: 'Number of rows or CSS grid-template-rows value',
    },
    gap: {
      control: 'text',
      description: 'Gap between grid items',
    },
    columnGap: {
      control: 'text',
      description: 'Gap between columns',
    },
    rowGap: {
      control: 'text',
      description: 'Gap between rows',
    },
    alignItems: {
      control: 'select',
      options: Object.values(GridAlignment),
      description: 'Vertical alignment of items',
    },
    justifyItems: {
      control: 'select',
      options: Object.values(GridJustification),
      description: 'Horizontal alignment of items',
    },
    alignContent: {
      control: 'select',
      options: Object.values(GridAlignment),
      description: 'Vertical alignment of the grid within the container',
    },
    justifyContent: {
      control: 'select',
      options: Object.values(GridJustification),
      description: 'Horizontal alignment of the grid within the container',
    },
    autoFlow: {
      control: 'select',
      options: Object.values(GridAutoFlow),
      description: 'Controls how auto-placed items flow',
    },
    autoRows: {
      control: 'text',
      description: 'Size of implicitly created rows',
    },
    autoColumns: {
      control: 'text',
      description: 'Size of implicitly created columns',
    },
    minWidth: {
      control: 'text',
      description: 'Minimum column width for responsive mode',
    },
    responsive: {
      control: 'boolean',
      description: 'Enable responsive auto-fit columns',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const GridItem = ({ children, ...props }: { children: React.ReactNode }) => (
  <div 
    style={{
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      padding: '1.5rem',
      borderRadius: '8px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '1rem',
      fontWeight: '500',
      minHeight: '80px',
    }}
    {...props}
  >
    {children}
  </div>
);

export const AutoLayout: Story = {
  args: {
    gap: '1rem',
    responsive: true,
  },
  render: (args) => (
    <div style={{ padding: '2rem', background: '#f8f9fa', minHeight: '100vh' }}>
      <h2 style={{ marginBottom: '1rem', color: '#2d3748' }}>Auto Layout (Smart Detection)</h2>
      <p style={{ marginBottom: '2rem', color: '#4a5568' }}>
        Beam automatically detects the optimal number of columns based on content count.
      </p>
      <Beam {...args}>
        <GridItem>Item 1</GridItem>
        <GridItem>Item 2</GridItem>
        <GridItem>Item 3</GridItem>
        <GridItem>Item 4</GridItem>
        <GridItem>Item 5</GridItem>
        <GridItem>Item 6</GridItem>
      </Beam>
    </div>
  ),
};

export const ResponsiveGallery: Story = {
  args: {
    minWidth: '180px',
    gap: '0.5rem',
    responsive: true,
  },
  render: (args) => (
    <div style={{ padding: '2rem', background: '#f8f9fa', minHeight: '100vh' }}>
      <h2 style={{ marginBottom: '1rem', color: '#2d3748' }}>Responsive Gallery</h2>
      <p style={{ marginBottom: '2rem', color: '#4a5568' }}>
        Responsive mode with minimum column width. Resize the viewport to see it adapt!
      </p>
      <Beam {...args}>
        {Array.from({ length: 12 }, (_, i) => (
          <div
            key={i + 1}
            style={{
              background: `hsl(${(i + 1) * 30}, 70%, 60%)`,
              aspectRatio: '1',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '8px',
              fontSize: '1.5rem',
              fontWeight: 'bold',
              color: 'white',
              textShadow: '0 1px 2px rgba(0,0,0,0.3)',
            }}
          >
            {i + 1}
          </div>
        ))}
      </Beam>
    </div>
  ),
};

export const FixedColumns: Story = {
  args: {
    columns: 3,
    gap: '2rem',
    responsive: false,
  },
  render: (args) => (
    <div style={{ padding: '2rem', background: '#f8f9fa', minHeight: '100vh' }}>
      <h2 style={{ marginBottom: '1rem', color: '#2d3748' }}>Fixed Columns</h2>
      <p style={{ marginBottom: '2rem', color: '#4a5568' }}>
        Fixed 3-column layout with responsive disabled.
      </p>
      <Beam {...args}>
        {Array.from({ length: 6 }, (_, i) => (
          <div
            key={i + 1}
            style={{
              background: 'white',
              border: '1px solid #e2e8f0',
              borderRadius: '8px',
              padding: '1.5rem',
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
            }}
          >
            <h3 style={{ margin: '0 0 1rem 0', color: '#2d3748' }}>Card {i + 1}</h3>
            <p style={{ margin: 0, color: '#4a5568' }}>
              This is card content for item {i + 1}. The layout maintains exactly 3 columns regardless of viewport size.
            </p>
          </div>
        ))}
      </Beam>
    </div>
  ),
};

export const AlignmentDemo: Story = {
  args: {
    columns: 3,
    gap: '1rem',
    alignItems: GridAlignment.CENTER,
    justifyItems: GridJustification.CENTER,
    style: { height: '400px', background: '#fff', border: '2px solid #e2e8f0' },
  },
  render: (args) => (
    <div style={{ padding: '2rem', background: '#f8f9fa', minHeight: '100vh' }}>
      <h2 style={{ marginBottom: '1rem', color: '#2d3748' }}>Alignment Demo</h2>
      <p style={{ marginBottom: '2rem', color: '#4a5568' }}>
        Items centered both horizontally and vertically within their grid cells.
      </p>
      <Beam {...args}>
        <div style={{ background: '#e53e3e', color: 'white', padding: '1rem', borderRadius: '4px' }}>
          Small
        </div>
        <div style={{ background: '#38a169', color: 'white', padding: '2rem', borderRadius: '4px' }}>
          Medium Content
        </div>
        <div style={{ background: '#3182ce', color: 'white', padding: '0.5rem', borderRadius: '4px' }}>
          Tiny
        </div>
        <div style={{ background: '#805ad5', color: 'white', padding: '1.5rem', borderRadius: '4px' }}>
          Variable Size Content
        </div>
        <div style={{ background: '#d69e2e', color: 'white', padding: '1rem', borderRadius: '4px' }}>
          Normal
        </div>
        <div style={{ background: '#319795', color: 'white', padding: '3rem', borderRadius: '4px' }}>
          Large
        </div>
      </Beam>
    </div>
  ),
};