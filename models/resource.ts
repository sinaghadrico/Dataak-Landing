export interface Resource {
    friends_count: number;
    user_engagment?: number;
    description: string;
    created_at: string;
    language: string;
    avatar_link: string;
    profile_image_url: string;
    is_protected: boolean;
    is_verified: any;
    influence?: number;
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
    username: string;
    score: number;
    post_count: number;
    resource_type: string;
    political_direction_total: PoliticalDirectionTotal;
    political_direction_entekhabat1400: PoliticalDirectionEntekhabat1400;
    m3_age: string;
    is_private?: number;
    profile_pic_url: string;
    engagement_engagement_rate_max?: number;
    norm_ExtractedMobile_ss: string[];
    fake_follower_percentage?: number;
    ExtractedHashtag_ss: string[];
    extracted_email?: any;
    extracted_hashtag: string[];
    extracted_ip?: any;
    extracted_mention: string[];
    extracted_mobile: string[];
    extracted_national_code?: any;
    extracted_phone?: any;
    extracted_postal_code?: any;
    extracted_url: string[];
    avatar: string;
    copy_count?: number;
    title: string;
    id: string;
    lang: string;
    member_count?: number;
    nationality?: any;
    norm_title?: any;
    robot_see_date: string;
    view_count?: any;
    tags: any[];
    alexa_rank?: number;
    alexa_reach?: any;
    original_count?: number;
    ir_rank?: number;
    media_type: string;
    url: string;
    alexa_pageviews?: any;
    visited_countries?: any;
    weekly_news_count?: any;
    average_visit_per_million?: any;
    load_time?: any;
    filter_status?: any;
    server_location?: any;
}


export interface PoliticalDirectionTotal {
    osolgara_prob?: number;
    eslahtalab_prob?: number;
    political_score?: number;
    political_intensity?: number;
    moaned_prob?: number;
    political_prob?: number;
    best_direction: string;
}

export interface PoliticalDirectionEntekhabat1400 {
    montaghed_count: number;
    total_count: number;
    moaned_prob: number;
    political_count: number;
    haami_count: number;
    haami_prob: number;
    political_prob: number;
    moaned_count: number;
    best_direction: string;
    montaghed_prob: number;
}



export interface Result {
    data: Resource[];
    mata: any[];
}

export interface Response {
    result: Result;
    errors: any[];
}