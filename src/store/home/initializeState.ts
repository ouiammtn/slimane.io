import { HomeState } from "../../types/home/store.home.types";
import { fetchLatestArticles } from "../../lib/graphql/fetchers/home";

export async function getHomeInitialState(): Promise<HomeState> {
  const state = { ...staticState };
  state.latestArticles = await fetchLatestArticles(3);
  return state;
}

const latestVideos = [
  {
    id: "oKpUy9wSZxU",
    title:
      "العمل عن بعد، التعلم الذاتي، Open-source، الشركات الناشئة، السفر و تنظيم الوقت | مع إسماعيل غالو",
  },
  {
    id: "AXLG39cSZgE",
    title:
      "العمل في جوجل، مسابقات البرمجة، الجيتار، Golang, GraalVM, Rust, Java, قراءة الكتب | مع مهدي شراشر",
  },
  {
    id: "VzNDxZ01nk0",
    title:
      "التكوين المهني، العمل في جوجل، توازن الحياة و العمل، Cloud computing و TEDx | عبد الفتاح الصغيور",
  },
  {
    id: "1HCu8Js32-o",
    title:
      "في 8 مارس أميمة دحوم تتحدث عن التحرش الجنسي, تعدد الزوجات, ناقصات عقل و دين و الثقافة المغربية",
  },
  {
    id: "rFRz_WVIg1s",
    title:
      "شنو تعلمت من الجامعة في المغرب بكل صراحة - What I've learned from college in Morocco (honestly)",
  },
  {
    id: "kAjGmkyMJbM",
    title: "eXtreme programming - البرمجة المتطرفة",
  },
];

const staticState: HomeState = {
  latestPodcastEmbedUrl:
    "https://anchor.fm/kass-atay-podcast/embed/episodes/Open-source-ev39gr",
  latestArticles: {},
  allVideosExternalLink:
    "https://www.youtube.com/channel/UCAKherxCCvXWHyGaeQKy-Jw/videos",
  presenterVideoId: "1sM54FPUagk",
  latestVideos: latestVideos,
};
