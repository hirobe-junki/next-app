import { parseISO, format } from 'date-fns';
import { DateProps } from '../types/components/date.type';

const Date = ({ dateString }: DateProps) => {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>;
};

export default Date;
