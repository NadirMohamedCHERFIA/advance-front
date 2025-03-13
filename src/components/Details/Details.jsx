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
import sampleData from '../../assets/data/dataSample.json';
import DownloadBtn from '../Buttons/DownloadBtn';
import RefreshBtn from '../Buttons/RefreshBtn';
import DebouncedInput from '../inputs/DebouncedInput';
import StatusPieChart from './StatusPieChart';
import StatusBarChart from './StatusBarChart'; // Ensure the correct import path
import { FaSortAmountDown, FaSortAmountUp, FaCheck } from "react-icons/fa";
import { TbTaxEuro } from "react-icons/tb";
import { RiAlertLine } from "react-icons/ri";

const Details = () => {
  const columnHelper = createColumnHelper();

  const columns = [
    columnHelper.accessor('Id', {
      header: 'ID',
      cell: info => info.getValue(),
      filterFn: 'includesString',
    }),
    columnHelper.accessor('Sorte', {
      header: 'Sorte',
      cell: info => info.getValue(),
      filterFn: 'includesString',
    }),
    columnHelper.accessor('PartNumber', {
      header: 'Part Number',
      cell: info => info.getValue(),
      filterFn: 'includesString',
    }),
    columnHelper.accessor('Client', {
      header: 'Client',
      cell: info => info.getValue(),
      filterFn: 'includesString',
    }),
    columnHelper.accessor('Contract', {
      header: 'Contract',
      cell: info => info.getValue(),
      filterFn: 'includesString',
    }),
    columnHelper.accessor('Status', {
      header: 'Status',
      cell: info => {
        const value = info.getValue();
        let conditionalClass = "";
        let conditionalIcon = null;
        let displayValue = "";

        if (value === "True") {
          conditionalClass = "table-success";
          conditionalIcon = <TbTaxEuro className="me-1" />;
          displayValue = "Facturable";
        } else if (value === "False") {
          conditionalClass = "table-secondary";
          conditionalIcon = <FaCheck className="me-1" />;
          displayValue = "Not facturable";
        } else if (value === "None") {
          conditionalClass = "table-warning";
          conditionalIcon = <RiAlertLine className="me-1" />;
          displayValue = "To be verified";
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

        if (value === "True") {
          displayValue = "Facturable";
        } else if (value === "False") {
          displayValue = "Not facturable";
        } else if (value === "None") {
          displayValue = "To be verified";
        }

        return displayValue.toLowerCase().includes(filterValue.toLowerCase());
      },
    }),
  ];

  const [data] = useState(() => [...sampleData]);
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
        <div className="container text-light fs-1 fw-bold text-center " style={{marginTop:"110px"}}>Shop Visits X Contracts</div>
          <div className='container my-5 d-flex flex-column flex-md-row gap-5 justify-content-center align-items-center glass-effect'
                // style={{width:'80%'}}
            >
                <div className="w-50 d-flex justify-content-center align-items-center">
                  <StatusPieChart data={table.getFilteredRowModel().rows.map(row => row.original)} />
                </div>
                <div className="w-50 d-flex justify-content-center align-items-center pt-5 ">
                  <StatusBarChart data={table.getFilteredRowModel().rows.map(row => row.original)} />
                </div>
            </div>
        <div className=" d-flex flex-column align-items-center" style={{width:"100vw"}}>
        <div className='' style={{width:"80%"}}>
            <div className="container d-flex justify-content-end gap-2 mb-2">
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

export default Details;