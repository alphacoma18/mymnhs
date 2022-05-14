import React from "react";
import sectionGetter from ".";
const Caller = () => {
    enum {

    }
    let x: string = "11"
    let y: string = "STEM"
    sectionGetter(x, y)
	return <div>Caller</div>;
};

export default Caller;
