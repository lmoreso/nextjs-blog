import { parseISO, format } from 'date-fns'

export default function Date({ dateString }: { dateString: string }) {
  const date = parseISO(dateString)
  // return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>
  return <time dateTime={dateString}>{date.toLocaleDateString('es', {dateStyle: "long"})}</time>

}