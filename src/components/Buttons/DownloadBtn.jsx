// import { DownloadIcon } from "../Icons/Icons";
// import * as XLSX from "xlsx/xlsx.mjs";

import { FaSave } from "react-icons/fa";

const DownloadBtn = ({ data = [], fileName }) => {
  return (
    <button
      className="btn btn-outline-primary w-30 d-flex align-items-center justify-items-center gap-2 fs-5"
      onClick={() => {
        // const datas = data?.length ? data : [];
        // const worksheet = XLSX.utils.json_to_sheet(datas);
        // const workbook = XLSX.utils.book_new();
        // XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
        // XLSX.writeFile(workbook, fileName ? `${fileName}.xlsx` : "data.xlsx");
      }}
    >
      {/* <DownloadIcon /> */}
      Export to Excel 
      <span className="pb-1"><FaSave/></span>
    </button>
  );
};

export default DownloadBtn;