import React, { useState } from "react";

import { handleCreateSURL, handleCheckCustomBackHalf } from "../../services/responseHandler";

import style from "./styles.module.css"

const ShortURLContainer = () => {
  const [url, setUrl] = useState("")
  const [backHalf, setBackhalf] = useState("")
  const [sURLItem, setSURLItem] = useState({
    shortURL: ""
  });
  const [check, setCheck] = useState(null);
  // Submit data to the server
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const URLItem = {
      originalURL: url,
      shortURL: "",
      clicks: 0
    };
    handleCreateSURL(setSURLItem, URLItem, "foo", false);
  };
  const handleCheckBackhalf = () => handleCheckCustomBackHalf(backHalf, setCheck);
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
            <div className={style.extraOptions}>
              <p >If you want a custom URL check before if it exist.</p>
              <input className={style.secondaryInput}
                value={backHalf}
                onChange={(event) => setBackhalf(event.target.value)}
                type="url"
                placeholder="Paste your custom link here"
              />
              <button onClick={handleCheckBackhalf} className={style.checkBackHalf}>Check</button>
              <span>
                {check ? (<>El url ya existe</>)
                  :
                  (<>El url es valido </>)
                }
              </span>
              <br />
              <button className={style.secondaryButton}>More options</button>
            </div>
            <div>
              <br />
              <p> {sURLItem && sURLItem.shortURL ? (
                <> Your short URL is: <br /> <span className="text-xl"> localhost:8080/{sURLItem.shortURL} </span> </>
              ) : (
                <span> Generating short URL </span>
              )}
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};


export default ShortURLContainer;
