"use client";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="container flex flex-col items-center justify-center gap-5 px-4 py-16 ">
        <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">
          Tauri Boilerplate
        </h1>
        <h1 className="text-5xl font-semibold tracking-tight sm:text-3xl">
          <span className="text-[#149eca]">Tauri</span> +{" "}
          <span className="text-[#ff6f61]">Next</span> +{" "}
          <span className="text-[#d1a74d]">Shadcn</span>
          <div></div>
        </h1>
      </div>
    </main>
  );
}
