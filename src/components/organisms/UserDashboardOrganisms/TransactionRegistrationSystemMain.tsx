import TelegramIcon from "@mui/icons-material/Telegram";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { memo } from "react";

// ! the Transaction Registration System Main section (لیست استعلام) (/user-transactions)
const TransactionRegistrationSystemMain = memo(() => {
  return (
    <main className="max-w-signup-container m-auto">
      <section className="flex lg:justify-between items-center gap-4 border drop-shadow-md border-zinc-100 shadow-md p-4 mb-14 flex-wrap justify-center">
        <h3 className=" text-base font-medium text-nowrap flex items-center gap-1">
          <span className="text-orange-500">نام شرکت:</span>
          نفت آزمایان ژرف اندیش
        </h3>
        <h4 className=" text-base font-medium text-nowrap flex items-center gap-1">
          <span className="text-orange-500">شناسه / کد ملی:</span>
          ۱۴۰۰۸۸۴۶۵۲۷
        </h4>
      </section>
      <section className="shadow-md border border-zinc-100 rounded-t-xl drop-shadow-md">
        <h5 className="bg-[#7db9e8] p-3 text-black font-bold text-lg rounded-t-xl rounded-tl-xl text-center lg:text-right">
          لیست تقاضاهای فعال
        </h5>
        <section className="flex justify-around items-center gap-8 flex-wrap lg:p-3 px-12 py-4">
          <p className="relative text-sm lg:text-base text-black font-medium">
            <span className="absolute rounded-full -right-9 top-1/2 -translate-y-1/2 w-7 h-7 bg-sky-500 border border-black"></span>
            در حال پایان/پایان زمان اعلام آمادگی
          </p>
          <p className="relative text-sm lg:text-base text-black font-medium">
            <span className="absolute rounded-full -right-9 top-1/2 -translate-y-1/2 w-7 h-7 bg-red-500 border border-black"></span>
            در حال پایان/پایان مهلت پیشتهاد فنی
          </p>
          <p className="relative text-sm lg:text-base text-black font-medium">
            <span className="absolute rounded-full -right-9 top-1/2 -translate-y-1/2 w-7 h-7 bg-sky-900 border border-black"></span>
            پایان معامله
          </p>
        </section>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell
                  align="center"
                  sx={{ fontSize: "1rem", fontWeight: "600", color: "#000" }}
                >
                  ردیف
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ fontSize: "1rem", fontWeight: "600", color: "#000" }}
                >
                  عنوان استعلام
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ fontSize: "1rem", fontWeight: "600", color: "#000" }}
                >
                  کد استعلام
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ fontSize: "1rem", fontWeight: "600", color: "#000" }}
                >
                  مهلت اعلام آمادگی
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ fontSize: "1rem", fontWeight: "600", color: "#000" }}
                >
                  مهلت ارائه پیشنهاد فنی
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ fontSize: "1rem", fontWeight: "600", color: "#000" }}
                >
                  وضعيت تقاضا
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ fontSize: "1rem", fontWeight: "600", color: "#000" }}
                >
                  وضعیت شرکت
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ fontSize: "1rem", fontWeight: "600", color: "#000" }}
                >
                  مشاهده
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ fontSize: "1rem", fontWeight: "600", color: "#000" }}
                >
                  پرسش و پاسخ
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                className="bg-red-500"
              >
                <TableCell
                  align="center"
                  sx={{ fontSize: "1rem", fontWeight: "500", color: "#000" }}
                >
                  1
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ fontSize: "1rem", fontWeight: "500", color: "#000" }}
                >
                  NAVIGATION EQUIPMENT
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ fontSize: "1rem", fontWeight: "500", color: "#000" }}
                >
                  HND400260237
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ fontSize: "1rem", fontWeight: "500", color: "#000" }}
                >
                  1404-06-05
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ fontSize: "1rem", fontWeight: "500", color: "#000" }}
                >
                  1404-07-09
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ fontSize: "1rem", fontWeight: "500", color: "#000" }}
                >
                  در جریان
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ fontSize: "1rem", fontWeight: "500", color: "#000" }}
                >
                  مشاهده استعلام آپلود مستندات فنی
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ fontSize: "1rem", fontWeight: "500", color: "#000" }}
                >
                  <button className="text-base text-white bg-teal-500 py-2 px-3 font-bold rounded-md border border-black hover:text-black hover:scale-105">
                    نمایش
                  </button>
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ fontSize: "1rem", fontWeight: "500", color: "#000" }}
                >
                  <button className="text-base flex items-center text-white bg-sky-500 py-2 px-3 font-bold rounded-md border border-black hover:text-black hover:scale-105">
                    <TelegramIcon className="" />0
                  </button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </section>
    </main>
  );
});

export default TransactionRegistrationSystemMain;
