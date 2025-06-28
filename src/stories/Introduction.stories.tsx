import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
  title: 'Beam/Introduction',
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Welcome: Story = {
  render: () => (
    <div style={{ padding: '3rem', maxWidth: '1000px', margin: '0 auto', fontFamily: 'system-ui, sans-serif' }}>
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '3rem', margin: '0 0 1rem 0', color: '#2d3748' }}>
          ⚡ Beam
        </h1>
        <p style={{ fontSize: '1.25rem', color: '#4a5568', margin: 0 }}>
          Ultra-lightweight React grid component (~2KB). Just 2 props for responsive layouts: minWidth + gap.
        </p>
      </div>

      <div style={{ display: 'grid', gap: '2rem', marginBottom: '3rem' }}>
        <section>
          <h2 style={{ color: '#2d3748', marginBottom: '1rem' }}>🚀 Features</h2>
          <ul style={{ color: '#4a5568', lineHeight: '1.6' }}>
            <li><strong>🧠 Smart Layout Detection:</strong> Automatically determines optimal grid columns based on content count</li>
            <li><strong>📱 Responsive by Default:</strong> Uses CSS Grid's auto-fit with customizable breakpoints</li>
            <li><strong>🎯 TypeScript Support:</strong> Full type safety with comprehensive prop types</li>
            <li><strong>🎨 Flexible Styling:</strong> Support for all CSS Grid properties with sensible defaults</li>
            <li><strong>🪄 Zero Config:</strong> Works out of the box, customize when needed</li>
          </ul>
        </section>

        <section>
          <h2 style={{ color: '#2d3748', marginBottom: '1rem' }}>📦 Installation</h2>
          <pre style={{ 
            background: '#f7fafc', 
            padding: '1rem', 
            borderRadius: '8px', 
            border: '1px solid #e2e8f0',
            color: '#2d3748',
            overflow: 'auto'
          }}>
{`npm install beam
# or
yarn add beam`}
          </pre>
        </section>

        <section>
          <h2 style={{ color: '#2d3748', marginBottom: '1rem' }}>🏁 Quick Start</h2>
          <pre style={{ 
            background: '#f7fafc', 
            padding: '1rem', 
            borderRadius: '8px', 
            border: '1px solid #e2e8f0',
            color: '#2d3748',
            overflow: 'auto'
          }}>
{`import { Beam, Cell } from 'beam';

// Simple auto-layout
<Beam minWidth="250px" gap="1rem">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
</Beam>

// With explicit positioning
<Beam columns={3} gap="2rem">
  <Cell column={1} row={1}>Header</Cell>
  <Cell columnSpan={2}>Content</Cell>
  <Cell column={1} rowSpan={2}>Sidebar</Cell>
</Beam>`}
          </pre>
        </section>

        <section>
          <h2 style={{ color: '#2d3748', marginBottom: '1rem' }}>🧠 Smart Detection Algorithm</h2>
          <p style={{ color: '#4a5568', lineHeight: '1.6', marginBottom: '1rem' }}>
            Beam automatically chooses the optimal number of columns based on your content:
          </p>
          <ul style={{ color: '#4a5568', lineHeight: '1.6' }}>
            <li><strong>1-2 items:</strong> 2 columns</li>
            <li><strong>3-4 items:</strong> 2 columns</li>
            <li><strong>5-6 items:</strong> 3 columns</li>
            <li><strong>7-9 items:</strong> 3 columns</li>
            <li><strong>10-12 items:</strong> 4 columns</li>
            <li><strong>13+ items:</strong> Square root of item count</li>
          </ul>
          <p style={{ color: '#4a5568', lineHeight: '1.6', marginTop: '1rem' }}>
            For responsive layouts, it uses CSS Grid's <code>auto-fit</code> with your specified minimum column width.
          </p>
        </section>

        <section>
          <h2 style={{ color: '#2d3748', marginBottom: '1rem' }}>📚 Story Organization</h2>
          <p style={{ color: '#4a5568', lineHeight: '1.6', marginBottom: '1rem' }}>
            This Storybook is organized into sections:
          </p>
          <ul style={{ color: '#4a5568', lineHeight: '1.6' }}>
            <li><strong>Beam:</strong> Core component stories with different configurations</li>
            <li><strong>Cell:</strong> Examples of explicit cell positioning and spanning</li>
            <li><strong>Examples:</strong> Real-world use cases and complete layouts</li>
          </ul>
          <p style={{ color: '#4a5568', lineHeight: '1.6', marginTop: '1rem' }}>
            Each story is interactive - use the Controls panel to experiment with different props and see how Beam adapts!
          </p>
        </section>
      </div>

      <div style={{ 
        textAlign: 'center', 
        padding: '2rem', 
        background: '#f7fafc', 
        borderRadius: '12px',
        border: '1px solid #e2e8f0'
      }}>
        <p style={{ color: '#4a5568', margin: '0 0 1rem 0' }}>
          Built with ❤️ for developers who love clean, responsive layouts
        </p>
        <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a 
            href="https://github.com/cwolff/beam" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ color: '#667eea', textDecoration: 'none', fontWeight: '500' }}
          >
            GitHub Repository
          </a>
          <a 
            href="https://www.npmjs.com/package/beam" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ color: '#667eea', textDecoration: 'none', fontWeight: '500' }}
          >
            NPM Package
          </a>
          <a 
            href="https://css-tricks.com/snippets/css/complete-guide-grid/" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ color: '#667eea', textDecoration: 'none', fontWeight: '500' }}
          >
            CSS Grid Guide
          </a>
        </div>
      </div>
    </div>
  ),
};