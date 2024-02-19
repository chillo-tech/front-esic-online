import { BlogContext } from "context/BlogContext";
import React, { useContext, useEffect, useMemo, useState } from "react";
import { IoArrowBackOutline, IoArrowForward } from "react-icons/io5";
import PaginationBox from "./PaginationBox";

const Pagination = () => {
  const { state, dispatch } = useContext(BlogContext);

  const paginationBoxCount = useMemo(
    () => Math.ceil(state.articles.length / state.pageArticleLength),
    [state.articles.length, state.pageArticleLength]
  );

  const handleForward = () => {
    if (state.actualPageIndex >= paginationBoxCount) return;
    dispatch({
      type: "SET_ACTUAL_PAGE_INDEX",
      payload: state.actualPageIndex + 1,
    });
  };

  const handleBack = () => {
    if (state.actualPageIndex <= 1) return;
    dispatch({
      type: "SET_ACTUAL_PAGE_INDEX",
      payload: state.actualPageIndex - 1,
    });
  };
  return (
    <div className="flex items-center justify-between">
      {state.actualPageIndex > 1 ? (
        <button
          className="text-[#667085] flex items-center justify-start gap-4"
          onClick={handleBack}
        >
          <IoArrowBackOutline /> Précédent
        </button>
      ) : (
        <button className="text-[#667085] flex items-center justify-start gap-4 opacity-0 invisible">
          <IoArrowBackOutline /> Précédent
        </button>
      )}
      <div className="flex gap-4 items-center justify-center">
        {Array(paginationBoxCount)
          .fill(0)
          .map((el, index) => {
            return <PaginationBox index={index + 1} key={index} />;
          })}
      </div>
      {state.actualPageIndex < paginationBoxCount ? (
        <button
          className="text-[#667085] flex gap-4 items-center justify-end"
          onClick={handleForward}
        >
          Suivant <IoArrowForward />
        </button>
      ) : (
        <button className="text-[#667085] flex gap-4 items-center justify-end opacity-0 invisible">
          Suivant <IoArrowForward />
        </button>
      )}
    </div>
  );
};

export default Pagination;
