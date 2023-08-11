import { useEffect, useState } from "react";

const Index = () => {
    const [imageUrl, setImageUrl] = useState("");
    const [loading, setLoading]   = useState(true);

    useEffect(() => {
        fetchImage().then((newImage) => {
            setImageUrl(newImage.url);
            setLoading(false);
        })

    }, [])

    return <div>{loading || <img src={imageUrl} />}</div>;
}

export default Index;

type Image = {
    url: string;
};

/**
 * 猫の画像を取得する
 * @returns 猫の画像
 */
const fetchImage = async (): Promise<Image> => {
    const res = await fetch("https://api.thecatapi.com/v1/images/search");
    const images = await res.json();
    console.log(images);
    return images[0];
}

fetchImage();
