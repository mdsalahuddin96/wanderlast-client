export const getFeturedDes = async () => {
  const res = await fetch("http://localhost:8000/featuredDes");
  const featuredDes = await res.json();
  return featuredDes;
};

export const getAllDestination=async()=>{
  const res=await fetch("http://localhost:8000/allDestination");
  const allDestination=await res.json()
  return allDestination;
}