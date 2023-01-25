import React, { useState } from "react";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import axios from "axios";
import { FcGoogle } from "react-icons/fc";
import { BASE_URL } from "../helper/constant";

export const BtnHeader = ({ id }) => {
  const [loading, setloading] = useState(true);

  function print() {
    window.print();
  }

  const downloadPdf = () => {
    setloading(false);
    setTimeout(print, 500);
    setTimeout(() => setloading(true), 2500);
  };

  if (loading)
    return (
      <div className={styles.mainHeader}>
        <Link href={"/createCV"}>
          <button>Create CV</button>
        </Link>
      </div>
    );
};
