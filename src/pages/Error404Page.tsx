import { memo } from "react";

// ! error 404 page (page not found)
const Error404Page = memo(() => {
  document.title = "صفحه مد نظر یافت نشد";

  return (
    <main className="w-screen h-screen bg-[url('/images/jpg/error404-image.jpg')] bg-no-repeat bg-center bg-cover relative z-20 after:bg-gradient-to-r after:from-color-pink-700 after:to-color-blue-600 after:absolute after:inset-0 after:z-10"></main>
  );
});

export default Error404Page;
