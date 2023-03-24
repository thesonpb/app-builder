import React, { useEffect, useState } from "react";
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

function PublicPage() {
  const [search, setSearch] = useState("");
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery(
      ["getListPublicPagespaja"],
      async ({ pageParam = 0 }) => {
        return await Page.getListPublicPage({
          page: pageParam,
          size: 15, // number of pages to retrieve per API call
        });
      },
      {
        getNextPageParam: (lastPage) => {
          console.log({ lastPage });
          // return the next page number, or null if there are no more pages
          const nextPage = lastPage.number + 1;
          return nextPage < lastPage.totalPages ? nextPage : null;
        },
        cacheTime: 0,
      }
    );

  const filteredPages = data?.pages
    ?.flatMap((page) => page.content)
    ?.filter((item: Page) =>
      item.name.toLowerCase()?.includes(search.toLowerCase())
    );

  useEffect(() => {
    // reset the list when search query changes
    // @ts-ignore
    fetchNextPage(0);
  }, [search]);

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
          onChange={(e) => setSearch(e.target.value)}
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
