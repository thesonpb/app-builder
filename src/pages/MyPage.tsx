import React from "react";
import { Input } from "antd";
import SearchIcon from "../app/icons/SearchIcon";
import PagePreview from "../components/cards/PagePreview";
import Page from "../app/models/Page";
import { useQuery } from "react-query";

interface Page {
  id: number;
  userId: number;
  name: string;
  json: string;
  modifiedAt: string;
  previewImage: string;
}

function MyPage() {
  const { data: pageList } = useQuery(
    ["getListPages"],
    async () => {
      return await Page.getListCurrentPage();
    },
    { initialData: [] }
  );

  return (
    <div>
      <div className="mb-8">
        <Input
          id="search-box"
          prefix={<SearchIcon />}
          className="w-96 ml-2"
          size="large"
          placeholder="Search for your page"
        />
      </div>
      <div className="grid flex justify-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
        {pageList?.map((page: Page) => (
          <PagePreview
            id={page.id}
            name={page.name}
            modifiedAt={page.modifiedAt}
            previewImage={page.previewImage}
          />
        ))}
      </div>
    </div>
  );
}

export default MyPage;
