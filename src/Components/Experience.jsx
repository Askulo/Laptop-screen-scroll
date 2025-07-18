import React from "react";
import {
    Text,
  Html,
  PresentationControls,
  Float,
  Environment,
  useGLTF,
  ContactShadows,
} from "@react-three/drei";

const Experience = () => {
  const computer = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf"
  );
  return (
    <>
      <Environment preset="city" />
      <color attach="background" args={["#695b5b"]} />

      <PresentationControls
        global
        rotation={[0.13, 0.1, 0]}
        polar={[-0.4, 0.2]}
        azimuth={[-1, 0.75]}
        config={{ mass: 2, tension: 400 }}
        // snap={{ mass: 4, tension: 400 }}
      >
        <Float rotationIntensity={0.2}>
          <rectAreaLight
            width={2.5}
            height={1.65}
            intensity={65}
            color={"#ff6900"}
            rotation={[-0.1, Math.PI, 0]}
            position={[0, 0.55, -1.15]}
          />

          <primitive object={computer.scene} position-y={-1.2}>
            <Html
              transform
              wrapperClass="htmlScreen"
              distanceFactor={1.17}
              position={[0, 1.56, -1.4]}
              rotation-x={-0.256}
            >
              <iframe src="https://www.paintingwing.com/" />
            </Html>
          </primitive>
          <Text
        //   font="https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu72xKOzY.woff"
          fontSize={0.4}
          position={[2, 0.75, 0.75]}
          rotation-y={-1.25}
          maxWidth={2}
          textAlign="center"
          >Painting Wing</Text>
        </Float>
      </PresentationControls>
      <ContactShadows position-y={-1.4} opacity={0.4} scale={5} blur={2.4} />
    </>
  );
};

export default Experience;
