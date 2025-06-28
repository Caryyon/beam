import type { Meta, StoryObj } from '@storybook/react';
import { Beam } from '../Beam';
import { Cell } from '../Cell';

const meta: Meta = {
  title: 'Beam/Framework Integrations',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Examples showing how to integrate Beam with popular styling and component libraries.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Tailwind CSS Integration
export const TailwindCSS: Story = {
  render: () => (
    <div style={{ padding: '2rem', background: '#f8fafc', minHeight: '100vh' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ marginBottom: '1rem', color: '#1e293b', fontSize: '2rem', fontWeight: 'bold' }}>
          🎨 Tailwind CSS Integration
        </h2>
        <p style={{ marginBottom: '2rem', color: '#64748b', fontSize: '1.125rem' }}>
          Beam works seamlessly with Tailwind's utility classes. Use className prop for styling.
        </p>
        
        <div style={{ marginBottom: '3rem', background: '#f1f5f9', padding: '1.5rem', borderRadius: '8px' }}>
          <h3 style={{ margin: '0 0 1rem 0', color: '#334155' }}>Example Code:</h3>
          <pre style={{ 
            background: '#0f172a', 
            color: '#e2e8f0', 
            padding: '1rem', 
            borderRadius: '6px', 
            overflow: 'auto',
            fontSize: '0.875rem'
          }}>
{`<Beam 
  gap="1.5rem" 
  containerQuery 
  className="p-6 bg-white rounded-xl shadow-lg"
>
  <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 rounded-lg text-white">
    <h3 className="text-xl font-bold">Card 1</h3>
    <p className="mt-2 opacity-90">Tailwind styled content</p>
  </div>
  <div className="bg-gradient-to-r from-green-400 to-blue-500 p-6 rounded-lg text-white">
    <h3 className="text-xl font-bold">Card 2</h3>
    <p className="mt-2 opacity-90">Responsive design</p>
  </div>
</Beam>`}
          </pre>
        </div>

        <Beam 
          gap="1.5rem" 
          containerQuery 
          className="p-6 bg-white rounded-xl shadow-lg"
          style={{
            background: 'white',
            padding: '1.5rem',
            borderRadius: '12px',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
          }}
        >
          {Array.from({ length: 6 }, (_, i) => (
            <div
              key={i}
              style={{
                background: `linear-gradient(135deg, 
                  ${i % 2 === 0 ? '#3b82f6' : '#10b981'} 0%, 
                  ${i % 2 === 0 ? '#8b5cf6' : '#06b6d4'} 100%)`,
                padding: '1.5rem',
                borderRadius: '8px',
                color: 'white',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
              }}
            >
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', margin: '0 0 0.5rem 0' }}>
                Card {i + 1}
              </h3>
              <p style={{ margin: 0, opacity: 0.9 }}>
                Styled with Tailwind utilities and CSS-in-JS
              </p>
            </div>
          ))}
        </Beam>
        
        <div style={{ marginTop: '2rem', padding: '1rem', background: '#ecfdf5', borderRadius: '8px', border: '1px solid #bbf7d0' }}>
          <h4 style={{ color: '#059669', margin: '0 0 0.5rem 0' }}>✅ Best Practices:</h4>
          <ul style={{ color: '#047857', margin: 0, paddingLeft: '1.25rem' }}>
            <li>Use containerQuery for component-based responsive design</li>
            <li>Combine Beam's smart layout with Tailwind's utility classes</li>
            <li>Leverage Tailwind's responsive prefixes (sm:, md:, lg:) alongside Beam</li>
          </ul>
        </div>
      </div>
    </div>
  ),
};

// Material-UI (MUI) Integration
export const MaterialUI: Story = {
  render: () => (
    <div style={{ padding: '2rem', background: '#fafafa', minHeight: '100vh' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ marginBottom: '1rem', color: '#1976d2', fontSize: '2rem', fontWeight: 'bold' }}>
          🎭 Material-UI Integration
        </h2>
        <p style={{ marginBottom: '2rem', color: '#666', fontSize: '1.125rem' }}>
          Perfect harmony between Beam's layout system and Material-UI components.
        </p>
        
        <div style={{ marginBottom: '3rem', background: '#e3f2fd', padding: '1.5rem', borderRadius: '8px' }}>
          <h3 style={{ margin: '0 0 1rem 0', color: '#1565c0' }}>Example Code:</h3>
          <pre style={{ 
            background: '#263238', 
            color: '#eceff1', 
            padding: '1rem', 
            borderRadius: '6px', 
            overflow: 'auto',
            fontSize: '0.875rem'
          }}>
{`import { Card, CardContent, Typography, Chip } from '@mui/material';

<Beam gap="2rem" responsive containerQuery>
  <Card elevation={3}>
    <CardContent>
      <Typography variant="h5" component="h2" gutterBottom>
        Feature Card
      </Typography>
      <Typography variant="body2" color="text.secondary">
        MUI components work perfectly with Beam layouts
      </Typography>
      <Chip label="Material Design" color="primary" />
    </CardContent>
  </Card>
</Beam>`}
          </pre>
        </div>

        <Beam gap="2rem" responsive containerQuery>
          {Array.from({ length: 8 }, (_, i) => (
            <div
              key={i}
              style={{
                background: 'white',
                borderRadius: '8px',
                padding: '1.5rem',
                boxShadow: '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)',
                transition: 'box-shadow 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0px 5px 5px -3px rgba(0,0,0,0.2), 0px 8px 10px 1px rgba(0,0,0,0.14), 0px 3px 14px 2px rgba(0,0,0,0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)';
              }}
            >
              <h3 style={{ 
                fontSize: '1.5rem', 
                fontWeight: 400, 
                margin: '0 0 1rem 0', 
                color: '#1976d2',
                fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif'
              }}>
                {['Dashboard', 'Analytics', 'Reports', 'Settings', 'Users', 'Messages', 'Calendar', 'Tasks'][i]}
              </h3>
              <p style={{ 
                margin: '0 0 1rem 0', 
                color: 'rgba(0, 0, 0, 0.6)',
                fontSize: '0.875rem',
                lineHeight: '1.43',
                fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif'
              }}>
                Material Design components integrated seamlessly with Beam's intelligent layout system.
              </p>
              <div style={{
                display: 'inline-block',
                background: '#1976d2',
                color: 'white',
                padding: '4px 12px',
                borderRadius: '16px',
                fontSize: '0.8125rem',
                fontWeight: 500,
                fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif'
              }}>
                Material Design
              </div>
            </div>
          ))}
        </Beam>
        
        <div style={{ marginTop: '2rem', padding: '1rem', background: '#e8f5e8', borderRadius: '8px', border: '1px solid #4caf50' }}>
          <h4 style={{ color: '#2e7d32', margin: '0 0 0.5rem 0' }}>💡 Integration Tips:</h4>
          <ul style={{ color: '#388e3c', margin: 0, paddingLeft: '1.25rem' }}>
            <li>Use MUI's sx prop alongside Beam for complex styling</li>
            <li>Combine with MUI's breakpoints for consistent responsive design</li>
            <li>Beam handles layout, MUI provides beautiful components</li>
          </ul>
        </div>
      </div>
    </div>
  ),
};

// Chakra UI Integration
export const ChakraUI: Story = {
  render: () => (
    <div style={{ padding: '2rem', background: '#f7fafc', minHeight: '100vh' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ marginBottom: '1rem', color: '#319795', fontSize: '2rem', fontWeight: 'bold' }}>
          ⚡ Chakra UI Integration
        </h2>
        <p style={{ marginBottom: '2rem', color: '#4a5568', fontSize: '1.125rem' }}>
          Combine Beam's smart layouts with Chakra UI's design system and theme-driven approach.
        </p>
        
        <div style={{ marginBottom: '3rem', background: '#e6fffa', padding: '1.5rem', borderRadius: '8px' }}>
          <h3 style={{ margin: '0 0 1rem 0', color: '#234e52' }}>Example Code:</h3>
          <pre style={{ 
            background: '#1a202c', 
            color: '#e2e8f0', 
            padding: '1rem', 
            borderRadius: '6px', 
            overflow: 'auto',
            fontSize: '0.875rem'
          }}>
{`import { Box, Heading, Text, Badge, useColorModeValue } from '@chakra-ui/react';

<Beam gap="6" containerQuery responsive>
  <Box 
    bg={useColorModeValue('white', 'gray.800')} 
    p={6} 
    rounded="lg" 
    shadow="md"
  >
    <Heading size="md" mb={3}>Feature</Heading>
    <Text color="gray.600" mb={4}>
      Chakra UI components with Beam layouts
    </Text>
    <Badge colorScheme="teal">Chakra UI</Badge>
  </Box>
</Beam>`}
          </pre>
        </div>

        <Beam gap="1.5rem" containerQuery responsive>
          {Array.from({ length: 6 }, (_, i) => {
            const colors = ['teal', 'blue', 'purple', 'pink', 'orange', 'green'];
            const color = colors[i];
            
            return (
              <div
                key={i}
                style={{
                  background: 'white',
                  padding: '1.5rem',
                  borderRadius: '8px',
                  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)',
                  border: '1px solid #e2e8f0',
                  transition: 'all 0.2s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)';
                }}
              >
                <h3 style={{ 
                  fontSize: '1.125rem', 
                  fontWeight: 600, 
                  margin: '0 0 0.75rem 0', 
                  color: '#2d3748'
                }}>
                  Component {i + 1}
                </h3>
                <p style={{ 
                  margin: '0 0 1rem 0', 
                  color: '#4a5568',
                  fontSize: '0.875rem',
                  lineHeight: '1.5'
                }}>
                  Chakra UI's design tokens work perfectly with Beam's responsive system.
                </p>
                <span style={{
                  display: 'inline-block',
                  background: {
                    teal: '#319795',
                    blue: '#3182ce',
                    purple: '#805ad5',
                    pink: '#d53f8c',
                    orange: '#dd6b20',
                    green: '#38a169'
                  }[color],
                  color: 'white',
                  padding: '2px 8px',
                  borderRadius: '4px',
                  fontSize: '0.75rem',
                  fontWeight: 500,
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>
                  {color}
                </span>
              </div>
            );
          })}
        </Beam>
        
        <div style={{ marginTop: '2rem', padding: '1rem', background: '#f0fff4', borderRadius: '8px', border: '1px solid #9ae6b4' }}>
          <h4 style={{ color: '#276749', margin: '0 0 0.5rem 0' }}>🎯 Chakra UI + Beam:</h4>
          <ul style={{ color: '#2f855a', margin: 0, paddingLeft: '1.25rem' }}>
            <li>Use Chakra's spacing scale with Beam's gap prop</li>
            <li>Leverage useColorModeValue with Beam's styling</li>
            <li>Combine responsive props from both libraries</li>
          </ul>
        </div>
      </div>
    </div>
  ),
};

// Styled Components Integration
export const StyledComponents: Story = {
  render: () => (
    <div style={{ padding: '2rem', background: '#fef7f0', minHeight: '100vh' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ marginBottom: '1rem', color: '#db7093', fontSize: '2rem', fontWeight: 'bold' }}>
          💅 Styled Components Integration
        </h2>
        <p style={{ marginBottom: '2rem', color: '#8b5a3c', fontSize: '1.125rem' }}>
          Create dynamic, theme-aware layouts by combining Beam with styled-components.
        </p>
        
        <div style={{ marginBottom: '3rem', background: '#fff4e6', padding: '1.5rem', borderRadius: '8px' }}>
          <h3 style={{ margin: '0 0 1rem 0', color: '#b7791f' }}>Example Code:</h3>
          <pre style={{ 
            background: '#2d3748', 
            color: '#e2e8f0', 
            padding: '1rem', 
            borderRadius: '6px', 
            overflow: 'auto',
            fontSize: '0.875rem'
          }}>
{`import styled, { ThemeProvider } from 'styled-components';

const StyledCard = styled.div\`
  background: \${props => props.theme.cardBg};
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;
  
  &:hover {
    transform: translateY(-4px);
  }
\`;

<ThemeProvider theme={{ cardBg: 'white', primary: '#db7093' }}>
  <Beam gap="2rem" containerQuery>
    <StyledCard>
      <h3>Styled Component</h3>
      <p>Dynamic theming with Beam</p>
    </StyledCard>
  </Beam>
</ThemeProvider>`}
          </pre>
        </div>

        <Beam gap="2rem" containerQuery responsive>
          {Array.from({ length: 9 }, (_, i) => (
            <div
              key={i}
              style={{
                background: 'linear-gradient(135deg, #fff 0%, #f8f9fa 100%)',
                padding: '1.5rem',
                borderRadius: '12px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.2s ease',
                border: '1px solid rgba(219, 112, 147, 0.2)',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(219, 112, 147, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '4px',
                  background: `linear-gradient(90deg, 
                    #db7093 ${i * 11}%, 
                    #ff6b9d ${i * 11 + 20}%, 
                    #c44569 ${i * 11 + 40}%)`
                }}
              />
              <h3 style={{ 
                fontSize: '1.25rem', 
                fontWeight: 600, 
                margin: '0 0 0.75rem 0', 
                color: '#2d3748'
              }}>
                Styled Card {i + 1}
              </h3>
              <p style={{ 
                margin: '0 0 1rem 0', 
                color: '#4a5568',
                fontSize: '0.875rem',
                lineHeight: '1.6'
              }}>
                This card demonstrates styled-components integration with Beam's responsive layout system.
              </p>
              <div style={{
                display: 'flex',
                gap: '0.5rem',
                flexWrap: 'wrap'
              }}>
                <span style={{
                  background: '#db7093',
                  color: 'white',
                  padding: '4px 8px',
                  borderRadius: '12px',
                  fontSize: '0.75rem',
                  fontWeight: 500
                }}>
                  styled 💅
                </span>
                <span style={{
                  background: '#ff6b9d',
                  color: 'white',
                  padding: '4px 8px',
                  borderRadius: '12px',
                  fontSize: '0.75rem',
                  fontWeight: 500
                }}>
                  dynamic
                </span>
              </div>
            </div>
          ))}
        </Beam>
        
        <div style={{ marginTop: '2rem', padding: '1rem', background: '#fdf2f8', borderRadius: '8px', border: '1px solid #f9a8d4' }}>
          <h4 style={{ color: '#be185d', margin: '0 0 0.5rem 0' }}>🎨 Styling Best Practices:</h4>
          <ul style={{ color: '#be185d', margin: 0, paddingLeft: '1.25rem' }}>
            <li>Use Beam for layout structure, styled-components for theming</li>
            <li>Pass theme objects to both Beam styles and styled components</li>
            <li>Leverage CSS-in-JS benefits while maintaining performant layouts</li>
          </ul>
        </div>
      </div>
    </div>
  ),
};

// Mantine Integration
export const Mantine: Story = {
  render: () => (
    <div style={{ padding: '2rem', background: '#f8f9fa', minHeight: '100vh' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ marginBottom: '1rem', color: '#495057', fontSize: '2rem', fontWeight: 'bold' }}>
          🎯 Mantine Integration
        </h2>
        <p style={{ marginBottom: '2rem', color: '#6c757d', fontSize: '1.125rem' }}>
          Integrate Beam with Mantine's comprehensive component library and theme system.
        </p>
        
        <div style={{ marginBottom: '3rem', background: '#e9ecef', padding: '1.5rem', borderRadius: '8px' }}>
          <h3 style={{ margin: '0 0 1rem 0', color: '#212529' }}>Example Code:</h3>
          <pre style={{ 
            background: '#212529', 
            color: '#f8f9fa', 
            padding: '1rem', 
            borderRadius: '6px', 
            overflow: 'auto',
            fontSize: '0.875rem'
          }}>
{`import { Card, Text, Badge, Button, Group } from '@mantine/core';

<Beam gap="md" containerQuery responsive>
  <Card shadow="sm" padding="lg" radius="md" withBorder>
    <Group justify="space-between" mt="md" mb="xs">
      <Text fw={500}>Mantine Card</Text>
      <Badge color="pink">Featured</Badge>
    </Group>
    <Text size="sm" c="dimmed">
      Perfectly integrated with Beam layouts
    </Text>
    <Button color="blue" fullWidth mt="md" radius="md">
      Learn More
    </Button>
  </Card>
</Beam>`}
          </pre>
        </div>

        <Beam gap="1.5rem" containerQuery responsive>
          {Array.from({ length: 12 }, (_, i) => {
            const colors = ['blue', 'grape', 'red', 'pink', 'grape', 'violet', 'indigo', 'cyan', 'teal', 'green', 'lime', 'yellow'];
            const color = colors[i];
            
            return (
              <div
                key={i}
                style={{
                  background: 'white',
                  padding: '1rem',
                  borderRadius: '8px',
                  border: '1px solid #dee2e6',
                  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.1)',
                  transition: 'box-shadow 0.15s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.1)';
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                  <h3 style={{ 
                    fontSize: '1rem', 
                    fontWeight: 500, 
                    margin: 0, 
                    color: '#212529'
                  }}>
                    Mantine Card
                  </h3>
                  <span style={{
                    background: {
                      blue: '#339af0',
                      grape: '#ae3ec9',
                      red: '#f03e3e',
                      pink: '#d6336c',
                      violet: '#7950f2',
                      indigo: '#4c6ef5',
                      cyan: '#22b8cf',
                      teal: '#20c997',
                      green: '#51cf66',
                      lime: '#94d82d',
                      yellow: '#ffd43b'
                    }[color],
                    color: color === 'yellow' || color === 'lime' ? '#212529' : 'white',
                    padding: '2px 8px',
                    borderRadius: '4px',
                    fontSize: '0.75rem',
                    fontWeight: 500
                  }}>
                    {color}
                  </span>
                </div>
                <p style={{ 
                  margin: '0 0 1rem 0', 
                  color: '#6c757d',
                  fontSize: '0.875rem',
                  lineHeight: '1.5'
                }}>
                  Mantine components integrate seamlessly with Beam's intelligent responsive system.
                </p>
                <button style={{
                  width: '100%',
                  background: '#339af0',
                  color: 'white',
                  border: 'none',
                  padding: '0.5rem 1rem',
                  borderRadius: '4px',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  cursor: 'pointer',
                  transition: 'background-color 0.15s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#228be6';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#339af0';
                }}>
                  Learn More
                </button>
              </div>
            );
          })}
        </Beam>
        
        <div style={{ marginTop: '2rem', padding: '1rem', background: '#d3f9d8', borderRadius: '8px', border: '1px solid #8ce99a' }}>
          <h4 style={{ color: '#2b8a3e', margin: '0 0 0.5rem 0' }}>🛠️ Mantine Integration Features:</h4>
          <ul style={{ color: '#2b8a3e', margin: 0, paddingLeft: '1.25rem' }}>
            <li>Use Mantine's spacing system (xs, sm, md, lg, xl) with Beam</li>
            <li>Leverage Mantine's color system and themes</li>
            <li>Combine with Mantine's responsive utilities and Beam's container queries</li>
            <li>Perfect for admin dashboards and data-heavy applications</li>
          </ul>
        </div>
      </div>
    </div>
  ),
};