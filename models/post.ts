export interface Post {
    avatar: string;
    caption?: any;
    description: string;
    extracted_email?: any;
    extracted_hashtag: string[];
    extracted_ip?: any;
    extracted_mention: string[];
    extracted_mobile: string[];
    extracted_national_code?: any;
    extracted_phone: string[];
    extracted_postal_code?: any;
    extracted_url: string[];
    id: string;
    lang: string;
    media_id?: number;
    member_count: number;
    message_type: string;
    mime_type: string;
    norm_description: string;
    post_id: string;
    title: string;
    norm_title: string;
    ["relation.copy_count"]?: any;
    ["relation.description"]: string;
    ["relation.extracted_email"]?: any;
    ["relation.extracted_hashtag"]: string[];
    ["relation.extracted_ip"]?: any;
    ["relation.extracted_mention"]: string[];
    ["relation.extracted_mobile"]: string[];
    ["relation.extracted_national_code"]?: any;
    ["relation.extracted_phone"]: string[];
    ["relation.extracted_postal_code"]?: any;
    ["relation.extracted_url"]: string[];
    ["relation.id"]: string;
    ["relation.influence"]?: number;
    ["relation.influence_date"]: string;
    ["relation.lang"]: string;
    ["relation.post_count"]?: any;
    ["relation.robot_see_date"]: string;
    ["relation.view_count"]?: any;
    robot_see_date: string;
    source: string;
    source_id: any;
    source_post_id?: any;
    source_relation_id?: any;
    source_relation_title?: any;
    source_relation_username?: any;
    time: string;
    update_date: string;
    url: string;
    username: string;
    view_count: number;
    content_tags: any[];
    tags: any[];
    seen_time?: any;
    score?: number;
    sentiment: string;
    sentiment_negative: any;
    sentiment_neutral: any;
    sentiment_objective?: number;
    sentiment_positive: any;
    application_notes: any[];
    republishers?: any;
    copy_count?: number;
    comment_count: number;
    document_inserted_at: string;
    post_engagment: number;
    user_engagment: number;
    categories: any;
    top_category: string;
    top_category_prob: number;
    sub_categories: any;
    top_sub_category: string;
    top_sub_category_prob: number;
    post_type: string;
    document_inserted_time?: Date;
    display_text_range: number[];
    type: string;
    text: string;
    entities: string;
    is_quote?: boolean;
    retweet_count?: number;
    favorit_count?: number;
    samane_assign_user_id?: any;
    samane_assigner_user_id?: any;
    samane_post_status?: any;
    in_reply_to_post_id?: number;
    in_reply_to_user_id?: number;
    in_reply_to_username: string;
    political_direction_total: any[];
    in_reply_to_text: string;
    user: User;
    link: string;
    text_txt: string;
    slides: string;
    advert_noise?: number;
    code: string;
    like_count?: number;
    media_type: string;
    hashtag: string[];
    mentioned_ids: string[];
    mentions: string[];
    images: string;
    media: string;
    source_user_id?: number;
    retweeted_status: RetweetedStatus;
    source_name: string;
    alexa_rank?: number;
    content: string;
    image: string;
    influence?: any;
    influence_time: string;
    ir_rank?: number;
    keyword?: any;
    location_names: string[];
    organization: string[];
    person: string[];
    position?: any;
    province?: any;
    cluster_id?: any;
    rank_in_cluster?: any;
    ["relation.avatar"]: string;
    ["relation.title"]: string;
    ["relation.type"]: string;
    ["relation.url"]: string;
    uptitle?: any;
    samane_replies: string[];
}

export interface RetweetedStatus {
    document_inserted_time: Date;
    display_text_range: number[];
    type: string;
    classification_coarse_grained_top_coarse_grained_category: string;
    classification_fine_grained_top_fine_grained_category: string;
    classification_coarse_grained_top_coarse_grained_prob: number;
    classification_fine_grained_top_fine_grained_prob: number;
    classification_fine_grained_Roozmare_Roozmare: number;
    post_engagment: number;
    political_direction1400_best_direction: string;
    gender: string;
    resource_influence: number;
    m3_age: string;
    media: string;
    id: string;
    text: string;
    entities: string;
    time: string;
    lang: string;
    is_quote: boolean;
    mentioned_ids: string[];
    retweet_count: number;
    favorit_count: number;
    robot_see_date: string;
    mentions: string[];
    extracted_mention: string[];
    samane_assign_user_id: string[];
    samane_assigner_user_id: string[];
    samane_post_status: string[];
    seen_time: string[];
    samane_replies: string[];
    sentiment_negative: number;
    sentiment_positive: number;
    sentiment_neutral: number;
    sentiment_objective: number;
    sentiment: string;
    score: number;
    user: User;
    link: string;
    classification_coarse_grained_ElmiVaDaneshghai?: number;
    classification_fine_grained_ElmiVaDaneshghai_Amouzesh?: number;
    hashtag: string[];
}

export interface PoliticalDirectionTotal {
    osolgara_prob: number;
    eslahtalab_prob: number;
    political_score: number;
    political_intensity: number;
    moaned_prob: number;
    political_prob: number;
    best_direction: string;
}

export interface User {
    friends_count: number;
    user_engagment: number;
    political_direction_total: PoliticalDirectionTotal;
    engagement_engagement_rate_max: number;
    description: string;
    created_at: any;
    language: string;
    avatar_link: string;
    profile_image_url: string;
    is_protected: boolean;
    is_verified: any;
    influence: number;
    RobotSeeDate_dt: string;
    tweets_count: number;
    full_gender: string;
    user_id: any;
    followers_count: number;
    name: string;
    ages: number[];
    norm_ExtractedURL_ss: string[];
    location: string;
    influence_date: any;
    m3_age: string;
    username: string;
    score: number;
    avatar: string;
    is_private?: number;
    profile_pic_url: string;
    media_count?: number;
    norm_ExtractedEmail_ss: any[];
    norm_extractedNationalCode_ss: any[];
    follower_count?: number;
    norm_ExtractedMention_ss: any[];
    external_url: string;
    political_direction_entekhabat1400: string;
    user_language: string;
    norm_extractedPostalCode_ss: any[];
    email?: any;
    extractedIP_ss: any[];
    biography: string;
    norm_ExtractedMobile_ss: string[];
    norm_ExtractedPhone_ss: string[];
    following_count?: number;
    grade: string;
    fullname: string;
    ExtractedHashtag_ss: string[];
    blockers: any[];
}

export interface Result {
    data: Post[];
    mata: any[];
}

export interface Response {
    result: Result;
    errors: any[];
}
export interface PostCard {
    avatar: string;
    username: string;
    time: string;
    description?: string;
    type: string;
    // images: string[];
    like_count?: number;
    comment_count?: number;
    view_count?: number;

    link: string;
    id: string;
    user:User
}
