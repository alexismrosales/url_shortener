import React from "react";

import { createSURL, checkBackHalf } from "../../api/fetchData";

import style from "./styles.module.css"

const ShortURLContainer = () => {

  return (
    <div className="flex justify-center">
      <div className={style.container}>
        <form>
          <div className={style.mainDivInput}>
            <label className={style.subtext}>To short your link paste it below: </label>
            <br />
            <input className={style.mainInput} type="url" placeholder="Paste your link here" />
            <button type="submit" className="rounded-lg">SHORT</button>
          </div>
        </form>
      </div>
    </div>

  );
};
export default ShortURLContainer;
