const DonationCard = ({ donation }) => {
  const {
    id,
    title,
    image,
    category,
    category_bg,
    card_bg,
    description,
    price,
    text,
    text_button_bg,
  } = donation;

  return (
    <div>
      <div>
        <div
          className=" w-[430px] border-2  mt-12 ml-6 rounded-2xl"
          style={{ background: card_bg }}
        >
          <figure>
            <img className="w-full bg-cover" src={image} />
          </figure>
          <div className="card-body">
            <h2
              className="w-28 font-black text-lg p-2 rounded-lg text-center"
              style={{ background: card_bg, color: text }}
            >
              {category}
            </h2>
            <h2
              className=" font-bold text-2xl p-2 rounded-lg mt-2 "
              style={{ color: text }}
            >
              {title}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationCard;
