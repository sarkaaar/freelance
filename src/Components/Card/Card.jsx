export default function Card(obj) {
  const { name, desc, image } = obj.obj;
  return (
    <div className=" my-4 shadow-sm bg-slate-100 hover:shadow-2xl w-10/12 sm:w-72 m-auto rounded-lg">
      <img
        src={image}
        className=" h-48 w-full rounded-t-lg overflow-auto"
      />
      <div className="p-3">
        <h3 className="font-bold text-lg text-slate-900 h-10 overflow-y-hidden ">
          {name}
        </h3>
        <p className="text-slate-800 ">
          {desc.slice(0, 70) + "..."}
          <span className="font-bold hover:text-slate-900">
            See More
          </span>
        </p>
      </div>
    </div>
  );
}
