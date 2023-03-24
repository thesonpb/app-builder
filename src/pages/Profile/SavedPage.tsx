import React from "react";
import PagePreview from "../../components/cards/PagePreview";
import { useQuery } from "react-query";
import Page from "../../app/models/Page";
import { Spin } from "antd";

interface PageInterface {
  id: number;
  userId: number;
  name: string;
  json: string;
  modifiedAt: string;
  previewImage: string;
}

function SavedPage() {
  const { data: pageList, isFetching }: any = useQuery(
    ["getListPages"],
    async () => {
      return await Page.getListSavedPage();
    },
    { initialData: [] }
  );

  return (
    <Spin spinning={isFetching}>
      <div className="px-4">
        <h3 className="mt-0 mb-4 text-light">Saved pages</h3>
        <div className="p-6 grid flex justify-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-4">
          {pageList?.map((page: PageInterface) => (
            <PagePreview
              id={page.id}
              name={page.name}
              modifiedAt={page.modifiedAt}
              previewImage={page.previewImage}
            />
          ))}
        </div>
      </div>
    </Spin>
  );
}

export default SavedPage;
