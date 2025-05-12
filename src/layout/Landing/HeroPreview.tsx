import React from "react";
import { useRouter } from "next/router";
import { Container, Image } from "@mantine/core";

export const HeroPreview = () => {
  const router = useRouter(); // 2. 获取 router 实例
  const basePath = router.basePath || ""; // 3. 获取 basePath

  return (
    <Container component="section" id="preview" fluid py="20" mx="lg">
      <Image
        src={`${basePath}/assets/editor.webp`}
        loading="eager"
        maw={1036}
        mx="auto"
        alt="JSON Crack editor preview"
        style={{
          borderRadius: 10,
          overflow: "hidden",
          border: "1px solid #c1c1c1",
          outline: "1px solid #c1c1c1",
          outlineOffset: "6px",
        }}
      />
    </Container>
  );
};
