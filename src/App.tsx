import "./App.css";

export default function App() {
  return (
    <div className=" bg-gray-300 h-screen">
      <div className="flex flex-col h-screen items-center ">
        <h1 className="bg-[url('https://cdn.pixabay.com/photo/2023/10/31/16/38/ai-generated-8355516_640.png')] w-60 font-bold text-3xl p-1 rounded-md ml-6">
          Pikachu
        </h1>
        <p className="w-60 p-4 mt-6 bg-white">
          Pikachu is an Electric-type Pokémon known for its yellow fur and
          lightning bolt-shaped tail. It has red circular pouches on its cheeks
          that store electricity. Pikachu's ears are long and come to a point,
          enhancing its cute appearance.
        </p>
        <button className="bg-red-700 p-3 rounded-lg text-white font-bold">
          Delete
        </button>
      </div>
    </div>
  );
}
