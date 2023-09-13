import React, { useState } from "react";
import styles from "../styles/Home.module.css";

const copy = <i className="far fa-copy"></i>;

function ListItem({ rgb, hex }) {
  const [copied, setCopied] = useState(false);

  // Copy to clipboard
  const copyToClipboard = (e) => {
    const color = e.target.innerText;
    navigator.clipboard.writeText(color);
  };

  return (
    <div className="list">
    <li className={styles.colorName} style={{ background: rgb }} 
    onClick={(e) => {
      copyToClipboard(e);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 1000);
    }}>
    </li>
    <div>
      {copied ? "Copied!" : hex}
    </div>
  </div>
  );
}

export default ListItem;