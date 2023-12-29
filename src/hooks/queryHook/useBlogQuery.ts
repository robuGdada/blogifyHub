import { QueryFunctionContext, useQuery } from "@tanstack/react-query";
import { API } from "../../../API/api";

export interface Iblog {
  id: string;
  title: string;
  description: string;
  category: { id: number; name: string };
  user: { id: number; username: string };
  imageUrl?: string;
  thumbImageUrl?: string;
  createdAt: string;
  slug: string;
}

const fetchBlogs = async (queryVal?: string) => {
  const res = await API.get(`/blogs`, {
    params: {
      pageSize: 10,
      q: queryVal || "",
    },
  });

  return res.data;
};

const fetchOneBlog = async (slug: string) => {
  const res = await API.get(`/blogs/${slug}`);
  return res.data as Iblog;
};

function useBlogQuery(queryVal: string) {
  return useQuery({
    queryKey: ["blogsQueryKey", queryVal],
    queryFn: () => fetchBlogs(queryVal),
  });
}

function useOneBlog(id: string) {
  return useQuery({
    queryKey: ["blog"],
    queryFn: () => fetchOneBlog(id),
    enabled: !!id,
  });
}

export { useBlogQuery, useOneBlog, fetchBlogs, fetchOneBlog };
