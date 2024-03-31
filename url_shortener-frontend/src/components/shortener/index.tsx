import React, { useEffect, useState } from "react";
import classNames from "classnames";
import { createSearchParams, useNavigate } from 'react-router-dom';

import { handleCreateSURL, handleCheckCustomBackHalf } from "../../services/responseHandler";

import style from "./styles.module.css"

const ShortURL = () => {
  const [url, setUrl] = useState("")
  const [backHalf, setBackhalf] = useState("")
  const [sURLItem, setSURLItem] = useState({ shortURL: "" });
  const [check, setCheck] = useState(false);
  const navigate = useNavigate();

  // Load data from response handler
  const handleCheckBackhalf = async (backhalf: string) => {
    const response = await handleCheckCustomBackHalf(backhalf);
    setCheck(response.data);

    const checkBackHalf = document.getElementById("checkBackHalf");
    checkBackHalf?.setAttribute("class", style.checkBackHalf);
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

  // Disabling button while typing
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheck(true);
    setBackhalf(event.target.value)
  }

  // Setting redirection to shortenurl route
  const Redirect = async (surl: string) => {
    navigate({
      pathname: '/shortenurl',
      search: createSearchParams({ surl: surl }).toString()
    });
  }

  // Submit data to the server
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const URLItem = {
      originalURL: url,
      shortURL: "",
      clicks: 0
    };
    if (!check) {
      if (backHalf === "")
        await handleCreateSURL(setSURLItem, URLItem, "foo", false);
      else
        await handleCreateSURL(setSURLItem, URLItem, backHalf, false);
    }
  };

  // Checking if the url is available
  useEffect(() => {
    if (backHalf !== "") {
      // After verify checkBackHalf wait 1 second to set backhalf
      const timerId = setTimeout(() => {
        handleCheckBackhalf(backHalf);
      }, 1000);
      return () => {
        clearTimeout(timerId);
      };
    } else
      setCheck(false)
  }, [backHalf, check]);

  // Depending of check value disable button or enable it
  useEffect(() => {
    const submitTwo = document.getElementById("submitTwo");
    check ?
      submitTwo?.setAttribute("class", classNames(style.mainButton, "w-full", "opacity-50"))
      :
      submitTwo?.setAttribute("class", classNames(style.mainButton, "w-full"))
  }, [check]);

  // Redirect and reset the SURLItem hook
  useEffect(() => {
    if (sURLItem.shortURL !== "") {
      sessionStorage.setItem("sURL", sURLItem.shortURL);
      Redirect(sURLItem.shortURL);
      setSURLItem({ shortURL: "" });
    }
  }, [sURLItem]);

  return (
    <div className="flex justify-center">
      <div className={style.container}>
        <form onSubmit={handleSubmit}>
          <div className="p-10">
            <label className={classNames(style.subtext, "text-5xl")}>
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
              <label className={classNames(style.subtext, "text-3xl")}>
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
          <div className="flex flex-col items-center my-5">
            <button
              id="extraButton"
              onClick={handleShowOptions}
              type="button"
              className={style.secondaryButton}>
              MORE OPTIONS
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};



export default ShortURL; 
