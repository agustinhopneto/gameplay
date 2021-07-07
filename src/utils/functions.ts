export const setCategory = (
  category: string | string[],
  id: string,
): string | string[] => {
  if (Array.isArray(category)) {
    const alreadySelected = category.findIndex(item => item === id);

    if (alreadySelected >= 0) {
      const filteredCategories = category.filter(item => item !== id);

      return filteredCategories;
    }

    return [...category, id];
  }

  if (category === id) {
    return '';
  }

  return id;
};
