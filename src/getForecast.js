import moment from "moment";

const getWeekDay = (date) => moment(date).format("dddd").substring(0, 3);

const getForecast = (data) =>
  data.map((day) => ({
    weekday: getWeekDay(day.Date),
    date: moment(day.Date).format("MMMM Do"),
    temp: day.Temperature.Maximum.Value,
    desc: day.Day.IconPhrase,
  }));

export default getForecast;
