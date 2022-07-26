import logoAvatar from "assets/img/avatar.jpg";
export const getImageFromProxy = (address, type, noProxy = false) => {
    let url = null;

    if (!address ||  address==="") return logoAvatar;
    if (type === "avatar") return getAvatarAddress(address);

    try {
        url = `https://cdn.dataak.com/download?url=${window.btoa(address)}${noProxy ? "&no_proxy=1" : ""}`;
    } catch (error) {
        url = logoAvatar;
    }

    return url;
};

const getAvatarAddress = (avatar) => {
    const imagesStaticUrl = "https://f002.backblazeb2.com/file/all-gather-media/";
    try {
        if (avatar) {
            const avatarUrl = avatar.startsWith("http") ? avatar : imagesStaticUrl + avatar;
            return avatarUrl?.replace("_normal", "");
        } else {
            return logoAvatar;
        }
    } catch (error) {
        return logoAvatar;
    }
   
};

export const getImageFromCache = (_address, noProxy) => {
    return new Promise((resolve, reject) => {
        try {
            const address = getImageFromProxy(_address, null, noProxy);
            resolve(address);
        } catch (error) {
            reject(error);
        }
    });
};
