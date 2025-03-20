import {AspectRatio} from "@radix-ui/react-aspect-ratio";

function ImageBox({src, alt, size}: { src: string, alt: string, size?: Size }) {
    let boxStyles = '';
    switch (size) {
        case Size.default:
            boxStyles = 'aspect-video rounded-xl bg-muted/50';
            break;
        case Size.large:
            boxStyles = 'min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min';
            break;
    }
    return (
        <AspectRatio ratio={16 / 9} className={boxStyles}>
            <img
                className="w-full h-full object-cover rounded-xl"
                src={src}
                alt={alt}
            />
        </AspectRatio>
    )
}

const imageList = [
    {
        src: "https://images.pexels.com/photos/29704986/pexels-photo-29704986/free-photo-of-vibrant-pink-betta-fish-on-black-background.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        alt: "Landscape photograph by Tobias Tullius"
    },
    {
        src: "https://images.pexels.com/photos/2765210/pexels-photo-2765210.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        alt: "Photo by Drew Beamer"
    },
    {
        src: "https://images.pexels.com/photos/325044/pexels-photo-325044.jpeg",
        alt: "Red Fish"
    },
    {
        src: "https://images.pexels.com/photos/8116934/pexels-photo-8116934.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        alt: "silver fish"
    },
    {
        src: "https://images.pexels.com/photos/29704986/pexels-photo-29704986/free-photo-of-vibrant-pink-betta-fish-on-black-background.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        alt: "Landscape photograph by Tobias Tullius"
    },
    {
        src: "https://images.pexels.com/photos/2765210/pexels-photo-2765210.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        alt: "Photo by Drew Beamer"
    },
    {
        src: "https://images.pexels.com/photos/325044/pexels-photo-325044.jpeg",
        alt: "Red Fish"
    },
    {
        src: "https://images.pexels.com/photos/8116934/pexels-photo-8116934.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        alt: "silver fish"
    },
    {
        src: "https://images.pexels.com/photos/29704986/pexels-photo-29704986/free-photo-of-vibrant-pink-betta-fish-on-black-background.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        alt: "Landscape photograph by Tobias Tullius"
    },
    {
        src: "https://images.pexels.com/photos/2765210/pexels-photo-2765210.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        alt: "Photo by Drew Beamer"
    },
    {
        src: "https://images.pexels.com/photos/325044/pexels-photo-325044.jpeg",
        alt: "Red Fish"
    },
    {
        src: "https://images.pexels.com/photos/8116934/pexels-photo-8116934.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        alt: "silver fish"
    },
    {
        src: "https://images.pexels.com/photos/29704986/pexels-photo-29704986/free-photo-of-vibrant-pink-betta-fish-on-black-background.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        alt: "Landscape photograph by Tobias Tullius"
    },
    {
        src: "https://images.pexels.com/photos/2765210/pexels-photo-2765210.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        alt: "Photo by Drew Beamer"
    },
    {
        src: "https://images.pexels.com/photos/325044/pexels-photo-325044.jpeg",
        alt: "Red Fish"
    },
    {
        src: "https://images.pexels.com/photos/8116934/pexels-photo-8116934.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        alt: "silver fish"
    },
    {
        src: "https://images.pexels.com/photos/29704986/pexels-photo-29704986/free-photo-of-vibrant-pink-betta-fish-on-black-background.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        alt: "Landscape photograph by Tobias Tullius"
    },
    {
        src: "https://images.pexels.com/photos/2765210/pexels-photo-2765210.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        alt: "Photo by Drew Beamer"
    },
    {
        src: "https://images.pexels.com/photos/325044/pexels-photo-325044.jpeg",
        alt: "Red Fish"
    },
    {
        src: "https://images.pexels.com/photos/8116934/pexels-photo-8116934.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        alt: "silver fish"
    },

]

enum Size {
    default = "default",
    large = "large",
}

export default function DashboardLayout() {
    return (
        <>
            <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                {imageList.map((image, index) => (
                    <ImageBox src={image.src} alt={image.alt} key={index}/>
                ))}
            </div>
            <ImageBox
                src={"https://images.pexels.com/photos/8116934/pexels-photo-8116934.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"}
                alt={"silver fish"} size={Size.large}/>

        </>
    )
}