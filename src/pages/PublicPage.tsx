import React, { useState } from "react";
import { Button, Input } from "antd";
import SearchIcon from "../app/icons/SearchIcon";
import PagePreview from "../components/cards/PagePreview";
import Page from "../app/models/Page";
import { useInfiniteQuery } from "react-query";

interface Page {
  id: number;
  userId: number;
  name: string;
  json: string;
  modifiedAt: string;
  previewImage: string;
}
const debounce = (func: any, delay: any) => {
  // @ts-ignore
  let timer;
  // @ts-ignore
  return function (...args) {
    // @ts-ignore
    const context = this;
    // @ts-ignore
    clearTimeout(timer);
    timer = setTimeout(() => func.apply(context, args), delay);
  };
};
function PublicPage() {
  const [search, setSearch] = useState("");
  const handleSearch = debounce((value: string) => {
    setSearch(value);
  }, 500);
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery(
      ["getListPublicPages", search],
      async ({ pageParam = 0 }) => {
        return await Page.getListPublicPage({
          page: pageParam,
          size: 15,
          name: search,
        });
      },
      {
        getNextPageParam: (lastPage) => {
          const nextPage = lastPage.number + 1;
          return nextPage < lastPage.totalPages ? nextPage : null;
        },
        cacheTime: 0,
      }
    );

  const filteredPages = data?.pages?.flatMap((page) => page.content);

  return (
    <div className="bg-dark main-content">
      <div
        className="bg-dark text-light px-8 py-4 font-semibold text-base"
        style={{ borderBottom: "1px solid #525866" }}
      >
        Community
      </div>
      <div className="py-4 px-6">
        <Input
          id="search-box"
          prefix={<SearchIcon />}
          className="w-96 ml-2"
          size="large"
          placeholder="Search for public pages"
          onChange={(e) => handleSearch(e.target.value)}
        />
      </div>
      <div className="p-6 grid flex justify-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
        {filteredPages?.map((page: Page) => (
          <PagePreview
            key={page.id}
            id={page.id}
            name={page.name}
            modifiedAt={page.modifiedAt}
            previewImage={page.previewImage}
          />
        ))}
      </div>
      {hasNextPage && (
        <div className="flex justify-center">
          <Button
            size="large"
            type="primary"
            className="mt-4"
            onClick={() => fetchNextPage()}
            disabled={isFetchingNextPage}
          >
            {isFetchingNextPage ? "Loading more..." : "Load More"}
          </Button>
        </div>
      )}
    </div>
  );
}

export default PublicPage;
