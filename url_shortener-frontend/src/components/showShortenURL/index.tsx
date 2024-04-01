import { useState } from "react";
import { useSearchParams, Navigate } from "react-router-dom";
import classNames from "classnames";
import { Tooltip } from "@material-tailwind/react";
import { apiKey } from "../../global_variables";

import style from "./styles.module.css";

const ShowShorterURL = () => {
  const [data] = useSearchParams();
  const surl = data.get("surl");
  const sessionSurl = sessionStorage.getItem("sURL");
  const completeSURL = apiKey + "/" + surl;

  const [copyStatus, setCopyStatus] = useState("Copy to clipboard");

  const copyToClipboard = async () => {
    setCopyStatus("Copied " + completeSURL);
    try {
      await navigator.clipboard.writeText(completeSURL);
      setTimeout(() => {
        setCopyStatus("Copy to clipboard");
      }, 2000);
    }
    catch (error) {
      console.log(error);
      throw error;
    }
  }

  if (surl !== sessionSurl || surl == null) {
    return <Navigate to="/url_shortener/" />;
  }

  return (
    <div className="flex justify-center">
      <div className={style.cardContainer}>
        <p className={classNames(style.subtext, "text-5xl m-8 mb-3")}>
          Your short url is:
        </p>
        <br />
        <a href={completeSURL} target="_blank">
          <p className={classNames(style.url, "md:text-5xl text-2xl md:m-10 my-10")}>
            {completeSURL}
          </p>
        </a>
        <div className="w-full flex justify-center items-center my-5">
          <Tooltip content={copyStatus} className={style.tooltip}>
            <button
              type="button"
              className={style.buttonClipboard}
              onClick={copyToClipboard}>
              COPY URL
            </button>
          </Tooltip>
        </div>
      </div>
    </div>);
}
export default ShowShorterURL;
