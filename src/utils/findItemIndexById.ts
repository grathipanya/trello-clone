interface Item {
  id: string;
}

export const findItemIndexById = <T extends Item>(items: T[], id: string) => {
  console.log(items, id);
  return items.findIndex((item: T) => item.id === id);
};
