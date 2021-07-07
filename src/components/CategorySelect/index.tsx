import React from 'react';

import { Container } from './styles';
import { categories } from '../../utils/categories';
import { Category } from '../Category';

type Props = {
  selectedCategories: string[];
  setCategory: (categoryId: string) => void;
};

export const CategorySelect: React.FC<Props> = ({
  selectedCategories,
  setCategory,
}) => {
  return (
    <Container
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingRight: 40 }}
    >
      {categories.map(category => (
        <Category
          key={category.id}
          title={category.title}
          icon={category.icon}
          checked={selectedCategories.includes(category.id)}
          onPress={() => setCategory(category.id)}
        />
      ))}
    </Container>
  );
};
