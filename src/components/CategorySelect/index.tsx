import React, { useCallback } from 'react';

import { Container } from './styles';
import { categories } from '../../utils/data';
import { Category } from '../Category';

type Props = {
  selectedCategories: string[] | string;
  setCategory: (categoryId: string) => void;
};

export const CategorySelect: React.FC<Props> = ({
  selectedCategories,
  setCategory,
}) => {
  const handleCheck = useCallback(
    (id: string) => {
      if (Array.isArray(selectedCategories)) {
        return selectedCategories.includes(id);
      }

      return id === selectedCategories;
    },
    [selectedCategories],
  );

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
          checked={handleCheck(category.id)}
          onPress={() => setCategory(category.id)}
        />
      ))}
    </Container>
  );
};
