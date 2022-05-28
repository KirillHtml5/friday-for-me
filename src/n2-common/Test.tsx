import React from 'react';
import SuperInputText from "../n1-main/m1-ui/common/c1-SuperInputText/SuperInputText";
import SuperButton from "../n1-main/m1-ui/common/c2-SuperButton/SuperButton";
import SuperCheckbox from "../n1-main/m1-ui/common/c3-SuperCheckbox/SuperCheckbox";
import Time from "../n1-main/m2-bll/api/time";

const Test = () => {
    return (
        <div>
            <SuperInputText/>
            <SuperButton/>
            <SuperCheckbox>text </SuperCheckbox>
            <Time/>
        </div>
    );
};

export default Test;