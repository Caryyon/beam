import React from 'react';
import { GridGenie, Cell, GridAlignment, GridJustification } from '../src';

export const BasicUsageExample: React.FC = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Grid Genie Examples</h1>
      
      {/* Auto Layout Example */}
      <section style={{ marginBottom: '3rem' }}>
        <h2>Auto Layout (Smart Detection)</h2>
        <GridGenie gap="1rem" style={{ border: '2px solid #ddd', padding: '1rem' }}>
          <div style={{ background: '#f0f0f0', padding: '1rem' }}>Item 1</div>
          <div style={{ background: '#e0e0e0', padding: '1rem' }}>Item 2</div>
          <div style={{ background: '#f0f0f0', padding: '1rem' }}>Item 3</div>
          <div style={{ background: '#e0e0e0', padding: '1rem' }}>Item 4</div>
          <div style={{ background: '#f0f0f0', padding: '1rem' }}>Item 5</div>
          <div style={{ background: '#e0e0e0', padding: '1rem' }}>Item 6</div>
        </GridGenie>
      </section>

      {/* Dashboard Layout */}
      <section style={{ marginBottom: '3rem' }}>
        <h2>Dashboard Layout</h2>
        <GridGenie 
          columns="200px 1fr 150px" 
          rows="60px 1fr 40px" 
          gap="1rem"
          style={{ height: '400px', border: '2px solid #ddd' }}
        >
          <Cell column="1 / -1" style={{ background: '#333', color: 'white', padding: '1rem' }}>
            Header
          </Cell>
          <Cell style={{ background: '#f8f8f8', padding: '1rem' }}>
            Sidebar
          </Cell>
          <Cell style={{ background: '#fff', padding: '1rem' }}>
            Main Content
          </Cell>
          <Cell style={{ background: '#f0f0f0', padding: '1rem' }}>
            Ads
          </Cell>
          <Cell column="1 / -1" style={{ background: '#666', color: 'white', padding: '1rem' }}>
            Footer
          </Cell>
        </GridGenie>
      </section>

      {/* Card Grid */}
      <section style={{ marginBottom: '3rem' }}>
        <h2>Card Grid (Fixed Columns)</h2>
        <GridGenie columns={3} gap="2rem" responsive={false}>
          {[1, 2, 3, 4, 5, 6].map(num => (
            <div 
              key={num}
              style={{ 
                background: 'white', 
                border: '1px solid #ddd', 
                borderRadius: '8px',
                padding: '1.5rem',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
              }}
            >
              <h3>Card {num}</h3>
              <p>This is card content for item {num}</p>
            </div>
          ))}
        </GridGenie>
      </section>

      {/* Responsive Gallery */}
      <section>
        <h2>Responsive Gallery</h2>
        <GridGenie minColumnWidth="180px" gap="0.5rem">
          {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
            <div 
              key={num}
              style={{ 
                background: `hsl(${num * 45}, 70%, 80%)`,
                aspectRatio: '1',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '4px',
                fontSize: '1.2rem',
                fontWeight: 'bold'
              }}
            >
              {num}
            </div>
          ))}
        </GridGenie>
      </section>
    </div>
  );
};