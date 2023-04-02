import Image from "next/image";
import * as Styled from "./styles";

export const BackgroundBloom = (): JSX.Element => {
  return (
    <Styled.Container>
      <Image
        src="/images/background-blur.png"
        alt="Background bloom blur"
        fill={true}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "contain",
        }}
      />
    </Styled.Container>
  );
};
