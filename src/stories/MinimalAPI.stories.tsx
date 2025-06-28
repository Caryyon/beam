import type { Meta, StoryObj } from '@storybook/react';
import { Beam } from '../Beam';

const meta: Meta = {
  title: 'Beam/Minimal API',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Ultra-minimal API examples showing how easy Beam is to use.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const TwoPropsOnly: Story = {
  render: () => (
    <div style={{ padding: '2rem', background: '#f8f9fa', minHeight: '100vh' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <h2 style={{ marginBottom: '1rem', color: '#2d3748', fontSize: '2.5rem', fontWeight: 'bold' }}>
          🧞‍♂️ Ultra-Minimal API
        </h2>
        <p style={{ marginBottom: '2rem', color: '#4a5568', fontSize: '1.25rem' }}>
          Just <code>minWidth</code> and <code>gap</code>. That's it. Beam handles the rest.
        </p>
        
        <div style={{ marginBottom: '3rem', background: '#e6fffa', padding: '2rem', borderRadius: '8px' }}>
          <h3 style={{ margin: '0 0 1rem 0', color: '#234e52', fontSize: '1.5rem' }}>
            Bundle Size: ~2KB gzipped 📦
          </h3>
          <div style={{ 
            display: 'grid', 
            gap: '2rem', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            marginBottom: '2rem'
          }}>
            <div style={{ background: 'white', padding: '1.5rem', borderRadius: '8px', border: '1px solid #4fd1c7' }}>
              <h4 style={{ margin: '0 0 1rem 0', color: '#234e52' }}>Before Beam</h4>
              <pre style={{ 
                background: '#1a202c', 
                color: '#e2e8f0', 
                padding: '1rem', 
                borderRadius: '6px', 
                fontSize: '0.75rem',
                overflow: 'auto'
              }}>
{`// Complex CSS
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}

@media (max-width: 640px) {
  .grid {
    grid-template-columns: 1fr;
  }
}

// JSX
<div className="grid">
  {items}
</div>`}
              </pre>
            </div>
            
            <div style={{ background: 'white', padding: '1.5rem', borderRadius: '8px', border: '2px solid #10b981' }}>
              <h4 style={{ margin: '0 0 1rem 0', color: '#047857' }}>With Beam ✨</h4>
              <pre style={{ 
                background: '#1a202c', 
                color: '#e2e8f0', 
                padding: '1rem', 
                borderRadius: '6px', 
                fontSize: '0.75rem',
                overflow: 'auto'
              }}>
{`// No CSS needed!

// JSX
<Beam minWidth="250px" gap="1rem">
  {items}
</Beam>`}
              </pre>
            </div>
          </div>
          
          <div style={{ 
            background: 'white', 
            padding: '1.5rem', 
            borderRadius: '8px', 
            border: '1px solid #4fd1c7',
            textAlign: 'center'
          }}>
            <h4 style={{ margin: '0 0 1rem 0', color: '#234e52' }}>That's 90% less code! 🎉</h4>
            <p style={{ margin: 0, color: '#2d3748' }}>
              Auto-responsive, smart column detection, perfect spacing, zero configuration.
            </p>
          </div>
        </div>

        <div style={{ marginBottom: '3rem' }}>
          <h3 style={{ marginBottom: '1rem', color: '#2d3748' }}>Live Example:</h3>
          <Beam minWidth="250px" gap="1rem">
            {Array.from({ length: 8 }, (_, i) => (
              <div
                key={i}
                style={{
                  background: 'white',
                  padding: '2rem',
                  borderRadius: '8px',
                  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                  textAlign: 'center',
                  border: `3px solid hsl(${i * 45}, 70%, 60%)`
                }}
              >
                <div style={{
                  width: '60px',
                  height: '60px',
                  background: `hsl(${i * 45}, 70%, 60%)`,
                  borderRadius: '50%',
                  margin: '0 auto 1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '1.5rem',
                  fontWeight: 'bold'
                }}>
                  {i + 1}
                </div>
                <h4 style={{ margin: '0 0 0.5rem 0', color: '#2d3748' }}>Item {i + 1}</h4>
                <p style={{ margin: 0, color: '#6b7280', fontSize: '0.875rem' }}>
                  Resize your window to see the magic ✨
                </p>
              </div>
            ))}
          </Beam>
        </div>

        <div style={{ 
          display: 'grid', 
          gap: '2rem', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          marginBottom: '2rem'
        }}>
          <div style={{ background: 'white', padding: '1.5rem', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
            <h4 style={{ margin: '0 0 1rem 0', color: '#2d3748' }}>🚀 Zero Config</h4>
            <p style={{ margin: 0, color: '#6b7280', fontSize: '0.875rem' }}>
              Works perfectly out of the box. No setup, no configuration files, no complex APIs.
            </p>
          </div>
          
          <div style={{ background: 'white', padding: '1.5rem', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
            <h4 style={{ margin: '0 0 1rem 0', color: '#2d3748' }}>📱 Auto-Responsive</h4>
            <p style={{ margin: 0, color: '#6b7280', fontSize: '0.875rem' }}>
              Automatically adapts to any screen size. Mobile, tablet, desktop - all handled.
            </p>
          </div>
          
          <div style={{ background: 'white', padding: '1.5rem', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
            <h4 style={{ margin: '0 0 1rem 0', color: '#2d3748' }}>🧠 Smart Detection</h4>
            <p style={{ margin: 0, color: '#6b7280', fontSize: '0.875rem' }}>
              Intelligently determines the optimal number of columns based on content.
            </p>
          </div>
          
          <div style={{ background: 'white', padding: '1.5rem', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
            <h4 style={{ margin: '0 0 1rem 0', color: '#2d3748' }}>⚡ Lightweight</h4>
            <p style={{ margin: 0, color: '#6b7280', fontSize: '0.875rem' }}>
              Only ~2KB gzipped. Won't bloat your bundle or slow down your app.
            </p>
          </div>
          
          <div style={{ background: 'white', padding: '1.5rem', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
            <h4 style={{ margin: '0 0 1rem 0', color: '#2d3748' }}>🎯 TypeScript</h4>
            <p style={{ margin: 0, color: '#6b7280', fontSize: '0.875rem' }}>
              Full TypeScript support with intelligent autocomplete and type safety.
            </p>
          </div>
          
          <div style={{ background: 'white', padding: '1.5rem', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
            <h4 style={{ margin: '0 0 1rem 0', color: '#2d3748' }}>🎨 Framework Agnostic</h4>
            <p style={{ margin: 0, color: '#6b7280', fontSize: '0.875rem' }}>
              Works with any styling solution: Tailwind, MUI, Styled Components, etc.
            </p>
          </div>
        </div>
        
        <div style={{ 
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', 
          color: 'white', 
          padding: '2rem', 
          borderRadius: '12px', 
          textAlign: 'center' 
        }}>
          <h3 style={{ margin: '0 0 1rem 0', fontSize: '1.5rem' }}>Ready to get started?</h3>
          <p style={{ margin: '0 0 1.5rem 0', opacity: 0.9 }}>
            Install Beam and start building responsive layouts in seconds.
          </p>
          <code style={{ 
            background: 'rgba(255, 255, 255, 0.2)', 
            padding: '0.75rem 1.5rem', 
            borderRadius: '6px', 
            fontSize: '1rem',
            fontWeight: '500'
          }}>
            npm install beam
          </code>
        </div>
      </div>
    </div>
  ),
};

export const CommonPatterns: Story = {
  render: () => (
    <div style={{ padding: '2rem', background: '#f8f9fa', minHeight: '100vh' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ marginBottom: '1rem', color: '#2d3748', fontSize: '2rem', fontWeight: 'bold' }}>
          📋 Common Patterns
        </h2>
        <p style={{ marginBottom: '3rem', color: '#4a5568', fontSize: '1.125rem' }}>
          The most common Beam patterns you'll use in real projects.
        </p>
        
        <div style={{ display: 'grid', gap: '3rem' }}>
          {/* Product Grid */}
          <section>
            <h3 style={{ margin: '0 0 1rem 0', color: '#2d3748' }}>🛍️ Product/Card Grid</h3>
            <div style={{ background: '#fff5f5', padding: '1rem', borderRadius: '6px', marginBottom: '1rem' }}>
              <code style={{ fontSize: '0.875rem', color: '#c53030' }}>
                &lt;Beam minWidth="280px" gap="1.5rem"&gt;
              </code>
            </div>
            <Beam minWidth="280px" gap="1.5rem">
              {['iPhone 15', 'MacBook Pro', 'iPad Air', 'Apple Watch'].map((product, i) => (
                <div
                  key={product}
                  style={{
                    background: 'white',
                    padding: '1.5rem',
                    borderRadius: '8px',
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                    textAlign: 'center'
                  }}
                >
                  <div style={{
                    width: '80px',
                    height: '80px',
                    background: `hsl(${i * 60}, 70%, 60%)`,
                    borderRadius: '8px',
                    margin: '0 auto 1rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '2rem'
                  }}>
                    📱
                  </div>
                  <h4 style={{ margin: '0 0 0.5rem 0' }}>{product}</h4>
                  <p style={{ margin: '0 0 1rem 0', color: '#6b7280', fontSize: '0.875rem' }}>
                    Starting at $999
                  </p>
                  <button style={{
                    background: '#3b82f6',
                    color: 'white',
                    border: 'none',
                    padding: '0.5rem 1rem',
                    borderRadius: '6px',
                    cursor: 'pointer'
                  }}>
                    Buy Now
                  </button>
                </div>
              ))}
            </Beam>
          </section>

          {/* Photo Gallery */}
          <section>
            <h3 style={{ margin: '0 0 1rem 0', color: '#2d3748' }}>📸 Photo Gallery</h3>
            <div style={{ background: '#f0fff4', padding: '1rem', borderRadius: '6px', marginBottom: '1rem' }}>
              <code style={{ fontSize: '0.875rem', color: '#166534' }}>
                &lt;Beam minWidth="200px" gap="0.5rem"&gt;
              </code>
            </div>
            <Beam minWidth="200px" gap="0.5rem">
              {Array.from({ length: 12 }, (_, i) => (
                <div
                  key={i}
                  style={{
                    aspectRatio: '1',
                    background: `linear-gradient(135deg, hsl(${i * 30}, 70%, 60%), hsl(${i * 30 + 60}, 70%, 50%))`,
                    borderRadius: '6px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '1.5rem',
                    fontWeight: 'bold'
                  }}
                >
                  📷
                </div>
              ))}
            </Beam>
          </section>

          {/* Feature Cards */}
          <section>
            <h3 style={{ margin: '0 0 1rem 0', color: '#2d3748' }}>✨ Feature Cards</h3>
            <div style={{ background: '#eff6ff', padding: '1rem', borderRadius: '6px', marginBottom: '1rem' }}>
              <code style={{ fontSize: '0.875rem', color: '#1d4ed8' }}>
                &lt;Beam minWidth="300px" gap="2rem"&gt;
              </code>
            </div>
            <Beam minWidth="300px" gap="2rem">
              {[
                { icon: '🚀', title: 'Fast Performance', desc: 'Lightning fast rendering' },
                { icon: '📱', title: 'Mobile First', desc: 'Responsive by default' },
                { icon: '🎨', title: 'Beautiful UI', desc: 'Stunning visual design' },
                { icon: '🔒', title: 'Secure', desc: 'Enterprise-grade security' }
              ].map((feature, i) => (
                <div
                  key={feature.title}
                  style={{
                    background: 'white',
                    padding: '2rem',
                    borderRadius: '12px',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                    textAlign: 'center',
                    border: '1px solid #e5e7eb'
                  }}
                >
                  <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{feature.icon}</div>
                  <h4 style={{ margin: '0 0 0.5rem 0', color: '#1f2937' }}>{feature.title}</h4>
                  <p style={{ margin: 0, color: '#6b7280', fontSize: '0.875rem' }}>
                    {feature.desc}
                  </p>
                </div>
              ))}
            </Beam>
          </section>

          {/* Team Cards */}
          <section>
            <h3 style={{ margin: '0 0 1rem 0', color: '#2d3748' }}>👥 Team Grid</h3>
            <div style={{ background: '#fefce8', padding: '1rem', borderRadius: '6px', marginBottom: '1rem' }}>
              <code style={{ fontSize: '0.875rem', color: '#a16207' }}>
                &lt;Beam minWidth="250px" gap="1rem"&gt;
              </code>
            </div>
            <Beam minWidth="250px" gap="1rem">
              {[
                { name: 'Sarah Chen', role: 'CEO', avatar: '👩‍💼' },
                { name: 'Mike Johnson', role: 'CTO', avatar: '👨‍💻' },
                { name: 'Lisa Wang', role: 'Designer', avatar: '👩‍🎨' },
                { name: 'Alex Smith', role: 'Developer', avatar: '👨‍🔬' },
                { name: 'Emma Brown', role: 'Marketing', avatar: '👩‍💻' },
                { name: 'David Lee', role: 'Sales', avatar: '👨‍💼' }
              ].map((person, i) => (
                <div
                  key={person.name}
                  style={{
                    background: 'white',
                    padding: '1.5rem',
                    borderRadius: '8px',
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                    textAlign: 'center'
                  }}
                >
                  <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>{person.avatar}</div>
                  <h4 style={{ margin: '0 0 0.25rem 0', color: '#1f2937' }}>{person.name}</h4>
                  <p style={{ margin: 0, color: '#6b7280', fontSize: '0.875rem' }}>
                    {person.role}
                  </p>
                </div>
              ))}
            </Beam>
          </section>
        </div>
      </div>
    </div>
  ),
};