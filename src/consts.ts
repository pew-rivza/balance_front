import areas from "mocks/areas.json";

const gradientMainColorLight = "#BCE6E7";
const gradientMainColorDark = "#5CACB8";
const gradientBasicColorLight = "#FFFFFF";
const gradientBasicColorDark = "#E5E8EF";
const gradientSuccessColorLight = "#8cf697";
const gradientSuccessColorDark = "#69D674";

const apiMock = {
  getAreas: () => Promise.resolve(areas),
}

// TODO: Заменить пустой объект на апи сервера, когда бэк будет готов
const API = process.env.NODE_ENV === "development" ? apiMock : {};

export default {
  gradientMainColorLight,
  gradientMainColorDark,
  gradientBasicColorLight,
  gradientBasicColorDark,
  gradientSuccessColorLight,
  gradientSuccessColorDark,
  API,
};
