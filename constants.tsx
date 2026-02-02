import { Project, ServiceSystem } from './types';

export const VISION_IMAGE = "https://images.unsplash.com/photo-1493612276216-ee3925520721?q=80&w=2000&auto=format&fit=crop";

export const PILLARS: Project[] = [
  {
    id: 1,
    category: "SEREN BOOKS",
    title: "1. 도서 출판 및 작가 양성",
    description: "출판의 문턱을 낮추고 지식의 자산화를 돕습니다.",
    fullDescription: "AI 기술을 활용하여 지식의 자산화를 돕는 시스템을 구축합니다. 세렌북스는 누구나 작가가 될 수 있는 생태계를 만듭니다.",
    achievements: [
      "세렌북스 출판사 운영 및 ISBN 발급 시스템 구축",
      "교보문고 eBook 유통 및 자체 쇼핑몰/스마트스토어 운영",
      "대표 저작물: 《제재돌-중문편》 제주마을아카이빙동화",
      "《AI특허출원혁명》 시리즈 (1~3권)",
      "《전자책 쓰는 전자책(전자전)》 워크북 및 퍼널 연계"
    ],
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop",
    tags: ["AI Publishing", "eBook", "ISBN System"]
  },
  {
    id: 2,
    category: "SEREN LABS",
    title: "2. AI 특허 출원 자동화",
    description: "아이디어가 권리가 되는 과정을 기술로 혁신합니다.",
    fullDescription: "특허 출원의 복잡한 과정을 AI 기술로 자동화하여 아이디어 선점을 돕는 테크 솔루션입니다.",
    features: [
      "KIPRIS 연동 실시간 특허 검색 시스템",
      "AI 기반 명세서 및 청구항 자동 생성 기능",
      "가출원(임시출원) 전략을 통한 빠른 아이디어 선점 지원"
    ],
    image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?q=80&w=2070&auto=format&fit=crop",
    tags: ["Patent AI", "KIPRIS API", "Legal Tech"]
  },
  {
    id: 3,
    category: "EDUCATION",
    title: "3. SEREN School",
    description: "개인의 성장이 곧 미래 교육의 혁신이라는 믿음으로 운영되는 세렌의 교육 브랜드입니다.",
    fullDescription: "SEREN School은 학부모와 교육 종사자를 포함해, 자신의 경험과 지식을 콘텐츠로 전환하고  AI와 함께 작가로 성장하고자 하는 개인을 위한 교육 과정입니다. 배움이 지식에 머무르지 않고, 콘텐츠·브랜드·지식재산으로 확장될 수 있도록 실행 중심의 구조를 제공합니다.",
    achievements: [
      "평생학습 수강생 대상 '나만의 콘텐츠, 브랜딩하는 방법' 과정 운영",
      "'나만의 아이디어, 첫 특허 캠페인' 진행 예정",
      "전자책-강의-워크북으로 이어지는 체계적인 교육 시스템"
    ],
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop",
    tags: ["Education", "Parenting", "Workshops"]
  },
  {
    id: 4,
    category: "IP & LOCAL",
    title: "4. 제주 지역 활성화 프로젝트",
    description: "제주의 로컬 가치와 교육 IP를 결합하여 수익형 콘텐츠를 창출합니다.",
    fullDescription: "제주의 자연과 문화를 캐릭터 IP와 연계하여 지역 경제 활성화와 교육적 가치를 동시에 실현합니다.",
    features: [
      "제주 성읍1리 마을만들기: 체험형 관광 콘텐츠 설계",
      "JEJAEDOL(제재돌): 현무암 세계관 기반 캐릭터 IP 개발",
      "STEAM 교육 교구재 및 동화, 굿즈 라인업 확장",
      "마을 소득 모델 및 로컬 브랜딩 전략 수립"
    ],
    image: "https://images.unsplash.com/photo-1590422114321-700681a967f6?q=80&w=2070&auto=format&fit=crop",
    tags: ["Local Brand", "Character IP", "Jeju"]
  },
  {
    id: 5,
    category: "LIFESTYLE",
    title: "5. 세렌 토탈 홈케어 & 브랜드화",
    description: "서비스업의 노하우를 실물 브랜드로 치환하는 실험입니다.",
    fullDescription: "최고급 호텔식 관리 노하우를 일상의 실물 제품으로 브랜드화하여 프리미엄 라이프스타일을 제안합니다.",
    achievements: [
      "프리미엄 침구 브랜드 'SERENHOME' 런칭",
      "자체 개발 '기능성 청소 장갑' (뜨개 구조/수세미 원단 특허 연계)",
      "호텔식 관리 및 수납정리 서비스 전문 노하우 자산화",
    ],
    image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=2071&auto=format&fit=crop",
    tags: ["Lifestyle", "Brand Goods", "Homecare"]
  }
];

export const SYSTEMS: ServiceSystem[] = [];