const Cards = () => {
  return (
    <>
      <div className=" mt-10 max-w-3xl mx-auto px-3 grid grid-cols-2 gap-5 md:grid-cols-3">
        <div className="card bg-base-100 shadow-xl rounded-md">
          <figure>
            <img src="https://i.postimg.cc/JnfcjLZR/sepatu-1.jpg" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
