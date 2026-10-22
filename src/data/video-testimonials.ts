export interface VideoTestimonial {
  id: string;
  company: string;
  name?: string;
  video: string;
  poster: string;
  duration?: string;
  isNew?: boolean;
}

export const videoTestimonials: VideoTestimonial[] = [
  {
    id: "backroad-aminos",
    company: "Backroad Aminos",
    video: "/videos/ba-store.mp4",
    poster: "/videos/ba-store-poster.webp",
    duration: "0:42",
  },
];
