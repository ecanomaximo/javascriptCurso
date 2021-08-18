function selectorLists() {
    const catchElementList = document.querySelector('.boxOfLists');
    const catchLists = catchElementList.querySelectorAll('li')

    for (let li of catchLists) {
        console.log(li);
    }

    function captureStyle() {
        const styleOfBody = getComputedStyle(document.body)
        const backgrounColorBody = styleOfBody.backgroundColor;

        console.log(backgrounColorBody);
    };
    captureStyle()
};

selectorLists();