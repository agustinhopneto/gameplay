import React, { useCallback, useState } from 'react';

import { ButtonAdd } from '../../components/ButtonAdd';
import { CategorySelect } from '../../components/CategorySelect';
import { Profile } from '../../components/Profile';

import { Container, Header, Content } from './styles';

export const Home: React.FC = () => {
  const [category, setCategory] = useState('');

  const handleCategorySelect = useCallback(
    (categoryId: string) => {
      if (categoryId === category) {
        setCategory('');
        return;
      }

      setCategory(categoryId);
    },
    [category],
  );

  return (
    <Container>
      <Header>
        <Profile />
        <ButtonAdd />
      </Header>

      <Content>
        <CategorySelect
          categorySelected={category}
          setCategory={handleCategorySelect}
        />
      </Content>
    </Container>
  );
};
