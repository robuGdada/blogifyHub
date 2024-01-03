import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { API } from "../../../API/api";

export type Iblog = {
  id: string;
  title: string;
  description: string;
  category: { id: number; name: string };
  user: { id: number; username: string };
  imageUrl?: string;
  thumbImageUrl?: string;
  createdAt: string;
  slug: string;
};

const fetchBlogs = async (queryVal: string, pageParam: number) => {
  const res = await API.get(`/blogs`, {
    params: {
      page: pageParam,
      pageSize: 10,
      q: queryVal || "",
    },
  });

  return res.data as Iblog[];
};

const fetchOneBlog = async (slug: string) => {
  const res = await API.get(`/blogs/${slug}`);
  return res.data as Iblog;
};

function useBlogQuery(queryVal: string) {
  return useInfiniteQuery({
    queryKey: ["Sdf"],
    queryFn: ({ pageParam }) => fetchBlogs(queryVal, pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage, _, lastPageParam) => {
      if (lastPage?.length > 0) {
        return +lastPageParam + 1;
      }
    },
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
