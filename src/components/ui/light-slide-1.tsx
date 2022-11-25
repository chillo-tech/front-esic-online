import React, {
  useState,
  useEffect,
  ReactElement,
  createContext,
  useContext,
} from "react";

const SlideContext = createContext<any>({});

type Props = {
  slideStep: number; // pixels
  slideSpeed: number; // seconds
  className?: string;
  children: React.ReactNode;
};

function LightSlide({ slideSpeed, slideStep, className, children }: Props) {
  const [prio, setPrio] = useState<number[]>([]);
  useEffect(() => {
    setPrio(() => []);
    changePositions([2, 1], 0);
    setTimeout(() => {
      const slideWrapper = document.querySelector(
        ".slide-wrapper"
      ) as HTMLElement;
      if (slideWrapper != undefined) {
        let max = (slideWrapper.children[0] as HTMLElement).offsetHeight;
        console.log(max);
        for (let i = 0; i < slideWrapper.children.length; i++) {
          const child = slideWrapper.children[0] as HTMLElement;
          if (child.offsetHeight > max) max = child.offsetHeight;
        }
        slideWrapper.style.height = `${max}px`;
      }
    }, 50);
  }, [changePositions]);

  function changePositions(
    priorities: number[] = [2, 1],
    direction: number = 0
  ) {
    setTimeout(() => {
      const slideItems = document.querySelectorAll(".slide-item");
      const maxIndex = priorities.indexOf(
        priorities.reduce((a, b) => Math.max(a, b))
      );
      const minIndex = priorities.indexOf(
        priorities.reduce((a, b) => Math.min(a, b))
      );

      let current = slideItems[maxIndex] as HTMLElement;
      let previous = slideItems[minIndex] as HTMLElement;

      const width = current.offsetWidth;

      // Stack all element on the side.
      slideItems.forEach((item, ind) => {
        const element = item as HTMLElement;
        element.style.zIndex = `${priorities[ind]}`;
        // Stack element on the right side by default.
        slideItems.forEach(
          (item) => ((item as HTMLElement).style.left = `${width}px`)
        );
      });

      // If no direction is set. The current element is directly set on top.
      if (direction == 0) {
        current.style.left = "0px";
      }

      let interval: NodeJS.Timer;
      let position = 0;
      let step = slideStep;

      if (direction == 1) {
        // Show the previous
        previous.style.left = "0px";

        // move the slide.
        interval = setInterval(() => {
          const remainingSpace = width + position;
          if (step > remainingSpace) step = remainingSpace;
          position = position - step;
          previous.style.left = `${position}px`;
          current.style.left = `${position + width}px`;
          if (remainingSpace == 0) {
            clearInterval(interval);
          }
        }, slideSpeed);
      }

      if (direction == 2) {
        previous = slideItems[
          priorities.indexOf(priorities.reduce((a, b) => Math.max(a, b)) - 1)
        ] as HTMLElement;

        // Stack element on the left side
        slideItems.forEach(
          (item) => ((item as HTMLElement).style.left = `-${width}px`)
        );
        // Show the previous
        previous.style.left = "0px";
        // move the slide.
        interval = setInterval(() => {
          const remainingSpace = width - position;
          if (step > remainingSpace) step = remainingSpace;
          position = position + step;
          previous.style.left = `${position}px`;
          current.style.left = `${position - width}px`;
          if (remainingSpace == 0) {
            clearInterval(interval);
          }
        }, slideSpeed);
      }
    }, 10);
  }

  function previous() {
    const slideItems = document.querySelectorAll(".slide-item");

    if (prio.length == 0) {
      const priorities = Array.from(Array(slideItems.length).keys()).map(
        (i) => slideItems.length - 1 - i
      );
      // store priorities.
      setPrio(() => priorities.map((item) => (item + 1) % slideItems.length));
      // Apply movement.
      changePositions(
        priorities.map((item) => (item + 1) % slideItems.length),
        1
      );
    } else {
      const priorities = prio.map((item) => (item + 1) % slideItems.length);
      // store priorities
      setPrio(() => priorities);
      // Appli movement.
      changePositions(priorities, 1);
    }
  }

  function next() {
    const slideItems = document.querySelectorAll(".slide-item");
    function sanitizeMod(item: number) {
      const mod = (item - 1) % slideItems.length;
      if (mod < 0) {
        return (mod + slideItems.length) % slideItems.length;
      } else {
        return mod;
      }
    }
    if (prio.length == 0) {
      const temp = Array.from(Array(slideItems.length).keys()).map(
        (i) => slideItems.length - 1 - i
      );
      setPrio(() => temp.map((item) => sanitizeMod(item)));
      changePositions(
        temp.map((item) => sanitizeMod(item)),
        2
      );
    } else {
      const temp = prio.map((item) => sanitizeMod(item));
      setPrio(() => temp);
      changePositions(temp, 2);
    }
  }

  return (
    <SlideContext.Provider value={{ previous, next }}>
      <div className={className}>{children}</div>
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
  return (
    <article className={`slide-item absolute w-full ${className}`}>
      {children}
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

LightSlideButton.defaultProps = {
  className: "p-2 text-white",
};

export { LightSlide, LightSlideWrapper, LightSlideItem, LightSlideButton };
