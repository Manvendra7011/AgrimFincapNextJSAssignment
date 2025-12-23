export default function HeaderRow() {
  return (
    <div className="flex items-center justify-between">
      <h1 className="text-[14px] font-bold text-black transition-transform duration-200 ease-out
               hover:translate-x-[4px]">Overview</h1>

      <div className="flex items-center gap-1 text-[12px] text-black/60 cursor-pointer">
        Today
        <span className="text-[10px]">▾</span>
      </div>
    </div>
  );
}
