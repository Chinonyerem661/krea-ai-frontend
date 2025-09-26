export interface CarouselItem {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  tag: string;
}

export interface Tool {
  icon: React.ReactNode;
  title: string;
  description: string;
  tag?: string;
  tagColor?: string;
}