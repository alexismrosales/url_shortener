import { useState } from "react";
import { createSURL, checkBackHalf } from "./api";
export const handleCreateSURL = async (setShortUrl: any, URLItem: any, back_half: string, needsQR: boolean) => {
  try {
    const response = await createSURL(URLItem, back_half, needsQR);
    setShortUrl(response.data)
  } catch (error) {
    console.error("Error checking back half: ", error);
    throw error;
  }
}
export const handleCheckCustomBackHalf = async (back_half: string) => {
  try {
    const response = await checkBackHalf(back_half);
    console.log("Checking successfully");
    return response;
  } catch (error) {
    console.log(back_half, "...");
    console.error("Error checking back half: ", error);
    throw error;
  }
}
