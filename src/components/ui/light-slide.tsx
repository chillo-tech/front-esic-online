import React, { useState, useEffect, createContext, useContext } from "react";

const SlideContext = createContext<any>({});

type Props = {
  slideStep: number; // pixels
  slideSpeed: number; // seconds
  className?: string;
  children: React.ReactNode;
  showCount: number;
  changeAll: boolean;
  id: string;
};

function LightSlide({
  slideSpeed,
  slideStep,
  className,
  children,
  showCount,
  changeAll,
  id,
}: Props) {
  const [moves, setMoves] = useState<number>(0);

  useEffect(() => {
    setTimeout(() => {
      // Compute slide wrapper high by getting the highest of his children.
      const slideWrappers = document.querySelectorAll(".slide-wrapper");
      slideWrappers.forEach((item) => {
        const wrapper = item as HTMLElement;
        const slideItems = wrapper.querySelectorAll(".slide-item");
        let max = (slideItems[0] as HTMLElement).offsetHeight;
        slideItems.forEach((item, index) => {
          const child = item as HTMLElement;
          // find the element with the max-height.
          if (child.offsetHeight > max) max = child.offsetHeight;
          // create virtual long element
          child.style.width = `${100 / showCount}%`;
          child.style.left = `${child.offsetWidth * index}px`;
        });
        wrapper.style.height = `${max}px`;
      });
    }, 50);
  }, [showCount]);

  function previous() {
    // left ++
    // show all element after Math.ceil(total/showCount)
    const slideItems = document
      .getElementById(id)
      ?.querySelectorAll(".slide-item");
    if (slideItems == null) return 0;

    const tempMoves = moves - 1;
    if (tempMoves >= 0) {
      setMoves(tempMoves);
      slideItems.forEach((item, _) => {
        let interval: NodeJS.Timer;
        const child = item as HTMLElement;
        let width = child.offsetWidth;
        // If we show a certain number of slides. The we change move width a step = to one slide length
        // Or with a length = to the compound width of all the slides.
        if (changeAll) {
          width = width * showCount;
        }

        let stepCount = Math.floor(width / slideStep);

        const styles = getComputedStyle(child, null);
        const initialPosition = parseFloat(
          styles.getPropertyValue("left").split("px")[0]
        );
        let position = initialPosition;

        interval = setInterval(() => {
          position = position + slideStep;
          child.style.left = `${position}px`;
          stepCount = stepCount - 1;

          if (stepCount < 0) {
            child.style.left = `${initialPosition + width}px`;
            clearInterval(interval);
          }
        }, slideSpeed);
      });
    }
  }

  function next() {
    // left --
    // show all element after Math.ceil(total/showCount)
    const slideItems = document
      .getElementById(id)
      ?.querySelectorAll(".slide-item");
    if (slideItems == null) return 0;

    const tempMoves = moves + 1;
    const moveCondition = changeAll
      ? Math.floor(slideItems.length / showCount)
      : Math.ceil(slideItems.length / showCount);

    if (tempMoves <= moveCondition) {
      setMoves(tempMoves);
      slideItems.forEach((item, _) => {
        let interval: NodeJS.Timer;
        const child = item as HTMLElement;
        let width = child.offsetWidth;
        // If we show a certain number of slides. The we change move width a step = to one slide length
        // Or with a length = to the compound width of all the slides.
        if (changeAll) {
          width = width * showCount;
        }

        let stepCount = Math.floor(width / slideStep);

        const styles = getComputedStyle(child, null);
        const initialPosition = parseFloat(
          styles.getPropertyValue("left").split("px")[0]
        );
        let position = initialPosition;

        interval = setInterval(() => {
          position = position - slideStep;
          child.style.left = `${position}px`;
          stepCount = stepCount - 1;

          if (stepCount < 0) {
            child.style.left = `${initialPosition - width}px`;
            clearInterval(interval);
          }
        }, slideSpeed);
      });
    }
  }

  return (
    <SlideContext.Provider value={{ previous, next, moves, showCount }}>
      <div className={className} id={id}>
        {children}
      </div>
    </SlideContext.Provider>
  );
}

function LightSlideWrapper({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) {
  return (
    <div className={`${className} relative overflow-hidden slide-wrapper`}>
      {children}
    </div>
  );
}

function LightSlideItem({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  const { moves } = useContext(SlideContext);
  const { showCount } = useContext(SlideContext);

  return (
    <article className={`slide-item absolute  ${className}`}>
      <div className="overflow-hidden">{children}</div>
    </article>
  );
}

function LightSlideButton({
  className,
  children,
  to,
}: {
  className?: string;
  to: string;
  children: React.ReactNode;
}) {
  const { next, previous } = useContext(SlideContext);
  return (
    <button className={className} onClick={to == "left" ? previous : next}>
      {children}
    </button>
  );
}

function LightSlideNavigation({
  className,
  children,
}: {
  className: string;
  children: React.ReactNode;
}) {
  const { next, previous, moves } = useContext(SlideContext);
  return null;
}

LightSlideButton.defaultProps = {
  className: "p-2 text-white",
};

LightSlide.defaultProps = {
  changeAll: false,
  slideSpeed: 1,
  slideStep: 10,
  showCount: 1,
};

export {
  LightSlide,
  LightSlideWrapper,
  LightSlideItem,
  LightSlideButton,
  LightSlideNavigation,
};
