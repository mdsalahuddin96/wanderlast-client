export const getFeturedDes = async () => {
  const res = await fetch("http://localhost:8000/featuredDes");
  const featuredDes = await res.json();
  return featuredDes;
};

export const getAllDestination=async()=>{
  const res=await fetch("http://localhost:8000/destination");
  const allDestination=await res.json()
  return allDestination;
}

export const getDestinationById=async(id)=>{
  const res=await fetch(`http://localhost:8000/destinationDetails/${id}`)
  const destination=await res.json()
  return destination;
}
