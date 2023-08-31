import React from 'react';
import serviceCard from '../../data/serviceCardData';


function ServiceCardDetail() {
  const queryPrams = new URLSearchParams(window.location.search);
  const id = queryPrams.get("id");
  const data = serviceCard.filter((object) => {
    return object.id === parseInt(id);
  });
  const object = data[0];

  return (
    <>
      {/* <div>
      {object.item.map((text) => (
        <div key={text.id}>
          <div><p>{object.item.name}</p></div>
          <img src={require(`../../images/${text.service.serviceselectedpic}`)} alt="pic" />
          <p>{text.service.serviceselecteddesc}</p>
        </div>
      ))}
    </div> */}
      {object.item.map((text) => (
        <div key={text.id}>
          <p>{text.name}</p>
   

        </div>

      ))}
    </>
  );
}

export default ServiceCardDetail;
