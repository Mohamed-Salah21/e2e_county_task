export type ReqOptionsType = {
  method?: "POST" | "PATCH" | "DELETE";
  headers?: any;
  body?: any;
  next?: {
    revalidate?: number;
    tags?: string[];
  };
  revalidation?: {
    tag?: string;
    path?: string;
  };
  cache?: "no-store";
};
