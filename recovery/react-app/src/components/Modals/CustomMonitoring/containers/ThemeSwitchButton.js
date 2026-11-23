import "unpacked/module-15.js";
import "unpacked/module-553.js";
import { inject } from "unpacked/module-239.js";
import Module1633 from "unpacked/module-1633.js";
const u = inject("modalStore")(function({ modalStore }) {
    return <Module1633 type="control" icon="theme" onClick={function() {
        modalStore.changeTheme();
    }}/>;
});
export default u;
