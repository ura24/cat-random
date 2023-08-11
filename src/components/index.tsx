const Index = () => {
    return <div>猫画像予定地</div>
}

export default Index;

type Image = {
    url: String;
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
