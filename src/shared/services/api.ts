import axios from "axios";
import { configuracoesDaApi } from "../configs/api";

const api = axios.create({
  baseURL: configuracoesDaApi.URLApi,
});

export { api };
