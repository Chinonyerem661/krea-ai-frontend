import { Tool } from '@/types';



export const tools: Tool[] = [
  {
    icon: <img src="/gallery.png" alt='Image tool'  className="w-34 h-18" />,
    title: "Image",
    description: "Generate images with custom styles in Flux and ideogram",
    tag: "New",
    tagColor: "bg-blue-500"
  },
  {
    icon: <img src="/video-camera.png" className="w-34 h-18" />,
    title: "Video",
    description: "Generate videos with Haiku, Pica, Runway, Luma, and more"
  },
  {
    icon: <img src="/pen.png" alt='Pen Tool' className="w-34 h-18" />,
    title: "Realtime",
    description: "Realtime AI rendering on a canvas. Instant feedback loops"
  },
  
  {
    icon: <img src="/wand.png" alt='wand'className="w-34 h-18" />,
    title: "Enhancer",
    description: "Upscale and enhance images and videos up to 22K",
    tag: "New",
    tagColor: "bg-blue-500"
  },
  {
    icon: <img src="/compass.png" className="w-34 h-18" />,
    title: "Edit",
    description: "Add objects, change style, or expand photos and generations",
    tag: "New",
    tagColor: "bg-blue-500"
  },
  {
    icon: <img src="/microphone.png" alt='microphone' className="w-28 h-14" />,
    title: "Video Upscale",
    description: "Lip sync any video to any audio",
    tag: "New", 
    tagColor: "bg-blue-500"
  },
  {
    icon: <img src="/man.png" alt='man' className="w-34 h-18" />,
    title: "Motion Transfer",
    description: "Transfer motion to images and animate characters",
    tag: "New",
    tagColor: "bg-blue-500"
  },
  {
    icon: <img src="/train.png" alt='Train' className="w-34 h-18" />,
    title: "Train",
    description: "Teach Krea to replicate your style, products, or characters"
  }
];