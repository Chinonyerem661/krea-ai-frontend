import { 
  Play, 
  Image, 
  Video, 
  Zap, 
  Edit3, 
  Users, 
  Wand2, 
  GraduationCap 
} from 'lucide-react';
import { Tool } from '@/types';



export const tools: Tool[] = [
  {
    icon: <img src="/gallery.png" alt='Image tool'  className="w-14 h-10" />,
    title: "Image",
    description: "Generate images with custom styles in Flux and ideogram",
    tag: "New",
    tagColor: "bg-blue-500"
  },
  {
    icon: <img src="/video-camera.png" className="w-14 h-10" />,
    title: "Video",
    description: "Generate videos with Haiku, P5A, Runway, Luma, and more"
  },
  {
    icon: <img src="/pen.png" alt='Pen Tool' className="w-14 h-10" />,
    title: "Realtime",
    description: "Realtime AI rendering on a canvas. Instant feedback loops"
  },
  
  {
    icon: <img src="/wand.png" alt='wand'className="w-14 h-10" />,
    title: "Enhancer",
    description: "Upscale and enhance images and videos up to 10.2K",
    tag: "New",
    tagColor: "bg-orange-500"
  },
  {
    icon: <img src="/compass.png" className="w-14 h-10" />,
    title: "Edit",
    description: "Add objects, change style, or extend images and artboards",
    tag: "New",
    tagColor: "bg-purple-500"
  },
  {
    icon: <img src="/microphone.png" alt='microphone' className="w-10 h-10" />,
    title: "Video Upscale",
    description: "Lip sync any video to any audio",
    tag: "New", 
    tagColor: "bg-green-500"
  },
  {
    icon: <img src="/man.png" alt='man' className="w-14 h-12" />,
    title: "Motion Transfer",
    description: "Transfer motion to images and animate characters",
    tag: "New",
    tagColor: "bg-blue-500"
  },
  {
    icon: <img src="/train.png" alt='Train' className="w-14 h-12" />,
    title: "Train",
    description: "Teach Krea to replicate your style, products, or characters"
  }
];