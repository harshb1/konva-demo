import { useEffect, useState, useRef } from 'react';
import { Image, Group, Rect } from 'react-konva';
import Konva from 'konva';

function ColoredRect() {
  const [state, setState] = useState({
    image: null,
    mask: null
  })
  let image = useRef(null)
  let mask = useRef(null)

  useEffect(() => {
    const image = new window.Image();
    console.log({ image });
    image.src = "/image/image.jpg";
    image.onload = () => {
      setState({ image });
    }

    // if (image) {
    //   image.cache()
    // }
    // if (mask) {
    //   mask.cache()
    // }
  }, [])



  return (
    <Group>
      <Image
        image={state.image}
        ref={node => { 
          image = node; 
        }}
      />
      <Group
        globalCompositeOperation={"destination-in"}
        ref={node => { mask = node; }}
      >
        <Rect fill={"#555555"}
          width={200} height={200}
          x={100} y={100}
        />
        <Rect fill={"#dddddd"}
          width={200} height={200}
          x={300} y={300}
        />
        <Rect fill={"#dddddd"}
          width={200} height={100}
          x={150} y={350}
        />
      </Group>
    </Group>
  );
}





export default function KonvaDemo() {
  // Stage is a div container
  // Layer is actual canvas element (so you may have several canvases in the stage)
  // And then we have canvas shapes inside the Layer
  return (
    // <Stage width={window.innerWidth} height={window.innerHeight}>
    // <Layer>
    // <Text text="Try click on rect" />
    <ColoredRect />
    // </Layer>
    // </Stage>
  );
}