const AppTitlesAndDescriptions = [
  {
    titles: ["변화에 대응할 수 있는 유연한 플랫폼"],
    descriptions: ["최신 기술을 적용하여 변화에 대응하는 플랫폼을 제공합니다."],
  },
  {
    titles: ["UI 트렌드 반영"],
    descriptions: ["최신 UI/UX 트렌드를 반영한 직관적인 디자인을 제공합니다."],
  },
  {
    titles: ["고객 맞춤형 기능 설계"],
    descriptions: [
      "고객의 요구에 맞춘 기능을 설계하여 최상의 솔루션을 제공합니다.",
    ],
  },
  {
    titles: ["확장 가능성"],
    descriptions: ["미래의 확장을 고려한 구조로 유연한 개발이 가능합니다."],
  },
  {
    titles: ["보안 강화"],
    descriptions: ["최신 보안 기술을 적용하여 안전한 환경을 제공합니다."],
  },
  {
    titles: ["데이터 분석"],
    descriptions: [
      "효율적인 데이터 분석 기능을 지원하여 인사이트를 제공합니다.",
    ],
  },
  {
    titles: ["클라우드 최적화"],
    descriptions: [
      "클라우드 환경에서 최적의 성능을 발휘하는 솔루션을 제공합니다.",
    ],
  },
];

export const app_sections = AppTitlesAndDescriptions.map((item, index) => ({
  image: `/images/app${index + 1}.svg`,
  title: item.titles,
  descriptions: item.descriptions,
}));

const WebTitlesAndDescriptions = [
  {
    titles: [
      "고객의 브랜드 가치를 보여주는 웹 페이지 ,",
      "고객의 브랜드 아이덴티티 반영",
    ],
    descriptions: ["iOS와 Android 지원을 기본으로,최적화된 성능을 제공"],
  },
  {
    titles: ["사용성의 강조"],
    descriptions: [
      "누구에게나 쉬운 디자인으로 첫인상을 강하게 남기며,",
      "방문자가 정보를 흡수 할 수 있도록 설계",
    ],
  },
  {
    titles: ["모바일 친화적 디자인"],
    descriptions: [
      "모바일과 데스크톱에서 최상의 경험을 제공할 수 있는반응형 웹",
      "디자인을 통해, 다양한 디바이스에서 최적의 경험을 보장",
    ],
  },
  {
    titles: ["검색 엔진 최적화"],
    descriptions: [
      "검색 엔진에 최적화된 구조와 키워드 전략을 통해,",
      "더 많은 방문자 유입을 유도하고 고객의 인지도를 높임",
    ],
  },
  {
    titles: ["관리화 업데이트의 용이선"],
    descriptions: [
      "페이지 관리와 업데이트가 용이하도록 제작하여,",
      "고객이 필요할 때마다 쉽게 콘텐츠를 수정하고 최신 정보를 반영",
    ],
  },
];

export const web_sections = WebTitlesAndDescriptions.map((item, index) => ({
  image: `/images/web${index + 1}.svg`,
  titles: item.titles,
  descriptions: item.descriptions,
}));

const PCTitlesAndDescriptions = [
  {
    titles: ["고객 맞춤형 설계"],
    descriptions: ["고객의 업무 흐름과 요구 사항에 맞는 맞춤형 솔루션 제공"],
  },
  {
    titles: ["자동화 기능"],
    descriptions: [
      "반복적인 작업이나 대량의 데이터를 자동으로 처리,",
      "휴먼 에러를 줄이고 업무 효율 극대화",
    ],
  },
  {
    titles: ["프로그램의 신뢰성"],
    descriptions: ["테스트와 품질 관리를 통해 신뢰성과 안정성 확보"],
  },
  {
    titles: ["걱정 없는 유지 보수"],
    descriptions: ["신속한 문제 해결과 유지 보수 서비스로 안심 사용"],
  },
];

export const pc_sections = PCTitlesAndDescriptions.map((item, index) => ({
  image: `/images/pc${index + 1}.svg`,
  titles: item.titles,
  descriptions: item.descriptions,
}));
