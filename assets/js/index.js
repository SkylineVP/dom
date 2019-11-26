'use strict';
const SOCIAL_NETWORKS = Object.freeze({
    FACEBOOK: "FACEBOOK",
    TWITTER: "TWITTER",
    ANGULAR: "ANGULAR",
    INSTAGRAM: "INSTAGRAM",
})
const linkMap= new Map();
linkMap.set(SOCIAL_NETWORKS.FACEBOOK,"assets/image/facebook.png");
linkMap.set(SOCIAL_NETWORKS.TWITTER,"assets/image/twitter.png");
linkMap.set(SOCIAL_NETWORKS.INSTAGRAM,"assets/image/instagram.png");
linkMap.set(SOCIAL_NETWORKS.ANGULAR,"assets/image/angularjs.png");
const _users = [
    {
        id: 1,
        name: "Стас",
        surname: "Михайлов",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos error explicabo inventore qui, vero vitae.",
        imageSrc: "https://24smi.org/public/media/celebrity/2019/01/29/eblteapobq9j-stas-mikhailov.jpg",
        contacts: [
            {
                name: SOCIAL_NETWORKS.FACEBOOK,
                href: "",
            },
            {
                name: SOCIAL_NETWORKS.TWITTER,
                href: "",
            },
            {
                name: SOCIAL_NETWORKS.INSTAGRAM,
                href: "",
            },
            {
                name: SOCIAL_NETWORKS.ANGULAR,
                href: "",
            },
        ]
    },
];



/*const userListElem = document.getElementById("usersConteiner");
users.forEach(
    (user) => {
    userListElem.append(getUserCardElem(user));
}
);*/
function getUserCardElem({name,surname,description,imageSrc,contacts}) {
    const userCardWrapper = document.createElement("div")
    userCardWrapper.classList.add("userCardWrapper");
    const imageConteiner = document.createElement("div");
    imageConteiner.classList.add("imageConteiner");
    userCardWrapper.append(imageConteiner);
    const userImage=document.createElement("img")
    userImage.classList.add("userImage");
    userImage.setAttribute("src", imageSrc ? imageSrc : "");
    userImage.setAttribute("alt", 'user picture');
    imageConteiner.append(userImage);
    const userName= document.createElement("h2");
    userName.innerText = `${name} ${surname}`;
    userCardWrapper.append(userName);
    const desc=document.createElement("p");
    desc.innerText=description;
    userCardWrapper.append(desc);


    return userCardWrapper;


}

console.log(getUserCardElem(_users));

