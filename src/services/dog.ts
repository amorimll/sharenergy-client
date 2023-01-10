import axios from "axios";

const getDogImage = async () => {
  try {
    const res = await axios.get(`https://random.dog/woof`);
    return res;
  } catch (error: any) {
    console.log(error);
  }
};

export { getDogImage };
