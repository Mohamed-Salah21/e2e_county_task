"use server";
import { ReqOptionsType } from "@/typescript/types/reqOptions.type";
import ApiOperations from "./ApiOperations";

const ServerHandler = async (endpoint: string, reqOptions?: ReqOptionsType) => {
  return await ApiOperations(endpoint, reqOptions);
};
export default ServerHandler;
