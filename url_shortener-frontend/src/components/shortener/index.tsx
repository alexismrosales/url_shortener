import React, { useEffect, useState } from "react";
import classNames from "classnames";
import { createSearchParams, useNavigate } from 'react-router-dom';

import { handleCreateSURL, handleCheckCustomBackHalf } from "../../services/responseHandler";

import { data } from "../../data/shotener"

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
    checkBackHalf?.setAttribute("class", classNames(style.checkBackHalf, style.font));
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
    // Only alphanumeric symbols and underscore available
    if (event.target.value.match("^[a-zA-Z0-9_]*$") != null) {
      setCheck(true);
      setBackhalf(event.target.value)
    }
  }

  // Setting redirection to shortenurl route
  const Redirect = async (surl: string) => {
    navigate({
      pathname: '/url_shortener/shortenurl',
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
      submitTwo?.setAttribute("class", classNames(style.mainButton, style.font, "w-full", "opacity-50"))
      :
      submitTwo?.setAttribute("class", classNames(style.mainButton, style.font, "w-full"))
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
    <div className="flex items-center flex-col">
      <div className={style.container}>
        <form onSubmit={handleSubmit}>
          <div className="p-10">
            <label className={classNames(style.subtext, style.font, "text-5xl")}>
              {data.instructions}
            </label>
            <br /> <br />
            <div className="flex justify-center flex-col md:flex-row">
              <input className={classNames(style.mainInput, style.font)}
                value={url}
                onChange={(event) => setUrl(event.target.value)}
                type="url"
                placeholder="Paste your link here" />
              <br />
              <button
                id="submitOne"
                type="submit"
                onSubmit={e => { e.preventDefault(); }}
                className={classNames(style.mainButton, style.font)}>
                {data.shortButton}
              </button>
            </div>
            <div id="extraOptions" className="hidden">
              <br />
              <label className={classNames(style.subtext, style.font, "text-3xl")}>
                {data.customBH}
              </label>
              <br />
              <div className="flex flex-col md:flex-row ">
                <input
                  className={classNames(style.secondaryInput, style.font)}
                  value={backHalf}
                  onChange={handleOnChange}
                  type="text"
                  placeholder="Your custom link here"
                />
              </div>
              <br />
              <p id="checkBackHalf" className="hidden">
                {check ? (<>{data.invalidURL}</>)
                  :
                  (<>{data.validURL}</>)
                }
              </p>
              <button
                id="submitTwo"
                type="submit"
                className={classNames(style.mainButton, "w-full", style.font)}
                disabled={check}>
                {data.shortButton}
              </button>
            </div>
          </div>
          <div className="flex flex-col items-center my-5">
            <button
              id="extraButton"
              onClick={handleShowOptions}
              type="button"
              className={classNames(style.secondaryButton, style.font)}>
              {data.moreOptsButton}
            </button>
          </div>
        </form>
      </div>
      <div className={style.containerInfo}>
        <div className="m-5">
          <h2 className={classNames(style.subtitle, style.font, "m-5")}>
            {data.wtoDo}
          </h2>
          <p className={classNames(style.fontText, "text-xl text-justify m-5")}>
            {data.wtoDoText}
          </p>
          <br />
          <h2 className={classNames(style.subtitle, style.font, "m-5")}>
            {data.about}
          </h2>
          <p className={classNames(style.fontText, "text-xl text-justify m-5")}>
            {data.aboutText}
          </p>
        </div>
      </div>
    </div>
  );
};



export default ShortURL; 
