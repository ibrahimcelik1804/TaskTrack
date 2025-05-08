interface DatePickerProps {
  label?: string;
  placeholder?: string;
  date: Date;
  size?: 'small' | 'medium' | 'large'; 
  onSelectDate: (date: Date) => void;

}
export type {DatePickerProps};
