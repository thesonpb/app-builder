import React, { useEffect, useState } from "react";
import { Input } from "antd";
import SearchIcon from "../app/icons/SearchIcon";
import PagePreview from "../components/cards/PagePreview";
import Page from "../app/models/Page";
import { useQuery } from "react-query";

interface PageInterface {
  id: number;
  userId: number;
  name: string;
  json: string;
  modifiedAt: string;
  previewImage: string;
}

function MyPage() {
  const [search, setSearch] = useState("");
  const [pageList, setPageList] = useState([]);
  const { data: pages, refetch }: any = useQuery(
    ["getListPages"],
    async () => {
      const res = await Page.getListCurrentPage();
      setPageList(res);
      return res;
    },
    { initialData: [] }
  );
  useEffect(() => {
    setPageList(
      pages?.filter((item: PageInterface) =>
        item.name.toLowerCase()?.includes(search.toLowerCase())
      )
    );
  }, [search]);

  return (
    <div className="bg-dark main-content">
      <div
        className="bg-dark text-light px-8 py-4 font-semibold text-base"
        style={{ borderBottom: "1px solid #525866" }}
      >
        My pages
      </div>
      <div className="py-4 px-6">
        <Input
          id="search-box"
          prefix={<SearchIcon />}
          className="w-96 ml-2"
          size="large"
          placeholder="Search for your pages"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="p-6 grid flex justify-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
        {pageList?.map((page: PageInterface) => (
          <PagePreview key={page.id} {...page} refetchList={refetch} />
        ))}
      </div>
    </div>
  );
}

export default MyPage;
