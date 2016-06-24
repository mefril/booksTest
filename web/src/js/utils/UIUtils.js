export default class UiUtils {
    static setListenerOutOfSomeElementClick(id, closingFunction, eventNameParam, elementToIgnoreId) {

        var eventName = eventNameParam;
        var listener = function (e) {
            function isDescendant(parentId, child) {
                var node = child.parentNode;
                while (node != null) {
                    if (node.id == parentId) {
                        return true;
                    }
                    node = node.parentNode;
                }
                return false;
            }

            if (!isDescendant(id, e.target)) {
                if (!elementToIgnoreId || elementToIgnoreId && !isDescendant(elementToIgnoreId, e.target)) {
                    document.body.removeEventListener(eventName, listener, false);
                    document.body.addEventListener("wheel", listener, false);
                    closingFunction();
                }
            }
        };
        document.body.addEventListener(eventName, listener, false);
        document.body.addEventListener("wheel", listener, false);
    }
}