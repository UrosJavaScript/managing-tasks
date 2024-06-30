import React from "react";
import ReactPaginate from "react-paginate";
import { PaginationComponentProps } from "../../components/pagination/Pagination.types";

const PaginationComponent: React.FC<PaginationComponentProps> = ({
  pageCount,
  pageRangeDisplayed,
  marginPagesDisplayed,
  onPageChange,
}) => {
  return (
    <ReactPaginate
      pageCount={pageCount}
      pageRangeDisplayed={pageRangeDisplayed}
      marginPagesDisplayed={marginPagesDisplayed}
      onPageChange={onPageChange}
      containerClassName="flex justify-center my-4"
      pageClassName="mx-1 px-4 py-[12px] border border-secondaryLightGray rounded-lg text-neutralText font-semibold text-sm"
      activeClassName="bg-primaryBlue text-white border-none"
      previousLinkClassName="hidden"
      nextLinkClassName="hidden"
    />
  );
};

export default PaginationComponent;
