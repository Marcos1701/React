import { FC } from "react";

interface PlayeryoutubeProps {
    src: string
}

const Playeryoutube: FC<PlayeryoutubeProps> = ({ src }: PlayeryoutubeProps) => {
    console.log(src);
    return <iframe width="560" height="315" src={src} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
}

export default Playeryoutube;