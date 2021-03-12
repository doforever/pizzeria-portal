import React from 'react';
import products from '../../../data/products.json';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import MenuProduct from '../MenuProduct/MenuProduct';

const Menu = () => {

  return (
    <Card>
      <CardHeader
        title="Menu"
        titleTypographyProps={{component: 'h2', variant: 'h3'}}
      />
      <CardContent>
        {products.map(product => (
          <MenuProduct key={product.id} {...product}/>
        ))}
      </CardContent>
    </Card>
  );
};

export default Menu;
