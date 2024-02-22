import { BlogContext } from "context/BlogContext";
import React, { useContext } from "react";

const PaginationBox = ({ index }: { index: number }) => {
  const { state, dispatch } = useContext(BlogContext);
  const handleClick = () => {
    console.log("index", index);
    dispatch({ type: "SET_ACTUAL_PAGE_INDEX", payload: index });
  };
  return index === state.actualPageIndex ? (
    <div className="flex bg-[#F9F5FF] items-center justify-center w-[40px] h-[40px] rounded-sm">
      <button className="border-none bg-transparent text-[#7F56D9]">
        {index}
      </button>
    </div>
  ) : (
    <div
      className="flex items-center justify-center w-[40px] h-[40px] rounded-sm"
      onClick={handleClick}
    >
      <button className="border-none bg-transparent text-[#667085]">
        {index}
      </button>
    </div>
  );
};

export default PaginationBox;
