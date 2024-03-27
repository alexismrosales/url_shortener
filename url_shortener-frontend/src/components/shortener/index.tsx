import { mkdir } from "fs/promises";
import React, { useState } from "react";

import { createSURL, checkBackHalf } from "../../api/fetchData";

import style from "./styles.module.css"

const ShortURLContainer = () => {
  const [url, setUrl] = useState("")
  const [backHalf, setBackhalf] = useState("")
  const [shortUrl, setShortUrl] = useState("");
  // Submit data to the server
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const URLItem = {
      originalURL: url,
      shortURL: "",
      clicks: 0
    };
    createShortUrl(URLItem, backHalf, false);
  };
  return (
    <div className="flex justify-center">
      <div className={style.container}>
        <form onSubmit={handleSubmit}>
          <div className="p-10">
            <label className={style.subtext}>To short your link paste it below: </label>
            <br /> <br />
            <div className="flex justify-center flex-col md:flex-row">
              <input className={style.mainInput}
                value={url}
                onChange={(event) => setUrl(event.target.value)}
                type="url"
                placeholder="Paste your link here" />
              <br />
              <button type="submit" className={style.mainButton}>SHORT</button>
            </div>
            <div>
              <p>Your short URL is: </p>
              <p></p>
            </div>
            <button>More options</button>
          </div>
        </form>
      </div>
    </div>
  );
};

const createShortUrl = (URLItem: any, back_half: string, needsQR: boolean) => {
  createSURL(URLItem, back_half, needsQR).then(response => {
    console.log("SURL created succesfully");
  }).catch(error => {
    console.log("Error creating SURL")
  });
}
export default ShortURLContainer;
