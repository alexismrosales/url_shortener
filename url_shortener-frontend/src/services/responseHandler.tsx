import { createSURL, checkBackHalf } from "./api";
export const handleCreateSURL = (setShortUrl: any, URLItem: any, back_half: string, needsQR: boolean) => {
  createSURL(URLItem, back_half, needsQR).then(response => {
    console.log("SURL created succesfully");
    setShortUrl(response.data);
  }).catch(error => {
    console.error("Error creating SURL : ", error);
  });
}
export const handleCheckCustomBackHalf = (back_half: string, setCheck: any) => {
  checkBackHalf(back_half).then(response => {
    console.log("Checking succesfully");
    setCheck(response.data);
  }).catch(error => {
    console.error("Error checking back half: ", error);
  })
}
