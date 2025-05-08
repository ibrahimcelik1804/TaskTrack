interface Item {
  count: number;
  title: string;
  status: string;
  color: string;
}
interface StatusBoxProps {
  item: Item;
}
export type {Item, StatusBoxProps};
