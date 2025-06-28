import type { Meta, StoryObj } from '@storybook/react';
import { Beam } from '../Beam';
import { Cell } from '../Cell';

const meta: Meta = {
  title: 'Beam/Examples',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Real-world examples and use cases for Beam components.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const PhotoGallery: Story = {
  render: () => (
    <div style={{ padding: '2rem', background: '#f8f9fa', minHeight: '100vh' }}>
      <h2 style={{ marginBottom: '1rem', color: '#2d3748' }}>Photo Gallery</h2>
      <p style={{ marginBottom: '2rem', color: '#4a5568' }}>
        A responsive photo gallery that adapts to different screen sizes while maintaining aspect ratios.
      </p>
      <Beam minWidth="250px" gap="0.5rem">
        {Array.from({ length: 20 }, (_, i) => (
          <div
            key={i}
            style={{
              aspectRatio: '4/3',
              background: `linear-gradient(135deg, hsl(${i * 18}, 70%, 60%) 0%, hsl(${i * 18 + 60}, 70%, 40%) 100%)`,
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '1.2rem',
              fontWeight: 'bold',
              textShadow: '0 1px 2px rgba(0,0,0,0.3)',
              cursor: 'pointer',
              transition: 'transform 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            Photo {i + 1}
          </div>
        ))}
      </Beam>
    </div>
  ),
};

export const ProductCatalog: Story = {
  render: () => (
    <div style={{ padding: '2rem', background: '#f8f9fa', minHeight: '100vh' }}>
      <h2 style={{ marginBottom: '1rem', color: '#2d3748' }}>Product Catalog</h2>
      <p style={{ marginBottom: '2rem', color: '#4a5568' }}>
        E-commerce product grid with consistent card layouts.
      </p>
      <Beam minWidth="280px" gap="1.5rem">
        {Array.from({ length: 12 }, (_, i) => (
          <div
            key={i}
            style={{
              background: 'white',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
              transition: 'transform 0.2s, box-shadow 0.2s',
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
            }}
          >
            <div
              style={{
                height: '200px',
                background: `linear-gradient(135deg, hsl(${i * 30}, 60%, 70%) 0%, hsl(${i * 30 + 30}, 60%, 50%) 100%)`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '1rem',
                fontWeight: 'bold',
              }}
            >
              Product Image {i + 1}
            </div>
            <div style={{ padding: '1.5rem' }}>
              <h3 style={{ margin: '0 0 0.5rem 0', color: '#2d3748', fontSize: '1.1rem' }}>
                Product Name {i + 1}
              </h3>
              <p style={{ margin: '0 0 1rem 0', color: '#718096', fontSize: '0.9rem' }}>
                A great product description that tells you everything you need to know.
              </p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#2d3748' }}>
                  ${((i + 1) * 29.99).toFixed(2)}
                </span>
                <button
                  style={{
                    background: '#667eea',
                    color: 'white',
                    border: 'none',
                    borderRadius: '6px',
                    padding: '0.5rem 1rem',
                    fontSize: '0.9rem',
                    cursor: 'pointer',
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </Beam>
    </div>
  ),
};

export const BlogLayout: Story = {
  render: () => (
    <div style={{ padding: '2rem', background: '#f8f9fa', minHeight: '100vh' }}>
      <h2 style={{ marginBottom: '1rem', color: '#2d3748' }}>Blog Layout</h2>
      <p style={{ marginBottom: '2rem', color: '#4a5568' }}>
        Magazine-style blog layout with featured articles and sidebar.
      </p>
      <Beam 
        columns="2fr 1fr" 
        gap="2rem"
        style={{ maxWidth: '1200px', margin: '0 auto' }}
      >
        <div>
          <Beam gap="1.5rem">
            {Array.from({ length: 6 }, (_, i) => (
              <article
                key={i}
                style={{
                  background: 'white',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                }}
              >
                <div
                  style={{
                    height: '200px',
                    background: `linear-gradient(45deg, hsl(${i * 40}, 60%, 60%) 0%, hsl(${i * 40 + 40}, 60%, 40%) 100%)`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '1rem',
                    fontWeight: 'bold',
                  }}
                >
                  Article Image {i + 1}
                </div>
                <div style={{ padding: '1.5rem' }}>
                  <h3 style={{ margin: '0 0 1rem 0', color: '#2d3748' }}>
                    Article Title {i + 1}: Something Interesting
                  </h3>
                  <p style={{ margin: '0 0 1rem 0', color: '#718096', lineHeight: '1.6' }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...
                  </p>
                  <div style={{ fontSize: '0.9rem', color: '#a0aec0' }}>
                    Published on March {i + 15}, 2024
                  </div>
                </div>
              </article>
            ))}
          </Beam>
        </div>
        
        <aside>
          <div style={{ position: 'sticky', top: '2rem' }}>
            <div
              style={{
                background: 'white',
                borderRadius: '8px',
                padding: '1.5rem',
                marginBottom: '1.5rem',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
              }}
            >
              <h3 style={{ margin: '0 0 1rem 0', color: '#2d3748' }}>About the Author</h3>
              <div
                style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  margin: '0 auto 1rem',
                }}
              />
              <p style={{ margin: '0', color: '#718096', textAlign: 'center', lineHeight: '1.6' }}>
                A passionate writer sharing insights about technology, design, and creativity.
              </p>
            </div>
            
            <div
              style={{
                background: 'white',
                borderRadius: '8px',
                padding: '1.5rem',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
              }}
            >
              <h3 style={{ margin: '0 0 1rem 0', color: '#2d3748' }}>Popular Posts</h3>
              {Array.from({ length: 4 }, (_, i) => (
                <div
                  key={i}
                  style={{
                    padding: '0.75rem 0',
                    borderBottom: i < 3 ? '1px solid #e2e8f0' : 'none',
                  }}
                >
                  <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '0.9rem', color: '#2d3748' }}>
                    Popular Article {i + 1}
                  </h4>
                  <div style={{ fontSize: '0.8rem', color: '#a0aec0' }}>
                    {1000 - i * 100} views
                  </div>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </Beam>
    </div>
  ),
};

export const AdminDashboard: Story = {
  render: () => (
    <div style={{ padding: '2rem', background: '#f8f9fa', minHeight: '100vh' }}>
      <h2 style={{ marginBottom: '1rem', color: '#2d3748' }}>Admin Dashboard</h2>
      <p style={{ marginBottom: '2rem', color: '#4a5568' }}>
        Complex dashboard layout with multiple sections and responsive behavior.
      </p>
      <Beam 
        columns="250px 1fr 300px" 
        rows="60px 1fr" 
        gap="1rem"
        style={{ height: '600px', maxWidth: '1400px', margin: '0 auto' }}
      >
        {/* Header */}
        <Cell column="1 / -1">
          <div
            style={{
              background: '#2d3748',
              color: 'white',
              padding: '0 1.5rem',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <h1 style={{ margin: 0, fontSize: '1.25rem' }}>Admin Panel</h1>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
              <span>Welcome, User</span>
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  background: '#667eea',
                }}
              />
            </div>
          </div>
        </Cell>
        
        {/* Sidebar */}
        <Cell>
          <div
            style={{
              background: 'white',
              padding: '1.5rem',
              borderRadius: '8px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
              height: '100%',
            }}
          >
            <h3 style={{ margin: '0 0 1.5rem 0', color: '#2d3748' }}>Navigation</h3>
            {['Dashboard', 'Users', 'Settings', 'Analytics', 'Reports'].map((item, i) => (
              <div
                key={item}
                style={{
                  padding: '0.75rem',
                  margin: '0.5rem 0',
                  borderRadius: '6px',
                  background: i === 0 ? '#667eea' : 'transparent',
                  color: i === 0 ? 'white' : '#4a5568',
                  cursor: 'pointer',
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </Cell>
        
        {/* Main Content */}
        <Cell>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', height: '100%' }}>
            {/* Stats Grid */}
            <Beam columns={2} gap="1rem">
              {[
                { label: 'Total Users', value: '1,234', change: '+12%' },
                { label: 'Revenue', value: '$45,678', change: '+8%' },
                { label: 'Orders', value: '567', change: '+15%' },
                { label: 'Conversion', value: '3.2%', change: '+0.5%' },
              ].map((stat, i) => (
                <div
                  key={stat.label}
                  style={{
                    background: 'white',
                    padding: '1.5rem',
                    borderRadius: '8px',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                  }}
                >
                  <div style={{ fontSize: '0.9rem', color: '#718096', marginBottom: '0.5rem' }}>
                    {stat.label}
                  </div>
                  <div style={{ fontSize: '1.75rem', fontWeight: 'bold', color: '#2d3748', marginBottom: '0.25rem' }}>
                    {stat.value}
                  </div>
                  <div style={{ fontSize: '0.8rem', color: '#38a169' }}>
                    {stat.change}
                  </div>
                </div>
              ))}
            </Beam>
            
            {/* Chart Area */}
            <div
              style={{
                background: 'white',
                padding: '1.5rem',
                borderRadius: '8px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <div
                style={{
                  width: '100%',
                  height: '200px',
                  background: 'linear-gradient(45deg, #667eea 0%, #764ba2 100%)',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '1.1rem',
                  fontWeight: 'bold',
                }}
              >
                Analytics Chart Area
              </div>
            </div>
          </div>
        </Cell>
        
        {/* Right Sidebar */}
        <Cell>
          <div
            style={{
              background: 'white',
              padding: '1.5rem',
              borderRadius: '8px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
            }}
          >
            <div>
              <h3 style={{ margin: '0 0 1rem 0', color: '#2d3748' }}>Recent Activity</h3>
              {Array.from({ length: 5 }, (_, i) => (
                <div
                  key={i}
                  style={{
                    padding: '0.75rem 0',
                    borderBottom: i < 4 ? '1px solid #e2e8f0' : 'none',
                  }}
                >
                  <div style={{ fontSize: '0.9rem', color: '#2d3748', marginBottom: '0.25rem' }}>
                    User action {i + 1}
                  </div>
                  <div style={{ fontSize: '0.8rem', color: '#718096' }}>
                    {i + 1} minutes ago
                  </div>
                </div>
              ))}
            </div>
            
            <div>
              <h3 style={{ margin: '0 0 1rem 0', color: '#2d3748' }}>Quick Actions</h3>
              {['Create User', 'Export Data', 'Send Newsletter'].map((action) => (
                <button
                  key={action}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    margin: '0.5rem 0',
                    background: '#667eea',
                    color: 'white',
                    border: 'none',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    fontSize: '0.9rem',
                  }}
                >
                  {action}
                </button>
              ))}
            </div>
          </div>
        </Cell>
      </Beam>
    </div>
  ),
};