import React from "react";

import { createSURL, checkBackHalf } from "../../api/fetchData";

import style from "./styles.module.css"

const ShortURLContainer = () => {

  return (
    <div className={style.container}>

      <form>
        <div className={style.mainInput}>
          <label className={style.subtext}>To short your link paste it below: </label>
          <br />
          <input type="url" placeholder="Paste your link here" />
          <button type="submit" className="rounded-lg">SHORT</button>
        </div>
      </form>
    </div>
  );
};
export default ShortURLContainer;
