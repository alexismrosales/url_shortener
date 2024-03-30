import { createSURL, checkBackHalf } from "./api";
export const handleCreateSURL = (setShortUrl: any, URLItem: any, back_half: string, needsQR: boolean) => {
  createSURL(URLItem, back_half, needsQR).then(response => {
    console.log("SURL created succesfully");
    setShortUrl(response.data);
  }).catch(error => {
    console.error("Error creating SURL : ", error);
  });
}
export const handleCheckCustomBackHalf = async (back_half: string) => {
  try {
    const response = await checkBackHalf(back_half);
    console.log("Checking successfully");
    return response;
  } catch (error) {
    console.log(back_half, "...");
    console.error("Error checking back half: ", error);
    throw error; // Re-lanzamos el error para que se maneje en el lugar donde se llama a esta función
  }
}
