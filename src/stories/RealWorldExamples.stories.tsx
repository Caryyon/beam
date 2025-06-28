import type { Meta, StoryObj } from '@storybook/react';
import { Beam } from '../Beam';
import { Cell } from '../Cell';

const meta: Meta = {
  title: 'Beam/Real World Examples',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Real-world examples using actual images and realistic data.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// E-commerce Product Grid
export const EcommerceProductGrid: Story = {
  render: () => {
    const products = [
      {
        id: 1,
        name: 'Wireless Headphones',
        price: '$99.99',
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop',
        rating: 4.5,
        reviews: 128
      },
      {
        id: 2,
        name: 'Smart Watch',
        price: '$249.99',
        image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop',
        rating: 4.8,
        reviews: 89
      },
      {
        id: 3,
        name: 'Laptop Stand',
        price: '$79.99',
        image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=400&fit=crop',
        rating: 4.3,
        reviews: 156
      },
      {
        id: 4,
        name: 'Coffee Mug',
        price: '$24.99',
        image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcf93a?w=400&h=400&fit=crop',
        rating: 4.6,
        reviews: 203
      },
      {
        id: 5,
        name: 'Plant Pot',
        price: '$34.99',
        image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=400&h=400&fit=crop',
        rating: 4.4,
        reviews: 74
      },
      {
        id: 6,
        name: 'Desk Lamp',
        price: '$89.99',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
        rating: 4.7,
        reviews: 112
      },
      {
        id: 7,
        name: 'Sneakers',
        price: '$159.99',
        image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop',
        rating: 4.9,
        reviews: 289
      },
      {
        id: 8,
        name: 'Sunglasses',
        price: '$199.99',
        image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop',
        rating: 4.2,
        reviews: 67
      }
    ];

    return (
      <div style={{ padding: '2rem', background: '#f8f9fa', minHeight: '100vh' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ marginBottom: '1rem', color: '#2d3748', fontSize: '2rem', fontWeight: 'bold' }}>
            🛍️ E-commerce Product Grid
          </h2>
          <p style={{ marginBottom: '2rem', color: '#4a5568', fontSize: '1.125rem' }}>
            Minimal API: Just <code>minWidth</code> and <code>gap</code> for a responsive product grid.
          </p>
          
          <div style={{ marginBottom: '2rem', background: '#e6fffa', padding: '1rem', borderRadius: '6px' }}>
            <pre style={{ margin: 0, fontSize: '0.875rem', color: '#234e52' }}>
{`<Beam minWidth="280px" gap="1.5rem">
  {products.map(product => <ProductCard key={product.id} {...product} />)}
</Beam>`}
            </pre>
          </div>

          <Beam minWidth="280px" gap="1.5rem">
            {products.map(product => (
              <div
                key={product.id}
                style={{
                  background: 'white',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
                }}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  style={{
                    width: '100%',
                    height: '240px',
                    objectFit: 'cover'
                  }}
                />
                <div style={{ padding: '1.25rem' }}>
                  <h3 style={{ 
                    margin: '0 0 0.5rem 0', 
                    fontSize: '1.125rem', 
                    fontWeight: '600', 
                    color: '#2d3748' 
                  }}>
                    {product.name}
                  </h3>
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    marginBottom: '0.75rem',
                    gap: '0.5rem'
                  }}>
                    <div style={{ color: '#f6ad55' }}>
                      {'★'.repeat(Math.floor(product.rating))}
                      {'☆'.repeat(5 - Math.floor(product.rating))}
                    </div>
                    <span style={{ fontSize: '0.875rem', color: '#6b7280' }}>
                      ({product.reviews})
                    </span>
                  </div>
                  <div style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center' 
                  }}>
                    <span style={{ 
                      fontSize: '1.25rem', 
                      fontWeight: 'bold', 
                      color: '#059669' 
                    }}>
                      {product.price}
                    </span>
                    <button style={{
                      background: '#3b82f6',
                      color: 'white',
                      border: 'none',
                      borderRadius: '6px',
                      padding: '0.5rem 1rem',
                      fontSize: '0.875rem',
                      fontWeight: '500',
                      cursor: 'pointer',
                      transition: 'background-color 0.2s'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#2563eb';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#3b82f6';
                    }}>
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </Beam>
        </div>
      </div>
    );
  },
};

// Photo Gallery
export const PhotoGallery: Story = {
  render: () => {
    const photos = [
      {
        id: 1,
        src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop',
        title: 'Mountain Landscape',
        photographer: 'John Doe'
      },
      {
        id: 2,
        src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop',
        title: 'Modern Interior',
        photographer: 'Jane Smith'
      },
      {
        id: 3,
        src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=800&fit=crop',
        title: 'Forest Path',
        photographer: 'Mike Johnson'
      },
      {
        id: 4,
        src: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&h=400&fit=crop',
        title: 'City Skyline',
        photographer: 'Sarah Wilson'
      },
      {
        id: 5,
        src: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=600&h=600&fit=crop',
        title: 'Desert Sunset',
        photographer: 'Alex Brown'
      },
      {
        id: 6,
        src: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=600&h=400&fit=crop',
        title: 'Ocean Waves',
        photographer: 'Emma Davis'
      },
      {
        id: 7,
        src: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&h=800&fit=crop',
        title: 'Autumn Trees',
        photographer: 'Chris Lee'
      },
      {
        id: 8,
        src: 'https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?w=600&h=400&fit=crop',
        title: 'Wildflowers',
        photographer: 'Lisa Taylor'
      }
    ];

    return (
      <div style={{ padding: '2rem', background: '#1a1a1a', minHeight: '100vh' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <h2 style={{ marginBottom: '1rem', color: 'white', fontSize: '2rem', fontWeight: 'bold' }}>
            📸 Photography Gallery
          </h2>
          <p style={{ marginBottom: '2rem', color: '#a0a0a0', fontSize: '1.125rem' }}>
            Masonry-style layout with real photos. Beam handles the responsive columns automatically.
          </p>
          
          <div style={{ marginBottom: '2rem', background: '#2a2a2a', padding: '1rem', borderRadius: '6px' }}>
            <pre style={{ margin: 0, fontSize: '0.875rem', color: '#e0e0e0' }}>
{`<Beam minWidth="300px" gap="1rem">
  {photos.map(photo => <PhotoCard key={photo.id} {...photo} />)}
</Beam>`}
            </pre>
          </div>

          <Beam minWidth="300px" gap="1rem">
            {photos.map((photo, index) => {
              // Create masonry effect with different heights
              const heights = [300, 400, 350, 320, 380, 340, 420, 360];
              const height = heights[index % heights.length];
              
              return (
                <div
                  key={photo.id}
                  style={{
                    position: 'relative',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    transition: 'transform 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.02)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                >
                  <img
                    src={photo.src}
                    alt={photo.title}
                    style={{
                      width: '100%',
                      height: `${height}px`,
                      objectFit: 'cover',
                      display: 'block'
                    }}
                  />
                  <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
                    color: 'white',
                    padding: '2rem 1rem 1rem',
                  }}>
                    <h3 style={{ 
                      margin: '0 0 0.25rem 0', 
                      fontSize: '1rem', 
                      fontWeight: '600' 
                    }}>
                      {photo.title}
                    </h3>
                    <p style={{ 
                      margin: 0, 
                      fontSize: '0.875rem', 
                      opacity: 0.8 
                    }}>
                      by {photo.photographer}
                    </p>
                  </div>
                </div>
              );
            })}
          </Beam>
        </div>
      </div>
    );
  },
};

// Social Media Feed
export const SocialMediaFeed: Story = {
  render: () => {
    const posts = [
      {
        id: 1,
        user: 'john_photographer',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=600&fit=crop',
        caption: 'Golden hour in the mountains 🏔️ #nature #photography',
        likes: 1024,
        comments: 47,
        time: '2h'
      },
      {
        id: 2,
        user: 'foodie_jane',
        avatar: 'https://images.unsplash.com/photo-1494790108755-2616b611f2eb?w=100&h=100&fit=crop&crop=face',
        image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=500&h=500&fit=crop',
        caption: 'Homemade pizza night! 🍕 Recipe in my bio',
        likes: 856,
        comments: 32,
        time: '4h'
      },
      {
        id: 3,
        user: 'travel_mike',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
        image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=500&h=700&fit=crop',
        caption: 'Lost in the wilderness 🌲 #adventure #hiking',
        likes: 2156,
        comments: 89,
        time: '6h'
      },
      {
        id: 4,
        user: 'design_sarah',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
        image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=400&fit=crop',
        caption: 'New workspace setup ✨ #design #workspace',
        likes: 1789,
        comments: 156,
        time: '8h'
      },
      {
        id: 5,
        user: 'coffee_lover',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face',
        image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=500&h=600&fit=crop',
        caption: 'Perfect latte art ☕ #coffee #barista',
        likes: 634,
        comments: 23,
        time: '12h'
      },
      {
        id: 6,
        user: 'pet_photos',
        avatar: 'https://images.unsplash.com/photo-1494790108755-2616b611f2eb?w=100&h=100&fit=crop&crop=face',
        image: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?w=500&h=500&fit=crop',
        caption: 'This little guy made my day 🐕 #dogsofinstagram',
        likes: 3456,
        comments: 234,
        time: '1d'
      }
    ];

    return (
      <div style={{ padding: '2rem', background: '#fafafa', minHeight: '100vh' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ marginBottom: '1rem', color: '#2d3748', fontSize: '2rem', fontWeight: 'bold' }}>
            📱 Social Media Feed
          </h2>
          <p style={{ marginBottom: '2rem', color: '#4a5568', fontSize: '1.125rem' }}>
            Instagram-style feed with minimal Beam setup. Single column on mobile, masonry on desktop.
          </p>
          
          <div style={{ marginBottom: '2rem', background: '#e6fffa', padding: '1rem', borderRadius: '6px' }}>
            <pre style={{ margin: 0, fontSize: '0.875rem', color: '#234e52' }}>
{`<Beam columns={1} gap="2rem">
  {posts.map(post => <PostCard key={post.id} {...post} />)}
</Beam>`}
            </pre>
          </div>

          <Beam columns={1} gap="2rem">
            {posts.map(post => (
              <div
                key={post.id}
                style={{
                  background: 'white',
                  borderRadius: '12px',
                  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                  overflow: 'hidden'
                }}
              >
                {/* Post Header */}
                <div style={{ 
                  padding: '1rem', 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '0.75rem' 
                }}>
                  <img
                    src={post.avatar}
                    alt={post.user}
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      objectFit: 'cover'
                    }}
                  />
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: '600', fontSize: '0.875rem' }}>{post.user}</div>
                    <div style={{ fontSize: '0.75rem', color: '#6b7280' }}>{post.time} ago</div>
                  </div>
                  <button style={{
                    background: 'none',
                    border: 'none',
                    fontSize: '1.25rem',
                    cursor: 'pointer',
                    color: '#6b7280'
                  }}>
                    ⋯
                  </button>
                </div>

                {/* Post Image */}
                <img
                  src={post.image}
                  alt="Post"
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block'
                  }}
                />

                {/* Post Actions */}
                <div style={{ padding: '1rem' }}>
                  <div style={{ 
                    display: 'flex', 
                    gap: '1rem', 
                    marginBottom: '0.75rem' 
                  }}>
                    <button style={{
                      background: 'none',
                      border: 'none',
                      fontSize: '1.5rem',
                      cursor: 'pointer',
                      color: '#e53e3e'
                    }}>
                      ♥
                    </button>
                    <button style={{
                      background: 'none',
                      border: 'none',
                      fontSize: '1.25rem',
                      cursor: 'pointer',
                      color: '#6b7280'
                    }}>
                      💬
                    </button>
                    <button style={{
                      background: 'none',
                      border: 'none',
                      fontSize: '1.25rem',
                      cursor: 'pointer',
                      color: '#6b7280'
                    }}>
                      📤
                    </button>
                  </div>
                  
                  <div style={{ fontSize: '0.875rem', fontWeight: '600', marginBottom: '0.5rem' }}>
                    {post.likes.toLocaleString()} likes
                  </div>
                  
                  <div style={{ fontSize: '0.875rem', marginBottom: '0.5rem' }}>
                    <span style={{ fontWeight: '600' }}>{post.user}</span>{' '}
                    {post.caption}
                  </div>
                  
                  <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>
                    View all {post.comments} comments
                  </div>
                </div>
              </div>
            ))}
          </Beam>
        </div>
      </div>
    );
  },
};

// News/Blog Layout
export const NewsBlogLayout: Story = {
  render: () => {
    const articles = [
      {
        id: 1,
        title: 'The Future of Web Development',
        excerpt: 'Exploring emerging trends and technologies that will shape how we build websites.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
        author: 'Tech Writer',
        date: 'Dec 15, 2023',
        readTime: '5 min read',
        category: 'Technology'
      },
      {
        id: 2,
        title: 'Design Systems at Scale',
        excerpt: 'How to build and maintain design systems for large organizations.',
        image: 'https://images.unsplash.com/photo-1559028006-448665bd7c7f?w=600&h=400&fit=crop',
        author: 'Design Lead',
        date: 'Dec 14, 2023',
        readTime: '8 min read',
        category: 'Design'
      },
      {
        id: 3,
        title: 'Performance Optimization Tips',
        excerpt: 'Practical strategies to make your web applications lightning fast.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
        author: 'Performance Expert',
        date: 'Dec 13, 2023',
        readTime: '6 min read',
        category: 'Performance'
      },
      {
        id: 4,
        title: 'Mobile-First Development',
        excerpt: 'Why starting with mobile design leads to better user experiences.',
        image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop',
        author: 'Mobile Dev',
        date: 'Dec 12, 2023',
        readTime: '4 min read',
        category: 'Mobile'
      }
    ];

    return (
      <div style={{ padding: '2rem', background: '#f8f9fa', minHeight: '100vh' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ marginBottom: '1rem', color: '#2d3748', fontSize: '2rem', fontWeight: 'bold' }}>
            📰 News & Blog Layout
          </h2>
          <p style={{ marginBottom: '2rem', color: '#4a5568', fontSize: '1.125rem' }}>
            Responsive blog layout with featured article and smaller cards.
          </p>
          
          <div style={{ marginBottom: '2rem', background: '#e6fffa', padding: '1rem', borderRadius: '6px' }}>
            <pre style={{ margin: 0, fontSize: '0.875rem', color: '#234e52' }}>
{`<Beam minWidth="300px" gap="2rem">
  <Cell columnSpan={2}><FeaturedArticle /></Cell>
  {articles.map(article => <ArticleCard key={article.id} {...article} />)}
</Beam>`}
            </pre>
          </div>

          <Beam minWidth="300px" gap="2rem">
            {/* Featured Article */}
            <Cell columnSpan={2}>
              <div style={{
                background: 'white',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                height: '400px',
                position: 'relative'
              }}>
                <img
                  src={articles[0].image}
                  alt={articles[0].title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
                  color: 'white',
                  padding: '3rem 2rem 2rem'
                }}>
                  <div style={{
                    display: 'inline-block',
                    background: '#3b82f6',
                    color: 'white',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '4px',
                    fontSize: '0.75rem',
                    fontWeight: '500',
                    marginBottom: '1rem'
                  }}>
                    {articles[0].category}
                  </div>
                  <h2 style={{
                    fontSize: '1.875rem',
                    fontWeight: 'bold',
                    margin: '0 0 0.75rem 0',
                    lineHeight: '1.2'
                  }}>
                    {articles[0].title}
                  </h2>
                  <p style={{
                    fontSize: '1rem',
                    margin: '0 0 1rem 0',
                    opacity: 0.9
                  }}>
                    {articles[0].excerpt}
                  </p>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    fontSize: '0.875rem',
                    opacity: 0.8
                  }}>
                    <span>{articles[0].author}</span>
                    <span>•</span>
                    <span>{articles[0].date}</span>
                    <span>•</span>
                    <span>{articles[0].readTime}</span>
                  </div>
                </div>
              </div>
            </Cell>

            {/* Regular Articles */}
            {articles.slice(1).map(article => (
              <div
                key={article.id}
                style={{
                  background: 'white',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                  transition: 'transform 0.2s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <img
                  src={article.image}
                  alt={article.title}
                  style={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover'
                  }}
                />
                <div style={{ padding: '1.5rem' }}>
                  <div style={{
                    display: 'inline-block',
                    background: '#f3f4f6',
                    color: '#374151',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '4px',
                    fontSize: '0.75rem',
                    fontWeight: '500',
                    marginBottom: '1rem'
                  }}>
                    {article.category}
                  </div>
                  <h3 style={{
                    fontSize: '1.25rem',
                    fontWeight: '600',
                    margin: '0 0 0.75rem 0',
                    color: '#2d3748',
                    lineHeight: '1.3'
                  }}>
                    {article.title}
                  </h3>
                  <p style={{
                    fontSize: '0.875rem',
                    color: '#6b7280',
                    margin: '0 0 1rem 0',
                    lineHeight: '1.5'
                  }}>
                    {article.excerpt}
                  </p>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    fontSize: '0.75rem',
                    color: '#9ca3af'
                  }}>
                    <span>{article.author}</span>
                    <span>•</span>
                    <span>{article.date}</span>
                    <span>•</span>
                    <span>{article.readTime}</span>
                  </div>
                </div>
              </div>
            ))}
          </Beam>
        </div>
      </div>
    );
  },
};