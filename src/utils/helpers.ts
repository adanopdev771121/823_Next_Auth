import axios from "axios";

export const postFormData = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  try {
    const res = await axios.post("/api/auth", { email, password });
    console.log(res.data);
  } catch (err) {
    console.error(err);
  }
};
