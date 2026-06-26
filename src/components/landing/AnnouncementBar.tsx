/** Top announcement strip — the first physical-unlock nod. Links to #physical. */
export function AnnouncementBar() {
  return (
    <a
      href="#physical"
      className="gradient-brand block text-white no-underline"
    >
      <div className="mx-auto flex max-w-[1180px] items-center justify-center gap-2.5 px-8 py-2.5 font-body text-[13.5px] font-semibold">
        <span className="inline-flex h-[7px] w-[7px] rounded-full bg-yellow shadow-[0_0_8px_rgba(255,219,76,0.9)]" />
        <span>
          New — end a focus session only with a tap. Meet{" "}
          <span className="font-bold text-yellow">physical unlock</span>
        </span>
        <span className="text-[15px]">→</span>
      </div>
    </a>
  );
}
