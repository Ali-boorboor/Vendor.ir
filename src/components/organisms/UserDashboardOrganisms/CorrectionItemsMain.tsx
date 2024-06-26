import { memo } from "react";

const CorrectionItemsMain = memo(() => {
  return (
    <main className="max-w-signup-container m-auto mt-4">
      <section className="">
        <h3 className="bg-[#7db9e8] p-3 text-black font-bold text-base rounded-t-xl rounded-tl-xl text-center lg:text-right">
          اطلاعات متقاضی
        </h3>
        <section className="flex lg:justify-between items-center gap-4 border drop-shadow-md border-zinc-100 shadow-md p-4 mb-14 flex-wrap justify-center">
          <h4 className=" text-base font-medium text-nowrap flex items-center gap-1">
            <span className="text-orange-500">نام شرکت:</span>
            نفت آزمایان ژرف اندیش
          </h4>
          <h4 className=" text-base font-medium text-nowrap flex items-center gap-1">
            <span className="text-orange-500">شناسه / کد ملی:</span>
            ۱۴۰۰۸۸۴۶۵۲۷
          </h4>
          <h4 className=" text-base font-medium text-nowrap flex items-center gap-1">
            <span className="text-orange-500">موبايل:</span>
            09123868799
          </h4>
        </section>
      </section>
      <section className="border drop-shadow-md border-zinc-100 shadow-md rounded-t-xl pb-4">
        <h4 className="bg-[#7db9e8] p-3 text-black font-bold text-base rounded-t-xl rounded-tl-xl text-center lg:text-right mb-4">
          موارد اصلاحی
        </h4>
        <p className="text-black font-bold text-lg bg-red-500 text-center p-2 rounded-full border border-black shadow-md">
          اطلاعاتی موجود نیست !
        </p>
      </section>
    </main>
  );
});

export default CorrectionItemsMain;
