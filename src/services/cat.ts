import { GetCatImage } from "../@types/services/cat.type";

const getCatImage: GetCatImage = (statusCode) => {
  const res = `https://http.cat/${statusCode}`;
  return res;
};

export { getCatImage };
