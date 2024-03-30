import React, { useEffect, useState } from "react";
import classNames from "classnames";

import { handleCreateSURL, handleCheckCustomBackHalf } from "../../services/responseHandler";

import style from "./styles.module.css"

const ShortURLContainer = () => {
  const [url, setUrl] = useState("")
  const [backHalf, setBackhalf] = useState("")
  const [sURLItem, setSURLItem] = useState({
    shortURL: ""
  });
  const [check, setCheck] = useState(false);

  // Load data from response handler
  const handleCheckBackhalf = async (backhalf: string) => {
    const response = await handleCheckCustomBackHalf(backhalf);
    setCheck(response.data);
    //console.log("Valor de check después de handleCheckBackhalf:", check);
    const checkBackHalf = document.getElementById("checkBackHalf");
    checkBackHalf?.setAttribute("class", "flex");
  };

  // Activate other options component 
  const handleShowOptions = () => {
    const extraOptions = document.getElementById("extraOptions");
    extraOptions?.setAttribute("class", "flex flex-col items-center");

    const hideButton = document.getElementById("extraButton");
    hideButton?.setAttribute("class", "hidden");

    const submitOne = document.getElementById("submitOne");
    submitOne?.setAttribute("class", "hidden");
  };

  // Submit data to the server
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const URLItem = {
      originalURL: url,
      shortURL: "",
      clicks: 0
    };
    if (!check)
      if (backHalf === "")
        handleCreateSURL(setSURLItem, URLItem, "foo", false);
      else
        handleCreateSURL(setSURLItem, URLItem, backHalf, false);

  };
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheck(true);
    setBackhalf(event.target.value)
  }
  // Checking if the url is available
  useEffect(() => {
    if (backHalf !== "") {
      const timerId = setTimeout(() => {
        handleCheckBackhalf(backHalf);
      }, 1000);
      return () => {
        clearTimeout(timerId);
      };
    }
  }, [backHalf, check]);

  // Depending of check value disable button or enable it
  useEffect(() => {
    const submitTwo = document.getElementById("submitTwo");
    check ?
      submitTwo?.setAttribute("class", classNames(style.mainButton, "w-full", "opacity-50"))
      :
      submitTwo?.setAttribute("class", classNames(style.mainButton, "w-full"))
  }, [check]);

  return (
    <div className="flex justify-center">
      <div className={style.container}>
        <form onSubmit={handleSubmit}>
          <div className="p-10">
            <label className={classNames(style.subtext, "text-4xl")}>
              To short your link paste it below:
            </label>
            <br /> <br />
            <div className="flex justify-center flex-col md:flex-row">
              <input className={style.mainInput}
                value={url}
                onChange={(event) => setUrl(event.target.value)}
                type="url"
                placeholder="Paste your link here" />
              <br />
              <button id="submitOne" type="submit" onSubmit={e => { e.preventDefault(); }} className={style.mainButton}>
                SHORT
              </button>
            </div>
            <div id="extraOptions" className="hidden">
              <br />
              <label className={classNames(style.subtext, "text-2xl")}>
                If you want a custom URL check before if it exist.
              </label>
              <br />
              <div className="flex flex-col md:flex-row ">
                <input
                  className={style.secondaryInput}
                  value={backHalf}
                  onChange={handleOnChange}
                  type="text"
                  placeholder="Your custom link here"
                />
              </div>
              <br />
              <p id="checkBackHalf" className="hidden">
                {check ? (<>THE URL ALREADY EXISTS{check}</>)
                  :
                  (<>{check}YOUR URL IS VALID{check}</>)
                }
              </p>
              <button
                id="submitTwo"
                type="submit"
                className={classNames(style.mainButton, "w-full")}
                disabled={check}>
                SHORT
              </button>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <button
              id="extraButton"
              onClick={handleShowOptions}
              type="button"
              className={style.secondaryButton}>
              MORE OPTIONS
            </button>
          </div>

        </form>
        <div className="flex justify-center">
          <br />
          <p> {sURLItem && sURLItem.shortURL ? (
            <>
              Your short URL is:
              <span className="text-xl">
                localhost:8080/{sURLItem.shortURL}
              </span>
            </>
          ) : (
            <span className="hidden">
              Generating short URL...
            </span>
          )}
          </p>
        </div>

      </div>
    </div>
  );
};


export default ShortURLContainer; 
