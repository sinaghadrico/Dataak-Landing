import { format, formatDistanceToNowStrict } from "date-fns";
import { faIR } from "date-fns/locale";
const getDateTime = (dateTime) => {
    const date = format(new Date(dateTime), "yyyy-MM-dd", { locale: faIR });
    const time = format(new Date(dateTime), "hh:mm", { locale: faIR });

    return { date, time };
};
const getFormatDistanceToNowStrict = (dateTime) => {
    const distance = formatDistanceToNowStrict(new Date(dateTime), { addSuffix: true, locale: faIR });
    return distance;
};

export { getDateTime, getFormatDistanceToNowStrict };
