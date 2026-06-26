"use client";

import { useEffect } from "react";
import { homeMarkup } from "./homeMarkup";

export default function Home() {
  useEffect(() => {
    const lb = document.getElementById("lightbox");
    const lbImg = document.getElementById("lb-img") as HTMLImageElement | null;
    const lbCap = document.getElementById("lb-cap");
    if (!lb || !lbImg || !lbCap) return;

    const open = (img: HTMLImageElement) => {
      const card = img.closest(".lab-card");
      const h3 = card?.querySelector("h3");
      lbImg.src = img.dataset.full || img.src;
      lbCap.textContent = h3 ? h3.textContent : "";
      lb.classList.add("open");
    };
    const close = () => lb.classList.remove("open");

    const thumbs = Array.from(
      document.querySelectorAll<HTMLImageElement>(".lab-thumb img")
    );
    const handlers = thumbs.map((img) => {
      const h = () => open(img);
      img.addEventListener("click", h);
      return h;
    });
    const onLb = () => close();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    lb.addEventListener("click", onLb);
    document.addEventListener("keydown", onKey);

    return () => {
      thumbs.forEach((img, i) => img.removeEventListener("click", handlers[i]));
      lb.removeEventListener("click", onLb);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: homeMarkup }} />;
}
