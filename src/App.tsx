import "./App.css";

export default function App() {
  return (
    <div className=" bg-gray-300 h-screen">
      <div className="flex flex-col h-screen items-center ">
        <h1 className="bg-[url('https://cdn.pixabay.com/photo/2023/10/31/16/38/ai-generated-8355516_640.png')] bg-cover bg-center w-60 h-20 font-bold text-3xl p-1 rounded-t-md ml-6">
          Pikachu
        </h1>
        <p className="w-60 p-4 mt-6 bg-white">
          Pikachu is an Electric-type Pokémon known for its yellow fur and
          lightning bolt-shaped tail. It has red circular pouches on its cheeks
          that store electricity. Pikachu's ears are long and come to a point,
          enhancing its cute appearance.
        </p>
        <div className="bg-gray-500 w-60">
          <button className="flex justify-center gap-2 mt-6 bg-red-700 p-3 rounded-lg text-white font-bold">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
