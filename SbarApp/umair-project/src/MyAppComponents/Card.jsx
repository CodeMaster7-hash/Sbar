import React from 'react';

function Card() {

    const cardData = [
        {
            title: "Hobbies:",
            description: "{Planting, Gardening, Drawing, & Book Reading}",
            image: "https://via.placeholder.com/300x200",

        },
 
        {
            title: "Sports:",
            description: "{Cricket, Football, Swimming, Tennis, Boxing}",
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
export default Card;