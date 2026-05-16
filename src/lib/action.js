 'use server'

import { revalidatePath } from "next/cache"

export const revalidedPath=async (pathName)=>{
   await revalidatePath(pathName)   
}