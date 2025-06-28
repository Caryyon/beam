import type { Meta, StoryObj } from '@storybook/react';
import { Beam } from '../Beam';
import { Cell } from '../Cell';

const meta: Meta = {
  title: 'Beam/Advanced Features',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Advanced features including container queries, performance optimizations, and modern CSS techniques.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ContainerQueries: Story = {
  render: () => (
    <div style={{ padding: '2rem', background: '#f8f9fa', minHeight: '100vh' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ marginBottom: '1rem', color: '#2d3748', fontSize: '2rem', fontWeight: 'bold' }}>
          📐 Container Queries
        </h2>
        <p style={{ marginBottom: '2rem', color: '#4a5568', fontSize: '1.125rem' }}>
          Beam uses container queries for component-based responsive design, making layouts adapt to their container size rather than viewport size.
        </p>
        
        <div style={{ marginBottom: '3rem', background: '#e6fffa', padding: '1.5rem', borderRadius: '8px' }}>
          <h3 style={{ margin: '0 0 1rem 0', color: '#234e52' }}>Container Query Example:</h3>
          <pre style={{ 
            background: '#1a202c', 
            color: '#e2e8f0', 
            padding: '1rem', 
            borderRadius: '6px', 
            overflow: 'auto',
            fontSize: '0.875rem'
          }}>
{`<Beam
  containerQuery={true}
  gap="1rem"
  breakpoints={{
    mobile: '320px',
    tablet: '768px',
    desktop: '1024px',
    wide: '1440px'
  }}
>
  {items.map(item => <Card key={item.id} {...item} />)}
</Beam>`}
          </pre>
        </div>

        <div style={{ display: 'grid', gap: '2rem', gridTemplateColumns: '1fr 1fr' }}>
          {/* Small container */}
          <div style={{ background: 'white', padding: '1rem', borderRadius: '8px', border: '2px solid #e2e8f0' }}>
            <h4 style={{ margin: '0 0 1rem 0', color: '#2d3748' }}>Small Container (400px)</h4>
            <div style={{ width: '400px', border: '1px dashed #cbd5e0', padding: '1rem' }}>
              <Beam containerQuery gap="0.5rem">
                {Array.from({ length: 4 }, (_, i) => (
                  <div
                    key={i}
                    style={{
                      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                      color: 'white',
                      padding: '1rem',
                      borderRadius: '6px',
                      textAlign: 'center',
                      fontSize: '0.875rem'
                    }}
                  >
                    Item {i + 1}
                  </div>
                ))}
              </Beam>
            </div>
          </div>

          {/* Large container */}
          <div style={{ background: 'white', padding: '1rem', borderRadius: '8px', border: '2px solid #e2e8f0' }}>
            <h4 style={{ margin: '0 0 1rem 0', color: '#2d3748' }}>Large Container (800px)</h4>
            <div style={{ width: '800px', border: '1px dashed #cbd5e0', padding: '1rem' }}>
              <Beam containerQuery gap="1rem">
                {Array.from({ length: 4 }, (_, i) => (
                  <div
                    key={i}
                    style={{
                      background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                      color: 'white',
                      padding: '1rem',
                      borderRadius: '6px',
                      textAlign: 'center',
                      fontSize: '0.875rem'
                    }}
                  >
                    Item {i + 1}
                  </div>
                ))}
              </Beam>
            </div>
          </div>
        </div>
        
        <div style={{ marginTop: '2rem', padding: '1rem', background: '#f0fff4', borderRadius: '8px', border: '1px solid #9ae6b4' }}>
          <h4 style={{ color: '#276749', margin: '0 0 0.5rem 0' }}>🎯 Container Query Benefits:</h4>
          <ul style={{ color: '#2f855a', margin: 0, paddingLeft: '1.25rem' }}>
            <li>Responsive design based on container size, not viewport</li>
            <li>Perfect for component libraries and design systems</li>
            <li>More predictable layouts in complex applications</li>
            <li>Better performance than viewport-based media queries</li>
          </ul>
        </div>
      </div>
    </div>
  ),
};

export const PerformanceOptimizations: Story = {
  render: () => (
    <div style={{ padding: '2rem', background: '#f7fafc', minHeight: '100vh' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ marginBottom: '1rem', color: '#2d3748', fontSize: '2rem', fontWeight: 'bold' }}>
          ⚡ Performance Optimizations
        </h2>
        <p style={{ marginBottom: '2rem', color: '#4a5568', fontSize: '1.125rem' }}>
          Beam includes built-in performance optimizations using modern CSS features.
        </p>
        
        <div style={{ marginBottom: '3rem', background: '#fff5f5', padding: '1.5rem', borderRadius: '8px' }}>
          <h3 style={{ margin: '0 0 1rem 0', color: '#c53030' }}>Performance Features:</h3>
          <pre style={{ 
            background: '#1a202c', 
            color: '#e2e8f0', 
            padding: '1rem', 
            borderRadius: '6px', 
            overflow: 'auto',
            fontSize: '0.875rem'
          }}>
{`<Beam
  optimizeRendering={true}  // Enables performance optimizations
  gap="1rem"
>
  {/* 
    Auto-applied optimizations:
    - will-change: auto
    - contain: layout style
    - content-visibility: auto
  */}
</Beam>`}
          </pre>
        </div>

        <div style={{ display: 'grid', gap: '2rem', gridTemplateColumns: '1fr 1fr' }}>
          {/* Without optimizations */}
          <div style={{ background: 'white', padding: '1.5rem', borderRadius: '8px', border: '2px solid #fed7d7' }}>
            <h4 style={{ margin: '0 0 1rem 0', color: '#c53030' }}>Without Optimizations</h4>
            <Beam gap="1rem" optimizeRendering={false}>
              {Array.from({ length: 20 }, (_, i) => (
                <div
                  key={i}
                  style={{
                    background: '#fed7d7',
                    color: '#c53030',
                    padding: '1rem',
                    borderRadius: '6px',
                    textAlign: 'center',
                    fontSize: '0.875rem',
                    minHeight: '80px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  Standard {i + 1}
                </div>
              ))}
            </Beam>
          </div>

          {/* With optimizations */}
          <div style={{ background: 'white', padding: '1.5rem', borderRadius: '8px', border: '2px solid #c6f6d5' }}>
            <h4 style={{ margin: '0 0 1rem 0', color: '#38a169' }}>With Optimizations</h4>
            <Beam gap="1rem" optimizeRendering={true}>
              {Array.from({ length: 20 }, (_, i) => (
                <div
                  key={i}
                  style={{
                    background: '#c6f6d5',
                    color: '#38a169',
                    padding: '1rem',
                    borderRadius: '6px',
                    textAlign: 'center',
                    fontSize: '0.875rem',
                    minHeight: '80px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  Optimized {i + 1}
                </div>
              ))}
            </Beam>
          </div>
        </div>
        
        <div style={{ marginTop: '2rem', padding: '1rem', background: '#ebf8ff', borderRadius: '8px', border: '1px solid #90cdf4' }}>
          <h4 style={{ color: '#2c5282', margin: '0 0 0.5rem 0' }}>🚀 Performance Techniques:</h4>
          <ul style={{ color: '#2c5282', margin: 0, paddingLeft: '1.25rem' }}>
            <li><code>content-visibility: auto</code> - Only renders visible content</li>
            <li><code>contain: layout style</code> - Isolates layout calculations</li>
            <li><code>will-change: auto</code> - Optimizes for transitions</li>
            <li>Smart re-rendering with React.useMemo for layout calculations</li>
          </ul>
        </div>
      </div>
    </div>
  ),
};

export const ResponsiveBreakpoints: Story = {
  render: () => (
    <div style={{ padding: '2rem', background: '#f8f9fa', minHeight: '100vh' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ marginBottom: '1rem', color: '#2d3748', fontSize: '2rem', fontWeight: 'bold' }}>
          📱 Custom Responsive Breakpoints
        </h2>
        <p style={{ marginBottom: '2rem', color: '#4a5568', fontSize: '1.125rem' }}>
          Define custom breakpoints for precise responsive control across different screen sizes and container widths.
        </p>
        
        <div style={{ marginBottom: '3rem', background: '#edf2f7', padding: '1.5rem', borderRadius: '8px' }}>
          <h3 style={{ margin: '0 0 1rem 0', color: '#2d3748' }}>Custom Breakpoints:</h3>
          <pre style={{ 
            background: '#1a202c', 
            color: '#e2e8f0', 
            padding: '1rem', 
            borderRadius: '6px', 
            overflow: 'auto',
            fontSize: '0.875rem'
          }}>
{`<Beam
  responsive={true}
  breakpoints={{
    mobile: '320px',   // Single column on mobile
    tablet: '768px',   // 2-3 columns on tablet
    desktop: '1024px', // 4+ columns on desktop
    wide: '1440px'     // Max columns on wide screens
  }}
  gap="1.5rem"
>
  {items}
</Beam>`}
          </pre>
        </div>

        <Beam 
          responsive 
          gap="1.5rem"
          breakpoints={{
            mobile: '480px',
            tablet: '768px',
            desktop: '1024px',
            wide: '1440px'
          }}
        >
          {Array.from({ length: 12 }, (_, i) => (
            <div
              key={i}
              style={{
                background: 'white',
                padding: '1.5rem',
                borderRadius: '8px',
                border: '1px solid #e2e8f0',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
              }}
            >
              <div style={{
                width: '100%',
                height: '60px',
                background: `linear-gradient(135deg, 
                  hsl(${i * 30}, 70%, 60%) 0%, 
                  hsl(${i * 30 + 60}, 70%, 50%) 100%)`,
                borderRadius: '6px',
                marginBottom: '1rem'
              }} />
              <h3 style={{ 
                fontSize: '1.125rem', 
                fontWeight: 600, 
                margin: '0 0 0.5rem 0', 
                color: '#2d3748'
              }}>
                Item {i + 1}
              </h3>
              <p style={{ 
                margin: 0, 
                color: '#4a5568',
                fontSize: '0.875rem',
                lineHeight: '1.5'
              }}>
                Responsive item that adapts to custom breakpoints. Resize your browser to see the layout change.
              </p>
            </div>
          ))}
        </Beam>
        
        <div style={{ marginTop: '2rem', display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
          <div style={{ padding: '1rem', background: '#fef5e7', borderRadius: '8px', border: '1px solid #f6ad55' }}>
            <h5 style={{ color: '#c05621', margin: '0 0 0.5rem 0' }}>📱 Mobile (320px+)</h5>
            <p style={{ color: '#c05621', margin: 0, fontSize: '0.875rem' }}>Single column layout for optimal mobile viewing</p>
          </div>
          <div style={{ padding: '1rem', background: '#e6fffa', borderRadius: '8px', border: '1px solid #4fd1c7' }}>
            <h5 style={{ color: '#234e52', margin: '0 0 0.5rem 0' }}>📱 Tablet (768px+)</h5>
            <p style={{ color: '#234e52', margin: 0, fontSize: '0.875rem' }}>2-3 columns for tablet-sized containers</p>
          </div>
          <div style={{ padding: '1rem', background: '#ebf8ff', borderRadius: '8px', border: '1px solid #63b3ed' }}>
            <h5 style={{ color: '#2c5282', margin: '0 0 0.5rem 0' }}>💻 Desktop (1024px+)</h5>
            <p style={{ color: '#2c5282', margin: 0, fontSize: '0.875rem' }}>4+ columns for desktop viewing</p>
          </div>
          <div style={{ padding: '1rem', background: '#f0fff4', borderRadius: '8px', border: '1px solid #68d391' }}>
            <h5 style={{ color: '#276749', margin: '0 0 0.5rem 0' }}>🖥️ Wide (1440px+)</h5>
            <p style={{ color: '#276749', margin: 0, fontSize: '0.875rem' }}>Maximum columns for large displays</p>
          </div>
        </div>
      </div>
    </div>
  ),
};

export const AdvancedLayouts: Story = {
  render: () => (
    <div style={{ padding: '2rem', background: '#f7fafc', minHeight: '100vh' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <h2 style={{ marginBottom: '1rem', color: '#2d3748', fontSize: '2rem', fontWeight: 'bold' }}>
          🎨 Advanced Layout Patterns
        </h2>
        <p style={{ marginBottom: '2rem', color: '#4a5568', fontSize: '1.125rem' }}>
          Combine Beam with CSS Grid's advanced features for sophisticated layouts.
        </p>

        {/* Masonry-style layout */}
        <section style={{ marginBottom: '4rem' }}>
          <h3 style={{ marginBottom: '1rem', color: '#2d3748' }}>Masonry-Style Layout</h3>
          <Beam 
            columns="repeat(auto-fit, minmax(250px, 1fr))" 
            gap="1rem"
            style={{ gridAutoRows: 'max-content' }}
          >
            {Array.from({ length: 9 }, (_, i) => {
              const heights = [120, 180, 140, 200, 160, 220, 130, 190, 150];
              return (
                <div
                  key={i}
                  style={{
                    background: 'white',
                    padding: '1.5rem',
                    borderRadius: '8px',
                    border: '1px solid #e2e8f0',
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                    height: `${heights[i]}px`,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                  }}
                >
                  <div>
                    <div style={{
                      width: '100%',
                      height: '40px',
                      background: `linear-gradient(135deg, hsl(${i * 40}, 60%, 70%), hsl(${i * 40 + 40}, 60%, 60%))`,
                      borderRadius: '4px',
                      marginBottom: '1rem'
                    }} />
                    <h4 style={{ margin: '0 0 0.5rem 0', color: '#2d3748' }}>Card {i + 1}</h4>
                    <p style={{ margin: 0, color: '#4a5568', fontSize: '0.875rem' }}>
                      Variable height content creates a masonry-like effect.
                    </p>
                  </div>
                </div>
              );
            })}
          </Beam>
        </section>

        {/* Complex dashboard layout */}
        <section>
          <h3 style={{ marginBottom: '1rem', color: '#2d3748' }}>Complex Dashboard Layout</h3>
          <Beam 
            columns="repeat(12, 1fr)" 
            rows="repeat(4, 120px)" 
            gap="1rem"
            containerQuery
          >
            {/* Header - spans full width */}
            <Cell column="1 / -1" row="1">
              <div style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white',
                padding: '1.5rem',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}>
                <h3 style={{ margin: 0, fontSize: '1.5rem' }}>Dashboard Header</h3>
                <div style={{ fontSize: '0.875rem', opacity: 0.9 }}>Beam Advanced Layout</div>
              </div>
            </Cell>

            {/* Sidebar - spans 3 columns, 3 rows */}
            <Cell column="1 / 4" row="2 / 5">
              <div style={{
                background: 'white',
                padding: '1.5rem',
                borderRadius: '8px',
                border: '1px solid #e2e8f0',
                height: '100%'
              }}>
                <h4 style={{ margin: '0 0 1rem 0', color: '#2d3748' }}>Navigation</h4>
                {['Dashboard', 'Analytics', 'Reports', 'Settings'].map((item, i) => (
                  <div
                    key={item}
                    style={{
                      padding: '0.75rem',
                      margin: '0.5rem 0',
                      borderRadius: '6px',
                      background: i === 0 ? '#667eea' : '#f7fafc',
                      color: i === 0 ? 'white' : '#4a5568',
                      fontSize: '0.875rem',
                      cursor: 'pointer'
                    }}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </Cell>

            {/* Main content area - spans remaining columns, 2 rows */}
            <Cell column="4 / 11" row="2 / 4">
              <div style={{
                background: 'white',
                padding: '1.5rem',
                borderRadius: '8px',
                border: '1px solid #e2e8f0',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{
                    width: '80px',
                    height: '80px',
                    background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                    borderRadius: '50%',
                    margin: '0 auto 1rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '2rem'
                  }}>
                    📊
                  </div>
                  <h4 style={{ margin: '0 0 0.5rem 0', color: '#2d3748' }}>Main Content</h4>
                  <p style={{ margin: 0, color: '#4a5568', fontSize: '0.875rem' }}>
                    Primary dashboard content area
                  </p>
                </div>
              </div>
            </Cell>

            {/* Stats sidebar - spans 2 columns, 2 rows */}
            <Cell column="11 / -1" row="2 / 4">
              <div style={{
                background: 'white',
                padding: '1.5rem',
                borderRadius: '8px',
                border: '1px solid #e2e8f0',
                height: '100%'
              }}>
                <h4 style={{ margin: '0 0 1rem 0', color: '#2d3748', fontSize: '1rem' }}>Stats</h4>
                {[
                  { label: 'Users', value: '1.2k', color: '#10b981' },
                  { label: 'Sales', value: '$45k', color: '#3b82f6' },
                  { label: 'Orders', value: '234', color: '#f59e0b' }
                ].map((stat, i) => (
                  <div key={stat.label} style={{ marginBottom: '1rem' }}>
                    <div style={{ fontSize: '0.75rem', color: '#6b7280', marginBottom: '0.25rem' }}>
                      {stat.label}
                    </div>
                    <div style={{ fontSize: '1.25rem', fontWeight: 'bold', color: stat.color }}>
                      {stat.value}
                    </div>
                  </div>
                ))}
              </div>
            </Cell>

            {/* Footer - spans from sidebar end to full width */}
            <Cell column="4 / -1" row="4">
              <div style={{
                background: 'white',
                padding: '1rem',
                borderRadius: '8px',
                border: '1px solid #e2e8f0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}>
                <span style={{ color: '#6b7280', fontSize: '0.875rem' }}>Footer Content</span>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  {['Action 1', 'Action 2'].map(action => (
                    <button
                      key={action}
                      style={{
                        padding: '0.5rem 1rem',
                        background: '#667eea',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        fontSize: '0.875rem',
                        cursor: 'pointer'
                      }}
                    >
                      {action}
                    </button>
                  ))}
                </div>
              </div>
            </Cell>
          </Beam>
        </section>
      </div>
    </div>
  ),
};