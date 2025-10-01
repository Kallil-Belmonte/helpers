type Element = {
  text: string;
  node: ChildNode;
};

/**
 * @function typingEffect
 * @description Adds a typing effect to a text.
 * @param { string } selector - Element selector.
 * @param { number } [speed=50] - Speed in miliseconds.
 * @author Kallil Belmonte
 * @see CodePen {@link https://codepen.io/kallil-belmonte/full/NPxNRZp}
 */

const typingEffect = async (selector: string, speed: number = 50) => {
  const elements: Element[] = [];
  const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

  const clear = (childNodes?: NodeListOf<ChildNode>) => {
    if (!childNodes) return;

    for (const childNode of Array.from(childNodes)) {
      if (Array.from(childNode.childNodes).length) {
        clear(childNode.childNodes);
      } else {
        elements.push({ text: childNode.textContent || '', node: childNode });
        childNode.textContent = '';
      }
    }
  };

  const animate = async () => {
    for (const element of elements) {
      const { text, node } = element;
      for (const [index, letter] of Object.entries(text)) {
        const isLastIndex = Number(index) === text.length - 1;
        await delay(speed);
        node.textContent = `${node?.textContent?.slice(0, -1)}${letter}${isLastIndex ? '' : '|'}`;
      }
    }
  };

  clear(document.querySelector(selector)?.childNodes);
  await animate();
};

export default typingEffect;
