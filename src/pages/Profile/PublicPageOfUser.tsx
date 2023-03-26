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
function PublicPageOfUser({ name, id }: any) {
  const { data: pageList }: any = useQuery(
    ["getListPublicPageOfUser", id],
    async () => {
      return await Page.getListPublicPageOfUser(id);
    },
    { initialData: [] }
  );
  return (
    <div className="px-4">
      <h2 className="mt-0 mb-4 text-light">Public pages of {name}</h2>
      <div className="grid flex justify-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-4">
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
  );
}

export default PublicPageOfUser;
