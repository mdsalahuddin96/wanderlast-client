export const getFeturedDes = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/featuredDes`);
  const featuredDes = await res.json();
  return featuredDes;
};

export const getAllDestination= async()=>{
  const res= await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/destination`);
  const allDestination=await res.json()
  return allDestination;
}

export const getDestinationById=async(id,token)=>{
  const res=await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/destinationDetails/${id}`,{
    headers:{
      authorization:`Bearer ${token}`
    }
  })
  const destination=await res.json()
  return destination;
}

export const getBookingsByUserId=async(id,token)=>{
  const res=await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/mybookings/${id}`,{
    headers:{
      authorization:`Bearer ${token}`
    }
  })
  const bookings=await res.json()
  return bookings;
}