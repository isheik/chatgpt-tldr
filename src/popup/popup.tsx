import React, { ReactElement, useEffect, useState } from "react";
import { useCallback } from "react";
import useSWR from "swr";
// import Browser from "webextension-polyfill";
import { GearIcon, GlobeIcon } from "@primer/octicons-react";
import "../tailwind.css";
import App from "../App";

export default function Popup(): ReactElement {
  return <App />;
}
