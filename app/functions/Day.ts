import dayjs from "dayjs";

export function date(specificDate: string) {
  return dayjs(specificDate).format("dddd DD MMMM YYYY h:mm A");
}
