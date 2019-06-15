import React from "react";
import Nav from "../components/Nav";
import { isAbsolute } from "path";

class Enter extends React.Component {
    return(
    <form>
        <label>
            Name:
    <input type="text" name="name" />
        </label>
        <input type="submit" value="Submit" />
    </form>

    );
}

export default Enter;