import React, { useState } from 'react';
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';
// import sampleData from '../../assets/data/dataSample.json';
import historySampleData from '../../assets/data/historySample.json'
import DownloadBtn from '../Buttons/DownloadBtn';
import RefreshBtn from '../Buttons/RefreshBtn';
import DebouncedInput from '../inputs/DebouncedInput';
// import StatusPieChart from './StatusPieChart';
// import StatusBarChart from './StatusBarChart'; // Ensure the correct import path
import { FaSortAmountDown, FaSortAmountUp, FaCheck } from "react-icons/fa";
import { TbTaxEuro } from "react-icons/tb";
import { RiAlertLine } from "react-icons/ri";

const History = () => {
  const columnHelper = createColumnHelper();

  const columns = [
    columnHelper.accessor('id', {
      header: 'ADVance-ing ID',
      cell: info => info.getValue(),
      filterFn: 'includesString',
    }),
    columnHelper.accessor('ContractId', {
      header: 'Contract Id',
      cell: info => info.getValue(),
      filterFn: 'includesString',
    }),
    columnHelper.accessor('SB', {
      header: 'Service bulletin',
      cell: info => info.getValue(),
      filterFn: 'includesString',
    }),
    columnHelper.accessor('by', {
      header: 'By',
      cell: info => info.getValue(),
      filterFn: 'includesString',
    }),
    columnHelper.accessor('At', {
      header: 'At',
      cell: info => info.getValue(),
      filterFn: 'includesString',
    }),
    columnHelper.accessor('comment', {
      header: 'Comment',
      cell: info => info.getValue(),
      filterFn: 'includesString',
    }),
    columnHelper.accessor('Valid', {
      header: 'Valid',
    //   cell:info=> info.getValue(),
      cell: info => {
        const value = info.getValue();
        let conditionalClass = "";
        let conditionalIcon = null;
        let displayValue = "";

        if (value === true) {
          conditionalClass = "table-success bg-success fw-bold text-light";
          conditionalIcon = <TbTaxEuro className="me-1" />;
          displayValue = "Valid";
        } else if (value === false) {
          conditionalClass = "table-danger fw-bold bg-danger text-light";
          conditionalIcon = <FaCheck className="me-1" />;
          displayValue = "Not Valid";
        } 

        return (
          <span className={conditionalClass}>
            {conditionalIcon}
            {displayValue}
          </span>
        );
      },
      filterFn: (row, columnId, filterValue) => {
        const value = row.getValue(columnId);
        let displayValue = "";

        if (value === true) {
          displayValue = "Valid";
        } else if (value === false) {
          displayValue = "Not valid";
        }

        return displayValue.toLowerCase().includes(filterValue.toLowerCase());
      },
    }),
  ];

  const [data] = useState(() => [...historySampleData]);
  const [globalFilter, setGlobalFilter] = useState('');

  const table = useReactTable({
    data,
    columns,
    state: {
      globalFilter,
    },
    getFilteredRowModel: getFilteredRowModel(),
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onGlobalFilterChange: setGlobalFilter,
  });

  return (
    <>
        <div className="container text-light fs-1 fw-bold text-center " style={{marginTop:"110px"}}>ADVance-ing history</div>
        <div className="d-flex justify-content-center  mt-4 d-flex flex-row" style={{width:"100vw"}}>
        <div className='' style={{width:"",marginLeft:''}}>
            <div className=" d-flex justify-content-end gap-2 mb-2">
                <DownloadBtn data={data} fileName={"peoples"} className='w-100' />
                <RefreshBtn data={data} fileName={"peoples"} className='w-100' />
            </div>
            <div className="flex-grow-1">
                <DebouncedInput
                value={globalFilter ?? ''}
                onChange={value => setGlobalFilter(String(value))}
                className="form-control"
                placeholder="Search all columns..."
                />
            </div>
            <table className="table table-dark table-striped table-bordered mt-2">
                <thead className="thead-dark">
                {table.getHeaderGroups().map(headerGroup => (
                    <tr key={headerGroup.id}>
                    {headerGroup.headers.map(header => (
                        <th key={header.id} className="capitalize">
                        {header.isPlaceholder ? null : (
                            <div>
                            <div
                                {...{
                                className: header.column.getCanSort()
                                    ? 'cursor-pointer select-none'
                                    : '',
                                onClick: header.column.getToggleSortingHandler(),
                                }}
                            >
                                {flexRender(
                                header.column.columnDef.header,
                                header.getContext()
                                )}
                                <span className="ms-2">
                                {header.column.getIsSorted() === 'asc' ? (
                                    <FaSortAmountUp />
                                ) : header.column.getIsSorted() === 'desc' ? (
                                    <FaSortAmountDown />
                                ) : (
                                    <>
                                    <FaSortAmountUp className="text-muted" />
                                    <FaSortAmountDown className="text-muted" />
                                    </>
                                )}
                                </span>
                            </div>
                            <div>
                                {header.column.getCanFilter() ? (
                                <DebouncedInput
                                    value={header.column.getFilterValue() ?? ''}
                                    onChange={value =>
                                    header.column.setFilterValue(String(value))
                                    }
                                    className="form-control mt-2"
                                    placeholder={`Search ${header.column.columnDef.header}...`}
                                />
                                ) : null}
                            </div>
                            </div>
                        )}
                        </th>
                    ))}
                    </tr>
                ))}
                </thead>
                <tbody>
                {table.getRowModel().rows.length ? (
                    table.getRowModel().rows.map((row, i) => (
                    <tr key={row.id} className={row.original.Status === "True" ? "table-success" : row.original.Status === "False" ? "table-secondary" : row.original.Status === "None" ? "table-warning" : ""}>
                        {row.getVisibleCells().map(cell => (
                        <td key={cell.id}>
                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                        </td>
                        ))}
                    </tr>
                    ))
                ) : (
                    <tr className="text-center">
                    <td colSpan={12}>No Record Found!</td>
                    </tr>
                )}
                </tbody>
            </table>

            <div className="d-flex justify-content-end mt-2 gap-2">
                <button
                onClick={() => table.previousPage()}
                disabled={!table.getCanPreviousPage()}
                className="btn btn-secondary"
                >
                {'<'}
                </button>
                <button
                onClick={() => table.nextPage()}
                disabled={!table.getCanNextPage()}
                className="btn btn-secondary"
                >
                {'>'}
                </button>

                <span className="d-flex align-items-center gap-1 text-light">
                <div>Page</div>
                <strong>
                    {table.getState().pagination.pageIndex + 1} of{' '}
                    {table.getPageCount()}
                </strong>
                </span>
                <span className="d-flex align-items-center gap-1 text-light">
                | Go to page:
                <input
                    type="number"
                    defaultValue={table.getState().pagination.pageIndex + 1}
                    onChange={e => {
                    const page = e.target.value ? Number(e.target.value) - 1 : 0;
                    table.setPageIndex(page);
                    }}
                    className="form-control w-auto"
                />
                </span>
                <select
                value={table.getState().pagination.pageSize}
                onChange={e => {
                    table.setPageSize(Number(e.target.value));
                }}
                className="form-select w-auto"
                >
                {[10, 20, 30, 50].map(pageSize => (
                    <option key={pageSize} value={pageSize}>
                    Show {pageSize}
                    </option>
                ))}
                </select>
            </div>
            </div>
            </div>
        </>
    );
};

export default History;