import { format } from "date-fns";
import { faIR } from 'date-fns/locale'
const getDateTime = (dateTime) => {

  const date = format(new Date (dateTime), "yyyy-MM-dd",{ locale: faIR })
 
  const time = format(new Date (dateTime), "HH:mm",{ locale: faIR })

  return { date, time };
};

export { getDateTime };
