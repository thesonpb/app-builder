import React from "react";
import PagePreview from "../../components/cards/PagePreview";
import { useQuery } from "react-query";
import Page from "../../app/models/Page";

interface PageInterface {
  id: number;
  userId: number;
  name: string;
  json: string;
  modifiedAt: string;
  previewImage: string;
}

function SavedPage() {
  const { data: pageList, refetch }: any = useQuery(
    ["getListPages"],
    async () => {
      return await Page.getListSavedPage();
    },
    { initialData: [] }
  );

  return (
    <div className="px-4">
      <h2 className="mt-0 mb-4 text-light">Saved pages</h2>
      <div className="grid flex justify-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-4">
        {pageList?.map((page: PageInterface) => (
          <PagePreview key={page.id} {...page} refetchList={refetch} />
        ))}
      </div>
    </div>
  );
}

export default SavedPage;
