import React from 'react';
function Logo() {
  const cardData = [
    {
      title: "Hobbies",
      description: "Planting, Gardening, Drawing, Book Reading",
      image: "https://via.placeholder.com/300x200",

    },

    {
      title: "Card Two",
      description: "Cricket, Football, Swimming",
      image: "https://via.placeholder.com/300x200",
    },

  ];
    
    

    return (
        <>

    <div className="cdo">

      <div className="cdi">
        {cardData.map((card, index) => (
          <div key={index} className="key">
            {/* <img src={card.image} alt={card.title} className="img" /> */}
            <div className="p-4">
              <h2 className="heading">{card.title}</h2>
              <p className="para">{card.description}</p>
            </div>

          </div>
        ))}
      </div>
    </div>


        </>

    );
}
export default Logo;