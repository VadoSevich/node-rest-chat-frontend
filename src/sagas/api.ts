import axios from "axios";
import "./interceptors";

interface OptionsProps {
  url: string
  method?: any
  data?: any
}

const apiRequest = async (options: OptionsProps) => {
  const { url = "" } = options;

  const response = await axios({
    method: "GET",
    ...options,
    url: `${process.env.REACT_APP_BACKEND_URL}${url}`,
  });

  return response;
};

export const fetchRequest = ({ url, method, data }: OptionsProps) => {

  return apiRequest({
    url,
    method,
    data
  });
}
 