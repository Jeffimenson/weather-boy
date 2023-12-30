function updateButtons(nextButton, backButton, currSlide, maxSlide, minSlide) {
    const canSlideForward = currSlide < maxSlide - 1;
    const canSlideBack = currSlide > minSlide;

    nextButton.disabled = !canSlideForward;
    backButton.disabled = !canSlideBack;
}

export default function createSlider(
    nextButton,
    backButton,
    sliderElm,
    cardCount,
    cardsPerSlide,
    isGrid
) {
    const minSlide = 0;
    let maxSlide = cardCount / cardsPerSlide;

    let currSlide = 0;

    let calcedWidth = 100 * maxSlide;
    sliderElm.style.width = `${calcedWidth}%`;
    if (isGrid) {
        sliderElm.style.gridAutoColumns = `${calcedWidth / cardCount}%`;
    }
    nextButton.addEventListener('click', () => {
        if (currSlide < maxSlide - 1) {
            currSlide += 1;
            sliderElm.style.right = `${currSlide * 100}%`;
        }
        updateButtons(nextButton, backButton, currSlide, maxSlide, minSlide);
    });
    backButton.addEventListener('click', () => {
        if (currSlide > minSlide) {
            currSlide -= 1;
            sliderElm.style.right = `${currSlide * 100}%`;
        }
        updateButtons(nextButton, backButton, currSlide, maxSlide, minSlide);
    });

    updateButtons(nextButton, backButton, currSlide, maxSlide, minSlide);

    const changeCPS = (cardsPerS) => {
        maxSlide = cardCount / cardsPerS;
        calcedWidth = 100 * maxSlide;
        sliderElm.style.width = `${calcedWidth}%`;
        if (isGrid) {
            sliderElm.style.gridAutoColumns = `${calcedWidth / cardCount}%`;
        }
        updateButtons(nextButton, backButton, currSlide, maxSlide, minSlide);
    };

    const getCurrSlide = () => currSlide;

    return {
        changeCPS,
        getCurrSlide,
    };
}
