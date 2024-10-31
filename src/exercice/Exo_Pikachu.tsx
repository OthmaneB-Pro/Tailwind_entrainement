export default function Exo_Pikachu() {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-zinc-200">
      <div className="w-full max-w-sm overflow-hidden rounded-lg border border-zinc-300 bg-zinc-50 shadow-xl">
        <div className="flex items-center justify-between px-4 py-1">
          <p className="text-xs font-bold">Chrome</p>
          <div className="flex items-center gap-1">
            <div className="flex size-3 items-center justify-center rounded-full bg-green-500 text-xs text-white"></div>

            <div className="flex size-3 items-center justify-center rounded-full bg-orange-500 text-xs text-white"></div>

            <div className="flex size-3 items-center justify-center rounded-full bg-red-500 text-xs text-white"></div>
          </div>
        </div>
        <header className="bg-[url('https://cdn.pixabay.com/photo/2023/10/31/16/38/ai-generated-8355516_640.png')] bg-cover bg-center">
          <div className="bg-black/30 p-8 text-white backdrop-blur-sm">
            <h2 className="text-2xl font-bold">Pikatchu</h2>
            <div className="flex items-center gap-4">
              <span className="inline-flex items-center rounded-md bg-green-500/40 px-2 font-medium text-green-200">
                44 ⚡️
              </span>
              <span className="inline-flex items-center rounded-md bg-red-500/40 px-2 font-medium text-red-200">
                100 ❤️
              </span>
            </div>
          </div>
        </header>
        <main className="p-8">
          <p className="text-sm/6">
            Pikachu is an Electric-type Pokémon known for its yellow fur and
            lightning bolt-shaped tail. It has red circular pouches on its
            cheeks that store electricity. Pikachu's ears are long and come to a
            point, enhancing its cute appearance.
          </p>
        </main>

        <footer className="flex justify-end border-t bg-zinc-100 px-8 py-4">
          <button className="relative isolate inline-flex items-center justify-center gap-x-2 rounded-lg border bg-red-700 p-2.5 text-base/6 font-semibold text-zinc-100">
            Delete
          </button>
        </footer>
      </div>
    </div>
  )
}
