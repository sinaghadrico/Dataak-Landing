enum SocialDic {
    "news" = "خبر",
    "instagram" = "اینستاگرام",
    "twitter" = "توییتر",
    "telegram" = "تلگرام",
}
enum SocialIconDic {
    "news" = "ri-global-line",
    "instagram" = "ri-instagram-line",
    "twitter" = "ri-twitter-line",
    "telegram" = "ri-telegram-line",
}
enum SocialIconColor {
    "news" = "#6B86F9",
    "instagram" = "#C63C73",
    "twitter" = "#5AD1F6 ",
    "telegram" = "#32AADD",
}
enum SocialIconBgColor {
    "news" = "radial-gradient(92.07% 90.43% at 17.79% 84.57%, #199DA3 0%, #17DFE8 100%)",
    "instagram" = "linear-gradient(221.37deg, #F7B900 -31.79%, #FF8820 -19.03%, #FE5142 -2.52%, #BF007A 44.93%, #810090 76.83%, #012197 112.31%)",
    "twitter" = "radial-gradient(104.63% 87.28% at 8.65% 27.73%, #0D84CE 0%, #52B2EE 100%)",
    "telegram" = " radial-gradient(109.37% 109.37% at 93.51% 0%, #197EE6 0%, #005BB8 100%)",
}


enum ResourceTypeDic {
    "NEWS_AGENCY" = "news",
    "TELEGRAM_CHANNEL" = "telegram",
    "TWITTER_USER" = "twitter",
    "INSTAGRAM_USER" = "instagram",
}

enum PostTypeDic {
    "NEWS_POST" = "news",
    "TELEGRAM_POST" = "telegram",
    "TWITTER_POST" = "twitter",
    "INSTAGRAM_POST" = "instagram",
}

enum PostTwitterDic {
    "user" = "user",
    "avatar"="user.profile_image_url",
    "username" = "user.username",
    "time" = "time",
    "description" = "text",
    "like_count" = "favorit_count",
    "comment_count" = "retweet_count",
    "link" = "link",
}
enum PostInstagramDic {
    "user" = "user",
    "avatar"="user.avatar",
    "username" = "user.username",
    "time" = "time",
    "description" = "text",
    "like_count" = "like_count",
    "comment_count" = "comment_count",
    "link" = "link",
}
enum PostNewsDic {
    "user" = "user",
    "avatar"="relation.avatar",
    "username" = "relation.title",
    "time" = "time",
    "description" = "description",
    "like_count" = "like_count",
    "comment_count" = "comment_count",
    "link" = "link",
}

enum PostTelegramDic {
    "user" = "user",
    "avatar"="avatar",
    "username" = "username",
    "time" = "time",
    "description" = "description",
    "view_count" = "view_count",
    "comment_count" = "comment_count",
    "link" = "link",
}



export { SocialDic, SocialIconDic ,ResourceTypeDic,SocialIconColor ,SocialIconBgColor,PostTypeDic ,PostTwitterDic,PostInstagramDic,PostNewsDic,PostTelegramDic};
