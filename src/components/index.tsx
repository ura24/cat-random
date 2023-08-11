import { useEffect, useState } from "react";

const Index = () => {
    const [imageUrl, setImageUrl] = useState("");
    const [loading, setLoading]   = useState(true);

    /**
     * マウント時に画像を読み込む
     */
    useEffect(() => {
        fetchImage().then((newImage) => {
            setImageUrl(newImage.url);
            setLoading(false);
        })

    }, [])

    /**
     * ボタンをクリックした時に画像を読み込む
     */
    const handClick = async () => {
        setLoading(true);
        const newImage = await fetchImage();
        setImageUrl(newImage.url);
        setLoading(false);
    }

    return (
        <div>
            <button onClick={handClick}>他のにゃんこも見る</button>
            <div>{loading || <img src={imageUrl} />}</div>
        </div>
    )
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
