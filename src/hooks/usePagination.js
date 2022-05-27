import { useMemo } from 'react';


export const usePagination = (totalPages) => (
  useMemo(() => (
    Array(totalPages).fill(0).map((elem, i) => i + 1)
  ), [totalPages])
);
