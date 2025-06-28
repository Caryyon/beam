import type { Meta, StoryObj } from '@storybook/react';
import { Beam } from '../Beam';
import { Cell } from '../Cell';
import { GridAlignment, GridJustification } from '../types';

const meta: Meta<typeof Cell> = {
  title: 'Beam/Cell',
  component: Cell,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'A Cell component for explicit positioning and styling within Beam layouts.',
      },
    },
  },
  argTypes: {
    children: {
      control: false,
      description: 'Cell content',
    },
    column: {
      control: 'text',
      description: 'Grid column position (number or CSS grid-column value)',
    },
    row: {
      control: 'text',
      description: 'Grid row position (number or CSS grid-row value)',
    },
    columnSpan: {
      control: 'number',
      description: 'Number of columns to span',
    },
    rowSpan: {
      control: 'number',
      description: 'Number of rows to span',
    },
    alignSelf: {
      control: 'select',
      options: Object.values(GridAlignment),
      description: 'Override alignment for this cell',
    },
    justifySelf: {
      control: 'select',
      options: Object.values(GridJustification),
      description: 'Override justification for this cell',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const CellContent = ({ children, ...props }: { children: React.ReactNode; style?: React.CSSProperties }) => (
  <div 
    style={{
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      padding: '1rem',
      borderRadius: '8px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '1rem',
      fontWeight: '500',
      minHeight: '60px',
      ...props.style,
    }}
  >
    {children}
  </div>
);

export const DashboardLayout: Story = {
  render: () => (
    <div style={{ padding: '2rem', background: '#f8f9fa', minHeight: '100vh' }}>
      <h2 style={{ marginBottom: '1rem', color: '#2d3748' }}>Dashboard Layout</h2>
      <p style={{ marginBottom: '2rem', color: '#4a5568' }}>
        Complex layout using explicit Cell positioning with columns and rows.
      </p>
      <Beam 
        columns="200px 1fr 150px" 
        rows="60px 1fr 40px" 
        gap="1rem"
        style={{ height: '500px', background: '#fff', border: '2px solid #e2e8f0', borderRadius: '8px' }}
      >
        <Cell column="1 / -1">
          <CellContent style={{ background: '#2d3748' }}>Header</CellContent>
        </Cell>
        <Cell>
          <CellContent style={{ background: '#f7fafc', color: '#2d3748', border: '1px solid #e2e8f0' }}>
            Sidebar
          </CellContent>
        </Cell>
        <Cell>
          <CellContent style={{ background: '#fff', color: '#2d3748', border: '1px solid #e2e8f0' }}>
            Main Content
          </CellContent>
        </Cell>
        <Cell>
          <CellContent style={{ background: '#f0fff4', color: '#2d3748', border: '1px solid #c6f6d5' }}>
            Ads
          </CellContent>
        </Cell>
        <Cell column="1 / -1">
          <CellContent style={{ background: '#4a5568' }}>Footer</CellContent>
        </Cell>
      </Beam>
    </div>
  ),
};

export const SpanningCells: Story = {
  render: () => (
    <div style={{ padding: '2rem', background: '#f8f9fa', minHeight: '100vh' }}>
      <h2 style={{ marginBottom: '1rem', color: '#2d3748' }}>Spanning Cells</h2>
      <p style={{ marginBottom: '2rem', color: '#4a5568' }}>
        Demonstrating columnSpan and rowSpan for complex layouts.
      </p>
      <Beam 
        columns={4} 
        gap="1rem" 
        style={{ height: '400px', background: '#fff', border: '2px solid #e2e8f0', borderRadius: '8px' }}
      >
        <Cell columnSpan={2}>
          <CellContent style={{ background: '#e53e3e' }}>Wide Header (spans 2 columns)</CellContent>
        </Cell>
        <Cell>
          <CellContent style={{ background: '#38a169' }}>Nav 1</CellContent>
        </Cell>
        <Cell>
          <CellContent style={{ background: '#3182ce' }}>Nav 2</CellContent>
        </Cell>
        <Cell rowSpan={2}>
          <CellContent style={{ background: '#805ad5' }}>Tall Sidebar (spans 2 rows)</CellContent>
        </Cell>
        <Cell columnSpan={2}>
          <CellContent style={{ background: '#d69e2e' }}>Main Content (spans 2 columns)</CellContent>
        </Cell>
        <Cell>
          <CellContent style={{ background: '#319795' }}>Side Panel</CellContent>
        </Cell>
        <Cell>
          <CellContent style={{ background: '#e53e3e' }}>Feature 1</CellContent>
        </Cell>
        <Cell>
          <CellContent style={{ background: '#38a169' }}>Feature 2</CellContent>
        </Cell>
        <Cell>
          <CellContent style={{ background: '#3182ce' }}>Feature 3</CellContent>
        </Cell>
      </Beam>
    </div>
  ),
};

export const ExplicitPositioning: Story = {
  render: () => (
    <div style={{ padding: '2rem', background: '#f8f9fa', minHeight: '100vh' }}>
      <h2 style={{ marginBottom: '1rem', color: '#2d3748' }}>Explicit Positioning</h2>
      <p style={{ marginBottom: '2rem', color: '#4a5568' }}>
        Using specific column and row numbers to position cells exactly where you want them.
      </p>
      <Beam 
        columns={4} 
        rows={4}
        gap="1rem" 
        style={{ height: '400px', background: '#fff', border: '2px solid #e2e8f0', borderRadius: '8px' }}
      >
        <Cell column={1} row={1}>
          <CellContent style={{ background: '#e53e3e' }}>1,1</CellContent>
        </Cell>
        <Cell column={3} row={1}>
          <CellContent style={{ background: '#38a169' }}>3,1</CellContent>
        </Cell>
        <Cell column={2} row={2}>
          <CellContent style={{ background: '#3182ce' }}>2,2</CellContent>
        </Cell>
        <Cell column={4} row={2}>
          <CellContent style={{ background: '#805ad5' }}>4,2</CellContent>
        </Cell>
        <Cell column={1} row={3}>
          <CellContent style={{ background: '#d69e2e' }}>1,3</CellContent>
        </Cell>
        <Cell column={3} row={4}>
          <CellContent style={{ background: '#319795' }}>3,4</CellContent>
        </Cell>
      </Beam>
    </div>
  ),
};

export const AlignmentOverrides: Story = {
  render: () => (
    <div style={{ padding: '2rem', background: '#f8f9fa', minHeight: '100vh' }}>
      <h2 style={{ marginBottom: '1rem', color: '#2d3748' }}>Alignment Overrides</h2>
      <p style={{ marginBottom: '2rem', color: '#4a5568' }}>
        Individual cells can override the grid's default alignment using alignSelf and justifySelf.
      </p>
      <Beam 
        columns={3} 
        gap="1rem" 
        style={{ height: '300px', background: '#fff', border: '2px solid #e2e8f0', borderRadius: '8px' }}
      >
        <Cell alignSelf={GridAlignment.START} justifySelf={GridJustification.START}>
          <CellContent style={{ background: '#e53e3e', width: '80px', height: '40px' }}>
            Top Left
          </CellContent>
        </Cell>
        <Cell alignSelf={GridAlignment.CENTER} justifySelf={GridJustification.CENTER}>
          <CellContent style={{ background: '#38a169', width: '100px', height: '60px' }}>
            Center
          </CellContent>
        </Cell>
        <Cell alignSelf={GridAlignment.END} justifySelf={GridJustification.END}>
          <CellContent style={{ background: '#3182ce', width: '80px', height: '40px' }}>
            Bottom Right
          </CellContent>
        </Cell>
        <Cell justifySelf={GridJustification.STRETCH}>
          <CellContent style={{ background: '#805ad5', height: '40px' }}>
            Stretch Horizontal
          </CellContent>
        </Cell>
        <Cell alignSelf={GridAlignment.STRETCH}>
          <CellContent style={{ background: '#d69e2e', width: '100px' }}>
            Stretch Vertical
          </CellContent>
        </Cell>
        <Cell alignSelf={GridAlignment.STRETCH} justifySelf={GridJustification.STRETCH}>
          <CellContent style={{ background: '#319795' }}>
            Stretch Both
          </CellContent>
        </Cell>
      </Beam>
    </div>
  ),
};