import React from "react";
import _ from "lodash";
import {createRoot} from "react-dom/client";

import s from "./main.module.scss";
import "./index.css";

const root = createRoot(document.querySelector('#root') as HTMLElement);

console.log(_.join(['hello', 'world'], '§'));

const Root = (
    <div>
        <h1 className={s.hello}>Hello <span>World</span></h1>
    </div>
)

root.render(Root);