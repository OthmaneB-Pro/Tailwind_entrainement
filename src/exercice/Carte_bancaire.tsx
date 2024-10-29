export default function Carte_bancaire() {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-[url('https://i.imgur.com/1O8ovx1.jpeg')] bg-cover ">
    <div className="h-64 w-[26rem] rounded-3xl border-2 border-white/80 bg-gradient-to-br from-white/30 to-white/30 p-8 text-white shadow-lg ">
      <div className="flex justify-between">
        <h2 className="font-bold text-2xl">Mastercard</h2>
        <img className="w-8" src="https://i.imgur.com/eLwgPd2.png" alt="" />
      </div>

      <div className="flex justify-between mt-20 font-mono">
        <div className="mt-6">
          <div className="flex gap-6">
            <p className="uppercase">Ruchi DWIVEDI</p>
            <p>8/24</p>
          </div>

          <div> 
            <p className="font-bold text-lg">1234 1234 1234 1234</p>
          </div>
        </div>

        <img className="w-16 mt-8 bg-gradient-to-br from-white/30 to-white/30 p-2 rounded-md" src="https://i.imgur.com/GaIY1JU.png" alt="" />
      </div>
    </div>
  </div>
  )
}
