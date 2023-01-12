import React from "react";

interface Props {
  type: number;
}

function ComponentList({ type }: Props) {
  //TODO: type de goi api lay danh sach component pho bien Community
  return (
    <div className="text-light">
      {type === 1 && (
        <div className="flex flex-col gap-y-4">
          <div className="flex flex-col gap-y-4">
            <h3>SECTION & COLUMN</h3>
            <div className="w-full rounded-md text-base font-semibold cursor-pointer h-24 flex items-center justify-center bg-lightGray">
              Section
            </div>
            <div className="w-full rounded-md text-base font-semibold cursor-pointer h-24 flex items-center justify-center bg-lightGray">
              Column
            </div>
          </div>
          <div className="flex flex-col gap-y-4">
            <h3>ATOM</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="w-full rounded-md text-base font-semibold cursor-pointer h-24 flex items-center justify-center bg-lightGray">
                Section
              </div>
              <div className="w-full rounded-md text-base font-semibold cursor-pointer h-24 flex items-center justify-center bg-lightGray">
                Column
              </div>
              <div className="w-full rounded-md text-base font-semibold cursor-pointer h-24 flex items-center justify-center bg-lightGray">
                Section
              </div>
              <div className="w-full rounded-md text-base font-semibold cursor-pointer h-24 flex items-center justify-center bg-lightGray">
                Column
              </div>
              <div className="w-full rounded-md text-base font-semibold cursor-pointer h-24 flex items-center justify-center bg-lightGray">
                Section
              </div>
              <div className="w-full rounded-md text-base font-semibold cursor-pointer h-24 flex items-center justify-center bg-lightGray">
                Column
              </div>
              <div className="w-full rounded-md text-base font-semibold cursor-pointer h-24 flex items-center justify-center bg-lightGray">
                Section
              </div>
              <div className="w-full rounded-md text-base font-semibold cursor-pointer h-24 flex items-center justify-center bg-lightGray">
                Column
              </div>
              <div className="w-full rounded-md text-base font-semibold cursor-pointer h-24 flex items-center justify-center bg-lightGray">
                Section
              </div>
              <div className="w-full rounded-md text-base font-semibold cursor-pointer h-24 flex items-center justify-center bg-lightGray">
                Column
              </div>
              <div className="w-full rounded-md text-base font-semibold cursor-pointer h-24 flex items-center justify-center bg-lightGray">
                Section
              </div>
              <div className="w-full rounded-md text-base font-semibold cursor-pointer h-24 flex items-center justify-center bg-lightGray">
                Column
              </div>
              <div className="w-full rounded-md text-base font-semibold cursor-pointer h-24 flex items-center justify-center bg-lightGray">
                Section
              </div>
              <div className="w-full rounded-md text-base font-semibold cursor-pointer h-24 flex items-center justify-center bg-lightGray">
                Column
              </div>
              <div className="w-full rounded-md text-base font-semibold cursor-pointer h-24 flex items-center justify-center bg-lightGray">
                Section
              </div>
              <div className="w-full rounded-md text-base font-semibold cursor-pointer h-24 flex items-center justify-center bg-lightGray">
                Column
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ComponentList;
