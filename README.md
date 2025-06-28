# Beam ⚡

Ultra-lightweight React grid component (~2KB). Just 2 props for responsive layouts: `minWidth` + `gap`. Smart column detection included.

```tsx
<Beam minWidth="250px" gap="1rem">
  {items.map(item => <Card key={item.id} {...item} />)}
</Beam>
```

## Features

- 🧠 **Smart Layout Detection**: Automatically determines optimal grid columns based on content count
- 📱 **Responsive by Default**: Uses CSS Grid's `auto-fit` with customizable breakpoints
- 📐 **Container Queries**: Component-based responsive design for modern layouts
- ⚡ **Performance Optimized**: Built-in CSS optimizations with `content-visibility` and `contain`
- 🎯 **TypeScript Support**: Full type safety with comprehensive prop types
- 🎨 **Framework Agnostic**: Works seamlessly with Tailwind, MUI, Chakra UI, Styled Components, and Mantine
- 🎪 **Advanced CSS**: Leverages modern CSS features for smooth rendering
- 🪄 **Zero Config**: Works out of the box, customize when needed

## Installation

```bash
npm install beam
# or
yarn add beam
```

## Quick Start

```tsx
import { Beam } from 'beam';

// That's it! Two props and you're done ✨
<Beam minWidth="250px" gap="1rem">
  <ProductCard />
  <ProductCard />
  <ProductCard />
  <ProductCard />
</Beam>

// Works with any content
<Beam minWidth="300px" gap="2rem">
  {blogPosts.map(post => (
    <article key={post.id}>
      <h2>{post.title}</h2>
      <p>{post.excerpt}</p>
    </article>
  ))}
</Beam>
```

## API Reference

### Essential Props (99% of use cases)

| Prop | Type | Description |
|------|------|-------------|
| `minWidth` | `string` | Minimum width for responsive columns (e.g., `"250px"`) |
| `gap` | `string \| number` | Space between items (e.g., `"1rem"`, `16`) |

### Optional Props (for advanced layouts)

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `columns` | `number \| string` | Auto-detected | Override column behavior |
| `responsive` | `boolean` | `true` | Enable auto-responsive behavior |
| `containerQuery` | `boolean` | `false` | Use container queries instead of media queries |

### Cell Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | - | Cell content |
| `column` | `number \| string` | - | Grid column position |
| `row` | `number \| string` | - | Grid row position |
| `columnSpan` | `number` | - | Number of columns to span |
| `rowSpan` | `number` | - | Number of rows to span |
| `alignSelf` | `GridAlignment` | - | Override alignment for this cell |
| `justifySelf` | `GridJustification` | - | Override justification for this cell |

## Real-World Examples

### E-commerce Product Grid
```tsx
<Beam minWidth="280px" gap="1.5rem">
  {products.map(product => (
    <div key={product.id} className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>${product.price}</p>
    </div>
  ))}
</Beam>
```

### Photo Gallery
```tsx
<Beam minWidth="200px" gap="0.5rem">
  {photos.map(photo => (
    <img key={photo.id} src={photo.src} alt={photo.title} />
  ))}
</Beam>
```

### Blog/News Layout
```tsx
<Beam minWidth="300px" gap="2rem">
  {articles.map(article => (
    <article key={article.id}>
      <img src={article.featuredImage} alt={article.title} />
      <h2>{article.title}</h2>
      <p>{article.excerpt}</p>
    </article>
  ))}
</Beam>
```

### Framework Integration

#### With Tailwind CSS
```tsx
<Beam 
  gap="1.5rem" 
  containerQuery 
  className="p-6 bg-white rounded-xl shadow-lg"
>
  <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 rounded-lg text-white">
    Tailwind Card
  </div>
</Beam>
```

#### With Material-UI
```tsx
import { Card, CardContent, Typography } from '@mui/material';

<Beam gap="2rem" responsive containerQuery>
  <Card elevation={3}>
    <CardContent>
      <Typography variant="h5">MUI Card</Typography>
    </CardContent>
  </Card>
</Beam>
```

#### With Chakra UI
```tsx
import { Box, Heading, useColorModeValue } from '@chakra-ui/react';

<Beam gap="6" containerQuery>
  <Box bg={useColorModeValue('white', 'gray.800')} p={6} rounded="lg">
    <Heading size="md">Chakra Card</Heading>
  </Box>
</Beam>
```

## License

MIT