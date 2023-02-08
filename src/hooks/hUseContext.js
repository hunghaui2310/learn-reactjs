// Su dung useContext de truyen data tu component cha xuong component con ma khong can dung props

import CompMid from "./CompMid";
import { useState, useContext } from "react";
import { ThemeContext } from "../provider/ThemeProvider";

// Context
// 1. Create context
// 2. Provider
// 3. Consumer

// Theme Dart -> Light

const HUseContext = () => {

    const context = useContext(ThemeContext);

    return (
        <div>
            <button onClick={context.toggleChange}>Toggle theme</button>
            <CompMid />
        </div>
    )
}

export default HUseContext;