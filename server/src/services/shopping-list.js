export const generate = (meals, ingredients) => {
  const identifiers = ingredients.map(ingredient => ingredient.id);
  return meals.reduce((list, meal) => {
    meal.recipe.ingredients.forEach(({ id, name, amount, units }) => {
      if (!identifiers.includes(id)) {
        const $amount = list[name] && list[name][units];
        list[name] = { [units]: $amount ? $amount + amount : amount };
      }
    });
    return list;
  }, {});
};
export const stringify = list => {
  return Object.entries(list).map(([name, units]) => `${name}: ${Object.entries(units).map(([unit, amount]) => `${amount} ${unit}`).join(" + ")}`);
};
