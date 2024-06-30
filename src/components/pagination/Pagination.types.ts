export interface PaginationComponentProps {
  pageCount: number;
  pageRangeDisplayed: number;
  marginPagesDisplayed: number;
  onPageChange: (selectedPage: { selected: number }) => void;
}
