import React from 'react';
import { render } from '@testing-library/react';
import { Beam, Cell } from './index';

describe('Beam', () => {
  it('renders children correctly', () => {
    const { getByText } = render(
      <Beam>
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
      </Beam>
    );

    expect(getByText('Item 1')).toBeInTheDocument();
    expect(getByText('Item 2')).toBeInTheDocument();
    expect(getByText('Item 3')).toBeInTheDocument();
  });

  it('applies smart column detection with responsive disabled', () => {
    const { container } = render(
      <Beam responsive={false}>
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
        <div>Item 4</div>
      </Beam>
    );

    const gridElement = container.firstChild as HTMLElement;
    expect(gridElement).toHaveStyle('display: grid');
    expect(gridElement).toHaveStyle('grid-template-columns: 2');
  });

  it('works with Cell component', () => {
    const { getByText } = render(
      <Beam columns={3}>
        <Cell column={1} row={1}>Cell 1</Cell>
        <Cell column={2} row={1}>Cell 2</Cell>
        <Cell column={3} row={1}>Cell 3</Cell>
      </Beam>
    );

    expect(getByText('Cell 1')).toBeInTheDocument();
    expect(getByText('Cell 2')).toBeInTheDocument();
    expect(getByText('Cell 3')).toBeInTheDocument();
  });
});