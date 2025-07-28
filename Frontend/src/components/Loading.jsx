import React from "react";

function MessageLoading() {
  return (
    <div className="mt-28 flex flex-col items-center justify-center">
      <div className="flex w-3/5 flex-col gap-5">
        <div className="flex items-center gap-4">
          <div className="w-full flex flex-col gap-4">
            <div className="skeleton h-5 w-80 bg-slate-700"></div>
            <div className="skeleton h-5 w-96 bg-slate-700"></div>
            <div className="self-end skeleton h-5 w-80 bg-slate-700"></div>
            <div className="skeleton h-5 w-80 bg-slate-700"></div>
            <div className="self-end skeleton h-5 w-96 bg-slate-700"></div>
          </div>
        </div>
        <div className="skeleton h-36 w-full bg-slate-700"></div>
      </div>
    </div>
  );
}

function UserLoading() {
  return (
    <>
      {Array.from({ length: 8 }).map((_, index) => (
        <div className="flex space-x-4 px-8 py-3 flex-col gap-4 ">
          <div className="flex items-center gap-4">
            <div className="skeleton h-12 w-12 shrink-0 rounded-full bg-slate-700"></div>
            <div className="flex flex-col gap-4">
              <div className="skeleton h-4 w-20 bg-slate-700"></div>
              <div className="skeleton h-4 w-36 bg-slate-700"></div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export { MessageLoading, UserLoading };
