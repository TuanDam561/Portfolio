const TitleHome = () => {
  return (
    <div className="absolute top-3/12 left-40 z-10 text-white">
      <p className="text-9xl font-bold mb-3 text-left">Hello</p>
      <div className="text-left text-5xl font-semibold leading-snug">
        <p>I'm Dam Xuan Tuan,</p>
        <p>Developer, Designer</p>
        <p>and Artist Illustrations</p>
      </div>

      <div className="mt-6 flex gap-4">
        <button className="bg-emerald-500  text-white px-4 py-2 rounded-md !font-bold hover:bg-emerald-600">
          Contact me
        </button>
        <button className="text-white font-medium outline hover:underline">
          About me
        </button>
      </div>
    </div>
  );
};

export default TitleHome;
