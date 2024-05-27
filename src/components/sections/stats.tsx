import Counter from '../utils/counter';

export default function stats() {
  return (
    <section className="cont my-20">
      <h3 className="section-title">
        <span>Every</span> <span className="text-emerald-600">Project</span> <span>is a</span>{' '}
        <span className="text-emerald-600">Glory</span> <span>to us</span>
      </h3>

      <div className="mt-10 grid place-items-center rounded-lg bg-gray-800/40 py-4 text-center md:grid-cols-4">
        <div className="my-3 flex w-full flex-col items-center space-y-3 p-4">
          <span className="min-h-12 text-5xl font-bold text-emerald-600">
            <Counter value={10} direction="up" />+
          </span>
          <span className="uppercase tracking-wider text-gray-400">Projects</span>
        </div>

        <div className="my-3 flex w-full flex-col items-center space-y-3 p-4">
          <span className="min-h-12 text-5xl font-bold text-yellow-600">
            <Counter value={8} />
          </span>
          <span className="uppercase tracking-wider text-gray-400">Clients</span>
        </div>

        <div className="my-3 flex w-full flex-col items-center space-y-3 p-4">
          <span className="min-h-12 text-5xl font-bold text-sky-600">
            <Counter value={3} />
          </span>
          <span className="uppercase tracking-wider text-gray-400">Regions</span>
        </div>

        <div className="my-3 flex w-full flex-col items-center space-y-3 p-4">
          <span className="min-h-12 text-5xl font-bold text-fuchsia-600">
            <Counter value={7} />
          </span>
          <span className="uppercase tracking-wider text-gray-400">Team Members</span>
        </div>
      </div>
    </section>
  );
}
